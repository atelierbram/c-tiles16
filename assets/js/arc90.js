// ==================
// Here be the magic!
// ==================

$(function(){
  // Do we have native HTML5 sliders?
  var hasRange = Modernizr.inputtypes.range;

  // use jQuery UI to handle it for us.
  if (!hasRange) {
    var $ranges = $('input[type="range"]');

    $ranges.each(function (i, r) {
      var $r   	 = $(r),
      rangeID  = $r.attr('id'),
      rangeMin = $r.attr('min'),
      rangeMax = $r.attr('max');

    r.style.display = 'none';
    $r.removeAttr('id');

    $('<div id="'+rangeID+'" class="fakeSlider">').slider({ max : rangeMax, min : rangeMin }).insertAfter(r);
    });
  } 

  // Cache jQuery selectors
  var $slider_l   = $('#slider_l'), // Slider: Lightness
      $slider_s   = $('#slider_s'), // Slider: Saturation
      $slider_h   = $('#slider_h'), // Slider: Hue
      $color      = $('#arc90-color'), // Color input
      $swatchA    = $('#arc90-swatch1 .arc90-swatch'),
      $swatchB    = $('#arc90-swatch2 .arc90-swatch'),
      $code       = $('#arc90-code'), // SASS code output
      $codeOutput = $('#arc90-codeOutput'),
      $form       = $('#arc90-form'),
      $output_clr = $('#arc90-swatch2 .arc90-swatchLabel'),
      $input_clr  = $('#arc90-swatch1 .arc90-swatchLabel');

  // We use these to dynamically call methods on Color
  var channel_map = {
    h : 'hue',
    s : 'saturation',
    l : 'lightness'
  }

  // Maintain state on our swatches
  var swatchA = swatchB = {};

  // Template for SASS functions. We can nest these to make
  // compound functions
  var tpl = _.template("<%= func %>(<%= value %>, <%= transform %>)");

  // Hoist variables matey!
  var direction, start_color, prev, current, base, stack, sliders, transforms;

  // Define some storage vars
  stack = [];
  sliders = {
    slider_h : {},
    slider_s : {},
    slider_l : {}
  };

  // These are the transform methods used by the sliders. We have
  // them in an object so we can call them easily from a loop
  // using the id's of the inputs themselves as hooks.
  transforms = {

    // Lighten/Darken
    slider_l : function(val, base_color) {
      var t;
      if (val < 0) {
        // Darken
        t = Transforms.darken(base_color, Math.abs(val));
        return {
          color : new Color(t),
                func  : 'darken',
                value : Math.abs(val)
        }
      } else if (val > 0) {
        // Lighten
        t = Transforms.lighten(base_color, Math.abs(val));
        return {
          color : new Color(t),
                func  : 'lighten',
                value : Math.abs(val)
        }
      } else if (val === 0) {
        stack_remove('slider_l');
        return {
          color : base_color,
                func  : null,
                value : null
        }
      }
    },

    // Saturate/Desaturate
    slider_s : function(val, base_color) {
      var t;
      if (val < 0) {
        // Darken
        t = Transforms.desaturate(base_color, Math.abs(val));
        return {
          color : new Color(t),
                func  : 'desaturate',
                value : Math.abs(val)
        }
      } else if (val > 0) {
        // Lighten
        t = Transforms.saturate(base_color, Math.abs(val));
        return {
          color : new Color(t),
                func  : 'saturate',
                value : Math.abs(val)
        }
      } else if (val === 0) {
        stack_remove('slider_s');
        return {
          color : base_color,
                func  : null,
                value : null
        }
      }
    },

    // Adjust Hue
    slider_h : function(val, base_color) {
      var t;
      t = Transforms.adjust_hue(base_color, Math.abs(val));
      if (val === 0) {
        stack_remove('slider_h');
        return {
          color : base_color,
                func  : null,
                value : null
        }
      }

      return {
        color : new Color(t),
              func  : 'adjust_hue',
              value : Math.abs(val)
      }
    }
  }

  // =================
  // Page interactions
  // =================

  // On page load, focus the color input and display the initial helper text
  $color.focus();
  $('#initialHelp').delay(300).animate({opacity:'1',left:'45%'});

  // Give the input color's <li> a class of focus when #color is in focus
  $color.focus(function(){
    $(this).parent().addClass('focus');
  }).blur(function(){
    $(this).parent().removeClass('focus');
  });

  // Hex validation rule
  var valid_hex = /[0-9A-Fa-f]/g;

  // give the form a class of 'active' when the color is validated
  $color.keyup(function(){

    // Only allow valid Hexadecimal values
    colorValue = $(this).val().match(valid_hex);
    colorValue = (colorValue) ? colorValue.join('') : null;
    $(this).val(colorValue);

    // when it hits 6 characters, fill everything in in the form
    if ( colorValue && colorValue.length > 5 ) {
      init(colorValue); // Initialize the application
      $form.removeClass('inactive');
      $form.addClass('active');
      $('#initialHelp').fadeOut();
    } else {
      $form.addClass('inactive');
      $form.removeClass('active');
    }
  });


  // Clicking the code will select the text in the input and 
  // give you a helpful message
  $codeOutput.data('state', 'default');
  $codeOutput.on('vanish', function(){
    if ($codeOutput.data('state') === 'default') {
      // Assign a handler to bring up help message
      $code.click(function(){
        if ( $(this).not(":empty") ) {
          $code.select();
          $('.arc90-codeHelp').fadeIn();
        }
      });
      $codeOutput.data('state', 'active');
    }
  })

  $('.arc90-reset').click(function(e){
    e.preventDefault();
    var slider = $(this).parent().find('label').attr('for');
    if (slider) {
      var channel   = slider.split('_')[1];
      var reset_val = (channel === 'h') ? 0 : start_color[channel_map[channel]]();

      if (!hasRange) {
        // jQuery UI slider
        $('#' + slider).slider('value', reset_val);
        deriveTransformation($('#' + slider), reset_val, slider);
      } else {
        // Reset native HTML5 slider
        $('#' + slider).val(reset_val);
        deriveTransformation($('#' + slider), reset_val, slider);
      }
    }
  });

  // Fade out the code help message
  var throttle_code_help = _.throttle(checkCodeHelp, 300);
  function checkCodeHelp() {
    if ($('.arc90-codeHelp').css('display') === 'block') {
      $('.arc90-codeHelp').fadeOut('fast');
    }
  }

  // ==================
  // Event Handling
  // ==================

  $swatchA.on('transform', function(event, color){
    $(event.target).css('background-color', color.hex);
    $(event.target).find('.arc90-swatchPointer').css('border-left-color', color.hex);
  });

  $swatchB.on('transform', function(event, color){
    $(event.target).css('background-color', color.hex);
    $(event.target).find("span").html(color.hex);
  });

  $output_clr.on('transform', function(event, color){
    $(event.target).css('color', color);
  })

  $input_clr.on('transform', function(event, color){
    $(event.target).css('color', color);
  })

  // ==================
  // Color Calculations
  // ==================

  // Kick it.
  function init(color) {
    // Initialize the swatches
    start_color = new Color(color);
    $swatchA.trigger('transform', [start_color]);
    $swatchB.trigger('transform', [start_color]);

    // Show our labels & color them
    $input_clr.css('display', 'block');
    $output_clr.css('display', 'block');
    $input_clr.trigger('transform', [getInverseColor(start_color)]);
    $output_clr.trigger('transform', [getInverseColor(start_color)]);

    // If we have a previous value, clear the stack and labels
    if ($code.val() !== '') {
      $code.val('');
      $code.attr('placeholder', 'Fiddle with the sliders to get the SASS');
      stack = [];
    }

    // Initialize sliders
    if (!hasRange) {
      // No Sliders? No problem! jQuery UI for you.
      $slider_l.slider( "option", "value", start_color.hsl.l);
      $slider_s.slider( "option", "value", start_color.hsl.s);
      $slider_h.slider( "option", "value", start_color.hsl.h);
    } else {
      $slider_l.val(start_color.hsl.l);
      $slider_s.val(start_color.hsl.s);
      $slider_h.val(start_color.hsl.h);
    }

    // Initialize storage units
    sliders.slider_l.start_val = start_color.hsl.l;
    sliders.slider_s.start_val = start_color.hsl.s;
    sliders.slider_h.start_val = start_color.hsl.h;
  }

  // Push a slider reference onto the stack - unless it
  // already exists
  function stack_add(id) {
    if (!_.find(stack, function(item){ return item === id })) {
      stack.push(id);
    }
  }

  // Remove an existing slider reference from the stack
  function stack_remove(id) {
    return stack = _.reject(stack, function(i) { return i === id })
  }

  // Branch how we handle the sliders depending on whether
  // native HTML5 controls are present or we're using
  // jQuery sliders.
  if (!hasRange) {
    $('.ui-slider').on('slide', function(e) {
      var $el = $(e.target),
      val = $(this).slider('option', 'value'),
      id  = $el.attr('id');
    deriveTransformation($el, val, id);
    $codeOutput.trigger('vanish');
    });
  } else {
    $form.on('change', 'input[type=range]', function(e) {
      var $el = $(e.target), 
      val = $el.val(),
      id  = $el.attr('id');
    deriveTransformation($el, val, id);
    $codeOutput.trigger('vanish');
    });
  }



  // Create the inverse b/w version of a color. Used in labels.
  function getInverseColor(color_object) {
    var inverse_rgb   = _.map(color_object.rgb, function(num, key){ return 255 - num; }),
        inverse_color = new Color('#ffffff'),
        mod_color     = new Color(inverse_color.rgb2hex({r : inverse_rgb[0], g : inverse_rgb[1], b : inverse_rgb[2]})),
        mod_hsl       = mod_color.mod({s : 0});

    return mod_color.hsl2hex(mod_hsl);
  }

  // Take the slider inputs and derive the SASS functions
  // from the HSL colors they create using the start color
  // as the transform point.
  function deriveTransformation($el, val, id) {

    throttle_code_help();
    stack_add(id);

    if (id !== 'slider_h') {
      increment = val - sliders[id].start_val;
    } else {
      increment = val;
    }

    sliders[id].increment = increment; // Store this for use below

    // Walk the stack and determine what our base colors should be.
    // Then build the function stack
    var output_color = start_color,
        output_value,
        transform;

    // Use reduce to iterate over the stack and derive our
    // final output color. We like it functional yo!
    output_value = _.reduce(stack, function(memo, func) {
      // if (func !== undefined) {
      transform    = transforms[func](sliders[func].increment, output_color);
      output_color = transform.color;
      if (memo === undefined) {
        if (transform.func === null) {
          return start_color.hex;
        } else {
          return tpl({
            'func'      : transform.func,
            'value'     : start_color.hex,
            'transform' : Math.floor(transform.value)
          });
        }
      } else {
        if (transform.func === null) {
          return memo;
        } else {
          return tpl({
            'func'      : transform.func,
            'value'     : memo,
            'transform' : Math.floor(transform.value)
          });
        }
      }
      // }
    }, start_color.hex)
    $code.val(output_value);
    $swatchB.trigger('transform', [output_color]);
    $output_clr.trigger('transform', [getInverseColor(output_color)]);
  }
});

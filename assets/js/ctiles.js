var maxHeight = 512;

$(function(){

  $(".dropdown > li").hover(function() {

    var $container = $(this),
    $list = $container.find("ul"),
    $anchor = $container.find("a"),
    height = $list.height() * 1.1,       // make sure there is enough room at the bottom
    multiplier = height / maxHeight;     // needs to move faster if list is taller

  // need to save height here so it can revert on mouseout
  $container.data("origHeight", $container.height());

  // so it can retain it's rollover color all the while the dropdown is open
  $anchor.addClass("hover");

  // make sure dropdown appears directly below parent list item
  $list
    .show()
    .css({
      paddingTop: $container.data("origHeight")
    });

  // don't do any animation if list shorter than max
  if (multiplier > 1) {
    $container
      .css({
        height: maxHeight,
        overflow: "hidden"
      })
    .mousemove(function(e) {
      var offset = $container.offset();
      var relativeY = ((e.pageY - offset.top) * multiplier) - ($container.data("origHeight") * multiplier);
      if (relativeY > $container.data("origHeight")) {
        $list.css("top", -relativeY + $container.data("origHeight"));
      };
    });
  }

  }, function() {

    var $el = $(this);

    // put things back to normal
    $el
      .height($(this).data("origHeight"))
      .find("ul")
      .css({ top: 0 })
      .hide()
      .end()
      .find("a")
      .removeClass("hover");

  });

});



$(function() {
  $(".switchto-ctiles16-flatui").click(function(){$("#stylesheet").attr("href","../assets/css/ctiles16-flatui.css");return false});
  $(".switchto-ctiles16-pantone2014spring").click(function(){$("#stylesheet").attr("href","../assets/css/ctiles16-pantone2014spring.css");return false});
  $(".switchto-ctiles16-newdefaults").click(function(){$("#stylesheet").attr("href","../assets/css/ctiles16-newdefaults.css");return false});
  $(".switchto-ctiles16-custom").click(function(){$("#stylesheet").attr("href","../assets/css/ctiles16-custom.css");return false});
  $(".switchto-ctiles16-custom").click(function(){$("#stylesheet").attr("href","../assets/css/ctiles16-custom.css");return false});
  $(".switchto-ctiles16-rebase").click(function(){$("#stylesheet").attr("href","../assets/css/ctiles16-rebase.css");return false});
  $(".switchto-ctiles16-3024").click(function(){$("#stylesheet").attr("href","../assets/css/ctiles16-3024.css");return false});
  $(".switchto-ctiles16-atelierdune").click(function(){$("#stylesheet").attr("href","../assets/css/ctiles16-atelierdune.css");return false});
  $(".switchto-ctiles16-atelierforest").click(function(){$("#stylesheet").attr("href","../assets/css/ctiles16-atelierforest.css");return false});
  $(".switchto-ctiles16-atelierheath").click(function(){$("#stylesheet").attr("href","../assets/css/ctiles16-atelierheath.css");return false});
  $(".switchto-ctiles16-atelierlakeside").click(function(){$("#stylesheet").attr("href","../assets/css/ctiles16-atelierlakeside.css");return false});
  $(".switchto-ctiles16-atelierseaside").click(function(){$("#stylesheet").attr("href","../assets/css/ctiles16-atelierseaside.css");return false});
  $(".switchto-ctiles16-chalk").click(function(){$("#stylesheet").attr("href","../assets/css/ctiles16-chalk.css");return false});
  $(".switchto-ctiles16-default").click(function(){$("#stylesheet").attr("href","../assets/css/ctiles16-default.css");return false});
  $(".switchto-ctiles16-eighties").click(function(){$("#stylesheet").attr("href","../assets/css/ctiles16-eighties.css");return false});
  $(".switchto-ctiles16-greenscreen").click(function(){$("#stylesheet").attr("href","../assets/css/ctiles16-greenscreen.css");return false});
  $(".switchto-ctiles16-mocha").click(function(){$("#stylesheet").attr("href","../assets/css/ctiles16-mocha.css");return false});
  $(".switchto-ctiles16-monokai").click(function(){$("#stylesheet").attr("href","../assets/css/ctiles16-monokai.css");return false});
  $(".switchto-ctiles16-ocean").click(function(){$("#stylesheet").attr("href","../assets/css/ctiles16-ocean.css");return false});
  $(".switchto-ctiles16-railscasts").click(function(){$("#stylesheet").attr("href","../assets/css/ctiles16-railscasts.css");return false});
  $(".switchto-ctiles16-bakelite").click(function(){$("#stylesheet").attr("href","../assets/css/ctiles16-bakelite.css");return false});
  $(".switchto-ctiles16-kitchen").click(function(){$("#stylesheet").attr("href","../assets/css/ctiles16-kitchen.css");return false});
  $(".switchto-ctiles16-studio").click(function(){$("#stylesheet").attr("href","../assets/css/ctiles16-studio.css");return false});
  $(".switchto-ctiles16-solarized").click(function(){$("#stylesheet").attr("href","../assets/css/ctiles16-solarized.css");return false});
  $(".switchto-ctiles16-tomorrow").click(function(){$("#stylesheet").attr("href","../assets/css/ctiles16-tomorrow.css");return false});
  $(".styleswitch").click(function(){$(".styleswitch").removeClass("is-selected");$(this).toggleClass("is-selected");return false})
});
$("#bgToggle").click(function() {
  $("body").toggleClass("dark");
});
$("#headerReset").click(function() {
  $("#appTitle").removeAttr("style");
});
$("style[contenteditable]").hover(function() {
  $("body").toggleClass("is-hovered");
});

$(".fill-base00").hover(function() {
  $("body").toggleClass("bg-base00");
});

$(".fill-base01").hover(function() {
  $("body").toggleClass("bg-base01");
});

$(".fill-base02").hover(function() {
  $("body").toggleClass("bg-base02");
});

$(".fill-base03").hover(function() {
  $("body").toggleClass("bg-base03");
});

$(".fill-base04").hover(function() {
  $("body").toggleClass("bg-base04");
});

$(".fill-base05").hover(function() {
  $("body").toggleClass("bg-base05");
});

$(".fill-base06").hover(function() {
  $("body").toggleClass("bg-base06");
});

$(".fill-base07").hover(function() {
  $("body").toggleClass("bg-base07");
});

$(".fill-base16-yellow").hover(function() {
  $("body").toggleClass("bg-base16-yellow");
});

$(".fill-base16-orange").hover(function() {
  $("body").toggleClass("bg-base16-orange");
});

$(".fill-base16-red").hover(function() {
  $("body").toggleClass("bg-base16-red");
});

$(".fill-base16-magenta").hover(function() {
  $("body").toggleClass("bg-base16-magenta");
});

$(".fill-base16-violet").hover(function() {
  $("body").toggleClass("bg-base16-violet");
});

$(".fill-base16-blue").hover(function() {
  $("body").toggleClass("bg-base16-blue");
});

$(".fill-base16-cyan").hover(function() {
  $("body").toggleClass("bg-base16-cyan");
});

$(".fill-base16-green").hover(function() {
  $("body").toggleClass("bg-base16-green");
});

$(".styleswitch").click(function() {
  $(".colorblend-table").removeClass("bl-start");
});
$(".switchto-blend-yellow").click(function() {
  $(".colorblend-table").removeClass("bl-2 bl-3 bl-4 bl-5 bl-6 bl-7 bl-8");
  $(".colorblend-table").toggleClass("bl-1");
});
$(".switchto-blend-orange").click(function() {
  $(".colorblend-table").removeClass("bl-1 bl-3 bl-4 bl-5 bl-6 bl-7 bl-8");
  $(".colorblend-table").toggleClass("bl-2");
});
 $(".switchto-blend-red").click(function() {
  $(".colorblend-table").removeClass("bl-1 bl-2 bl-4 bl-5 bl-6 bl-7 bl-8");
  $(".colorblend-table").toggleClass("bl-3");
});
 $(".switchto-blend-magenta").click(function() {
  $(".colorblend-table").removeClass("bl-1 bl-2 bl-3 bl-5 bl-6 bl-7 bl-8");
  $(".colorblend-table").toggleClass("bl-4");
});
 $(".switchto-blend-violet").click(function() {
  $(".colorblend-table").removeClass("bl-1 bl-2 bl-3 bl-4 bl-6 bl-7 bl-8");
  $(".colorblend-table").toggleClass("bl-5");
});
 $(".switchto-blend-blue").click(function() {
  $(".colorblend-table").removeClass("bl-1 bl-2 bl-3 bl-4 bl-5 bl-7 bl-8");
  $(".colorblend-table").toggleClass("bl-6");
});
 $(".switchto-blend-cyan").click(function() {
  $(".colorblend-table").removeClass("bl-1 bl-2 bl-3 bl-4 bl-5 bl-6 bl-8");
  $(".colorblend-table").toggleClass("bl-7");
});
 $(".switchto-blend-green").click(function() {
  $(".colorblend-table").removeClass("bl-1 bl-2 bl-3 bl-4 bl-5 bl-6 bl-7");
  $(".colorblend-table").toggleClass("bl-8");
});

/**
 * Light Weight jQuery Accordions
 * http://wordimpress.com/super-lightweight-jquery-website-accordions-without-a-plugin/
 * http://jsfiddle.net/devinwalker/drpKm/3096/light/
 */

(function($) {
  //Hide all panels
  // var allPanels = $(".accordion > dd").hide();
  //Show first panel
  // $(".accordion > dd:first-of-type").show();
  $(".accordion > dd:first-of-type").addClass("active");
  //Add active class to first panel
  $(".accordion > dt:first-of-type").addClass("accordion-active");
  //Handle click function
  jQuery(".accordion > dt").on("click", function() {
    //this clicked panel
    $this = $(this);
    //the target panel content
    $target = $this.next();

    //Only toggle non-displayed
    if(!$this.hasClass("accordion-active")){
      //slide up any open panels and remove active class
      // $this.parent().children('dd').slideUp();
      $this.parent().children("dd").addClass("slide-up");
      $this.parent().children("dd").removeClass("active");

      //remove any active class
      jQuery(".accordion > dt").removeClass("accordion-active");


      //add active class
      $this.addClass("accordion-active");
      //slide down target panel
      // $target.addClass('active').slideDown();
  // $(".accordion > dd").hide();
      // $target.removeAttr("style");
      $target.addClass("active");
      $target.removeClass("slide-up");

    }

    return false;
  });

})(jQuery);

$(function() {

$( "#svg-container" ).append($("<button>adjust hue</button>").attr('id','btnAdjustHue').addClass('btn') );
$( "#svg-container" ).append($("<button>lighten</button>").attr('id','btnLighten').addClass('btn') );
$( "#svg-container" ).append($("<button>darken</button>").attr('id','btnDarken').addClass('btn') );
$( "#svg-container" ).append($("<button>saturate</button>").attr('id','btnSaturate').addClass('btn') );
$( "#svg-container" ).append($("<button>desaturate</button>").attr('id','btnDesaturate').addClass('btn') );
$( "#svg-container" ).append($("<button>grayscale</button>").attr('id','btnGrayscale').addClass('btn') );
$( "#svg-container" ).append($("<button>complement</button>").attr('id','btnComplement').addClass('btn') );
$( "#svg-container" ).append($("<button>invert</button>").attr('id','btnInvert').addClass('btn') );
$( "#svg-container" ).append($("<button>shade</button>").attr('id','btnShade').addClass('btn') );
$( "#svg-container" ).append($("<button>tint</button>").attr('id','btnTint').addClass('btn') );
$( "#svg-container" ).append($("<button>transparentize</button>").attr('id','btnTransparentize').addClass('btn') );
$( "#svg-container" ).append($("<button>scale</button>").attr('id','btnScale').addClass('btn') );
$( "#svg-container" ).append($("<button>adjust color</button>").attr('id','btnAdjustColor').addClass('btn') );
$( "#svg-container" ).append($("<button>reset</button>").attr('id','btnReset').addClass('btn reset btn--base16-blue') );

$( "#testTextcolor" ).prepend($("<button>toggle page background-colors</button>").attr('id','bgToggle').addClass('btn') );

  $('#btnAdjustHue').on('click', function() {
    $(this)
    .parent()
    .toggleClass('is-hue-adjusted')
    .removeClass('is-lightened is-darkened is-saturated is-desaturated is-grayscaled is-complemented is-inverted is-shaded is-tinted is-transparentized is-scaled is-color-adjusted is-not-toggled')
    .addClass('is-toggled');

  });


  $('#btnLighten').on('click', function () {
    $(this)
    .parent()
    .toggleClass('is-lightened')
    .removeClass('is-hue-adjusted is-darkened is-saturated is-desaturated is-grayscaled is-complemented is-inverted is-shaded is-tinted is-transparentized is-scaled is-color-adjusted is-not-toggled')
    .addClass('is-toggled');

  });


  $('#btnDarken').on('click', function () {
    $(this)
    .parent()
    .toggleClass('is-darkened')

    .removeClass('is-hue-adjusted is-lightened is-saturated is-desaturated is-grayscaled is-complemented is-inverted is-shaded is-tinted is-transparentized is-scaled is-color-adjusted is-not-toggled')
    .addClass('is-toggled');
  });

  $('#btnSaturate').on('click', function () {
    $(this)
    .parent()
    .toggleClass('is-saturated')

    .removeClass('is-hue-adjusted is-lightened is-darkened is-desaturated is-grayscaled is-complemented is-inverted is-shaded is-tinted is-transparentized is-scaled is-color-adjusted is-not-toggled')
    .addClass('is-toggled');
  });


  $('#btnDesaturate').on('click', function () {
    $(this)
    .parent()
    .toggleClass('is-desaturated')
    .removeClass('is-hue-adjusted is-lightened is-darkened is-saturated is-grayscaled is-complemented is-inverted is-shaded is-tinted is-transparentized is-scaled is-color-adjusted is-not-toggled')

    .addClass('is-toggled');
  });

  $('#btnGrayscale').on('click', function () {
    $(this)
    .parent()
    .toggleClass('is-grayscaled')
    .removeClass('is-hue-adjusted is-lightened is-darkened is-saturated is-desaturated is-complemented is-inverted is-shaded is-tinted is-transparentized is-scaled is-color-adjusted is-not-toggled')

    .addClass('is-toggled');
  });


  $('#btnComplement').on('click', function () {
    $(this)
    .parent()
    .toggleClass('is-complemented')
    .removeClass('is-hue-adjusted is-lightened is-darkened is-saturated is-desaturated is-grayscaled is-inverted is-shaded is-tinted is-transparentized is-scaled is-color-adjusted is-not-toggled')

    .addClass('is-toggled');
  });

  $('#btnInvert').on('click', function () {
    $(this)
    .parent()
    .toggleClass('is-inverted')
    .removeClass('is-hue-adjusted is-lightened is-darkened is-saturated is-desaturated is-grayscaled is-shaded is-complemented is-tinted is-transparentized is-scaled is-color-adjusted is-not-toggled')

    .addClass('is-toggled');
  });

  $('#btnShade').on('click', function () {
    $(this)
    .parent()
    .toggleClass('is-shaded')
    .removeClass('is-hue-adjusted is-lightened is-darkened is-saturated is-desaturated is-grayscaled is-complemented is-inverted is-tinted is-transparentized is-scaled is-color-adjusted is-not-toggled')

    .addClass('is-toggled');
  });


  $('#btnTint').on('click', function () {
    $(this)
    .parent()
    .toggleClass('is-tinted')
    .removeClass('is-hue-adjusted is-lightened is-darkened is-saturated is-desaturated is-grayscaled is-complemented is-inverted is-shaded is-transparentized is-scaled is-color-adjusted is-not-toggled')

    .addClass('is-toggled');
  });

  $('#btnTransparentize').on('click', function () {
    $(this)
    .parent()
    .toggleClass('is-transparentized')
    .removeClass('is-hue-adjusted is-lightened is-darkened is-saturated is-desaturated is-grayscaled is-complemented is-inverted is-shaded is-tinted is-scaled is-color-adjusted is-not-toggled')

    .addClass('is-toggled');
  });


  $('#btnScale').on('click', function () {
    $(this)
    .parent()
    .toggleClass('is-scaled')
    .removeClass('is-hue-adjusted is-lightened is-darkened is-saturated is-desaturated is-grayscaled is-complemented is-inverted is-shaded is-tinted is-transparentized is-color-adjusted is-not-toggled')

    .addClass('is-toggled');
  });


  $('#btnAdjustColor').on('click', function() {
    $(this)
    .parent()
    .toggleClass('is-color-adjusted')
    .removeClass('is-hue-adjusted is-lightened is-darkened is-saturated is-desaturated is-grayscaled is-complemented is-inverted is-shaded is-tinted is-transparentized is-scaled is-not-toggled')

    .addClass('is-toggled');
  });


  $('#btnReset').on('click', function() {
    $(this)
    .parent()
    .removeClass('is-hue-adjusted is-lightened is-darkened is-saturated is-desaturated is-grayscaled is-complemented is-inverted is-shaded is-tinted is-transparentized is-scaled is-color-adjusted is-toggled')

    .addClass('is-not-toggled');
  });

 $('#bgToggle').click(function () {
  $('body').each(function(){
    var classes = ['bg-base00','bg-base01','bg-base02','bg-base03','bg-base04','bg-base05','bg-base06', 'bg-base07','bg-base16-yellow','bg-base16-orange','bg-base16-red','bg-base16-magenta','bg-base16-violet','bg-base16-blue','bg-base16-cyan','bg-base16-green', 'bg-transparent'];
    this.className = classes[($.inArray(this.className, classes)+1)%classes.length];
  });
});

});

// HSLA Color Converter by Estelle Weyl
// http://www.standardista.com/hsla-color-picker/
// https://github.com/estelle/HSLA-Color-Converter
var browserPrefix = getPrefix();
function getPrefix() {
  var myJS = document.getElementsByTagName('script')[0];
  if('WebkitOpacity' in myJS.style) return 'webkit';
  var regex = /^(Moz|Ms|O)(?=[A-Z])/;
  for(var property in myJS.style) {
    if(regex.test(property)) {
      return property.match(regex)[0];
    }
  }
  return '';
}

function createHSLA(h, s, l, a){
  var h = h || document.getElementById('hsl-h').value * 1.0;
  var s = s || document.getElementById('hsl-s').value * 1.0;
  var l = l || document.getElementById('hsl-l').value * 1.0;
  var a = a ||document.getElementById('hsl-a').value * 1.0;

  var hslapicker = "";
  for(var i=0; i <=360; i++){
    hslapicker+= '<i style="background: hsla(' + i + ', ' + s + '%, ' + l + '%, ' + a +')"></i>';
  }

}
function changeHSL() {
  var h = document.getElementById('hsl-h').value * 1.0;
  var s = document.getElementById('hsl-s').value * 1.0;
  var l = document.getElementById('hsl-l').value * 1.0;
  var a = document.getElementById('hsl-a').value * 1.0;
  var hex = '';

  a = ((a < 1 && a > 0) ? a : a / 100).toFixed(2);
  var el = document.getElementById('hsl-example');
  if(a == 1){
    var hsla = 'hsl(' + h + ', ' + s + '%, ' + l + '%)'
  } else {
    var hsla = 'hsla(' + h + ', ' + s + '%, ' + l + '%, ' + a + ')'
        }
        el.style.backgroundColor = hsla;
        var rgba = el.style.backgroundColor;
        if(a == 1){
          hex = '<br/>' + colorToHex(rgba);
        }
        el.innerHTML =  "<h4>background-color:</h4>" + " <br/>" + "<div id='colorCode' class='color-code-output'>" + hsla + " <br/>" + rgba + hex + "</div>";

        document.getElementById('hsl-h-value').textContent = (h < 100)? h + ', ': h + ',';
        document.getElementById('hsl-s-value').textContent = (s < 100)? s + '%, ': s + '%,';
        document.getElementById('hsl-l-value').textContent = (l < 100)? l + '%, ': l + '%,';
        document.getElementById('hsl-a-value').textContent = a + '';
        createHSLA(h, s, l, a);
        }

        // end background-color

        // text-color

        function createHSLAText(ht, st, lt, at){
          var ht = ht || document.getElementById('hsl-h-text').value * 1.0;
          var st = st || document.getElementById('hsl-s-text').value * 1.0;
          var lt = lt || document.getElementById('hsl-l-text').value * 1.0;
          var at = at ||document.getElementById('hsl-a-text').value * 1.0;

          var hslapickerText = "";
          for(var i=0; i <=360; i++){
            hslapickerText+= '<i style="color: hsla(' + i + ', ' + st + '%, ' + lt + '%, ' + at +')"></i>';
          }

        }
function changeHSLText() {
  var ht = document.getElementById('hsl-h-text').value * 1.0;
  var st = document.getElementById('hsl-s-text').value * 1.0;
  var lt = document.getElementById('hsl-l-text').value * 1.0;
  var at = document.getElementById('hsl-a-text').value * 1.0;
  var hex = '';

  at = ((at < 1 && at > 0) ? at : at / 100).toFixed(2);
  var elText = document.getElementById('hsl-example-text');
  if(at == 1){
    var hslaText = 'hsl(' + ht + ', ' + st + '%, ' + lt + '%)'
  } else {
    var hslaText = 'hsla(' + ht + ', ' + st + '%, ' + lt + '%, ' + at + ')'
        }
        elText.style.color = hslaText;
        var rgba = elText.style.color;
        if(at == 1){
          hex = '<br/>' + colorToHex(rgba);
        }
        elText.innerHTML = "<h4>color:</h4>" + "<br/>" + hslaText + " <br/>" + rgba + hex +  " <br/>" + "<p class='lorem'>Lorem ipsum dolor sit amet, <b>consectetur adipisicing</b> elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p><p class='lorem'>Sit maxime minima sed eaque labore. Accusantium fugiat in soluta deleniti voluptatibus. Voluptatibus corrupti reprehenderit in fugit doloremque eos beatae vitae at molestias illum recusandae temporibus aliquid ratione repudiandae sequi.</p>";

        document.getElementById('hsl-h-value-text').textContent = (ht < 100)? ht + ', ': ht + ',';
        document.getElementById('hsl-s-value-text').textContent = (st < 100)? st + '%, ': st + '%,';
        document.getElementById('hsl-l-value-text').textContent = (lt < 100)? lt + '%, ': lt + '%,';
        document.getElementById('hsl-a-value-text').textContent = at + '';
        createHSLAText(ht, st, lt, at);
        }

        // end text-color

        function colorToHex(color) {
          var digits = /(.*?)rgb\((\d+), (\d+), (\d+)\)/.exec(color);

          var red = parseInt(digits[2]);
          var green = parseInt(digits[3]);
          var blue = parseInt(digits[4]);

          var rgb = blue | (green << 8) | (red << 16);
          return digits[1] + '#' + rgb.toString(16);

          // https://raw.github.com/rohn/HSLA-Color-Converter/2958291dd89417040e15d039662d9b83ca8d4228/hsla.html

          var hex = rgb.toString(16);
          while (hex.length < 6) {
            hex = "0" + hex;
          }

          return digits[1] + '#' + hex;
        };

changeHSL();
createHSLA();

changeHSLText();
createHSLAText();

$(function(){

  $('#btnBgYellow').on('click', function() {
    $('#hsl-example').removeAttr("style");
    $('#hsl-example').css("background-color", "#e6970f");
    $('#colorCode').css("color", "#e6970f");
  });
  $('#btnBgOrange').on('click', function() {
    $('#hsl-example').removeAttr("style");
    $('#hsl-example').css("background-color", "#ff4f1a");
    $('#colorCode').css("color", "#ff4f1a");
  });
  $('#btnBgRed').on('click', function() {
    $('#hsl-example').removeAttr("style");
    $('#hsl-example').css("background-color", "#e72357");
    $('#colorCode').css("color", "#e72357");
  });
  $('#btnBgMagenta').on('click', function() {
    $('#hsl-example').removeAttr("style");
    $('#hsl-example').css("background-color", "#e830dc");
    $('#colorCode').css("color", "#e830dc");
  });
  $('#btnBgViolet').on('click', function() {
    $('#hsl-example').removeAttr("style");
    $('#hsl-example').css("background-color", "#8357db");
    $('#colorCode').css("color", "#8357db");
  });
  $('#btnBgBlue').on('click', function() {
    $('#hsl-example').removeAttr("style");
    $('#hsl-example').css("background-color", "#2481f9");
    $('#colorCode').css("color", "#2481f9");
  });
  $('#btnBgCyan').on('click', function() {
    $('#hsl-example').removeAttr("style");
    $('#hsl-example').css("background-color", "#17a4cf");
    $('#colorCode').css("color", "#17a4cf");
  });
  $('#btnBgGreen').on('click', function() {
    $('#hsl-example').removeAttr("style");
    $('#hsl-example').css("background-color", "#19b38a");
    $('#colorCode').css("color", "#19b38a");
  });
  $('#btnBgBase00').on('click', function() {
    $('#hsl-example').removeAttr("style");
    $('#hsl-example').css("background-color", "#101718");
    $('#colorCode').css("color", "#101718");
  });
  $('#btnBgBase01').on('click', function() {
    $('#hsl-example').removeAttr("style");
    $('#hsl-example').css("background-color", "#1f2a2e");
    $('#colorCode').css("color", "#1f2a2e");
  });
  $('#btnBgBase02').on('click', function() {
    $('#hsl-example').removeAttr("style");
    $('#hsl-example').css("background-color", "#364549");
    $('#colorCode').css("color", "#364549");
  });
  $('#btnBgBase03').on('click', function() {
    $('#hsl-example').removeAttr("style");
    $('#hsl-example').css("background-color", "#48575b");
    $('#colorCode').css("color", "#48575b");
  });
  $('#btnBgBase04').on('click', function() {
    $('#hsl-example').removeAttr("style");
    $('#hsl-example').css("background-color", "#607176");
    $('#colorCode').css("color", "#607176");
  });
  $('#btnBgBase05').on('click', function() {
    $('#hsl-example').removeAttr("style");
    $('#hsl-example').css("background-color", "#7b8a8e");
    $('#colorCode').css("color", "#7b8a8e");
  });
  $('#btnBgBase06').on('click', function() {
    $('#hsl-example').removeAttr("style");
    $('#hsl-example').css("background-color", "#b8d7e0");
    $('#colorCode').css("color", "#b8d7e0");
  });
   $('#btnBgBase07').on('click', function() {
    $('#hsl-example').removeAttr("style");
    $('#hsl-example').css("background-color", "#f0fbff");
    $('#colorCode').css("color", "#f0fbff");
  });


});


$(function(){

$('#btnAdjustHue').on('click', function() {
  $('#wrapper').toggleClass('is-hue-adjusted');
  $('#wrapper').removeClass("is-lightened");
  $('#wrapper').removeClass("is-darkened");
  $('#wrapper').removeClass("is-saturated");
  $('#wrapper').removeClass("is-desaturated");
  $('#wrapper').removeClass("is-grayscaled");
  $('#wrapper').removeClass("is-complemented");
  $('#wrapper').removeClass('is-inverted');
  $('#wrapper').removeClass("is-shaded");
  $('#wrapper').removeClass("is-tinted");
  $('#wrapper').removeClass('is-color-adjusted');
  $('#wrapper').removeClass('is-transparentized');
  $('#wrapper').removeClass('is-scaled');
  $('#wrapper').removeClass("is-not-toggled");
  $('#wrapper').addClass("is-toggled");
});

$('#btnLighten').on('click', function() {
  $('#wrapper').toggleClass("is-lightened");
  $('#wrapper').removeClass('is-hue-adjusted');
  $('#wrapper').removeClass("is-darkened");
  $('#wrapper').removeClass("is-saturated");
  $('#wrapper').removeClass("is-desaturated");
  $('#wrapper').removeClass("is-grayscaled");
  $('#wrapper').removeClass("is-complemented");
  $('#wrapper').removeClass('is-inverted');
  $('#wrapper').removeClass("is-shaded");
  $('#wrapper').removeClass("is-tinted");
  $('#wrapper').removeClass('is-color-adjusted');
  $('#wrapper').removeClass('is-transparentized');
  $('#wrapper').removeClass('is-scaled');
  $('#wrapper').removeClass("is-not-toggled");
  $('#wrapper').addClass("is-toggled");
});

$('#btnDarken').on('click', function() {
  $('#wrapper').toggleClass("is-darkened");
  $('#wrapper').removeClass('is-hue-adjusted');
  $('#wrapper').removeClass("is-lightened");
  $('#wrapper').removeClass("is-saturated");
  $('#wrapper').removeClass("is-desaturated");
  $('#wrapper').removeClass("is-grayscaled");
  $('#wrapper').removeClass("is-complemented");
  $('#wrapper').removeClass('is-inverted');
  $('#wrapper').removeClass("is-shaded");
  $('#wrapper').removeClass("is-tinted");
  $('#wrapper').removeClass('is-color-adjusted');
  $('#wrapper').removeClass('is-transparentized');
  $('#wrapper').removeClass('is-scaled');
  $('#wrapper').removeClass("is-not-toggled");
  $('#wrapper').addClass("is-toggled");
});

$('#btnSaturate').on('click', function() {
  $('#wrapper').toggleClass("is-saturated");
  $('#wrapper').removeClass('is-hue-adjusted');
  $('#wrapper').removeClass("is-lightened");
  $('#wrapper').removeClass("is-darkened");
  $('#wrapper').removeClass("is-desaturated");
  $('#wrapper').removeClass("is-grayscaled");
  $('#wrapper').removeClass("is-complemented");
  $('#wrapper').removeClass('is-inverted');
  $('#wrapper').removeClass("is-shaded");
  $('#wrapper').removeClass("is-tinted");
  $('#wrapper').removeClass('is-color-adjusted');
  $('#wrapper').removeClass('is-transparentized');
  $('#wrapper').removeClass('is-scaled');
  $('#wrapper').removeClass("is-not-toggled");
  $('#wrapper').addClass("is-toggled");
});

$('#btnDesaturate').on('click', function() {
  $('#wrapper').toggleClass("is-desaturated");
  $('#wrapper').removeClass('is-hue-adjusted');
  $('#wrapper').removeClass("is-lightened");
  $('#wrapper').removeClass("is-darkened");
  $('#wrapper').removeClass("is-saturated");
  $('#wrapper').removeClass("is-grayscaled");
  $('#wrapper').removeClass("is-complemented");
  $('#wrapper').removeClass('is-inverted');
  $('#wrapper').removeClass("is-shaded");
  $('#wrapper').removeClass("is-tinted");
  $('#wrapper').removeClass('is-color-adjusted');
  $('#wrapper').removeClass('is-transparentized');
  $('#wrapper').removeClass('is-scaled');
  $('#wrapper').removeClass("is-not-toggled");
  $('#wrapper').addClass("is-toggled");
});

$('#btnGrayscale').on('click', function() {
  $('#wrapper').toggleClass('is-grayscaled');
  $('#wrapper').removeClass('is-hue-adjusted');
  $('#wrapper').removeClass("is-lightened");
  $('#wrapper').removeClass("is-darkened");
  $('#wrapper').removeClass("is-saturated");
  $('#wrapper').removeClass("is-desaturated");
  $('#wrapper').removeClass("is-complemented");
  $('#wrapper').removeClass('is-inverted');
  $('#wrapper').removeClass("is-shaded");
  $('#wrapper').removeClass("is-tinted");
  $('#wrapper').removeClass('is-color-adjusted');
  $('#wrapper').removeClass('is-transparentized');
  $('#wrapper').removeClass('is-scaled');
  $('#wrapper').removeClass("is-not-toggled");
  $('#wrapper').addClass("is-toggled");
});

$('#btnComplement').on('click', function() {
  $('#wrapper').toggleClass("is-complemented");
  $('#wrapper').removeClass('is-hue-adjusted');
  $('#wrapper').removeClass("is-lightened");
  $('#wrapper').removeClass("is-darkened");
  $('#wrapper').removeClass("is-saturated");
  $('#wrapper').removeClass("is-desaturated");
  $('#wrapper').removeClass("is-grayscaled");
  $('#wrapper').removeClass('is-inverted');
  $('#wrapper').removeClass("is-shaded");
  $('#wrapper').removeClass("is-tinted");
  $('#wrapper').removeClass('is-color-adjusted');
  $('#wrapper').removeClass('is-transparentized');
  $('#wrapper').removeClass('is-scaled');
  $('#wrapper').removeClass("is-not-toggled");
  $('#wrapper').addClass("is-toggled");
});

$('#btnInvert').on('click', function() {
  $('#wrapper').toggleClass('is-inverted');
  $('#wrapper').removeClass('is-hue-adjusted');
  $('#wrapper').removeClass("is-lightened");
  $('#wrapper').removeClass("is-darkened");
  $('#wrapper').removeClass("is-saturated");
  $('#wrapper').removeClass("is-desaturated");
  $('#wrapper').removeClass("is-grayscaled");
  $('#wrapper').removeClass("is-complemented");
  $('#wrapper').removeClass("is-shaded");
  $('#wrapper').removeClass("is-tinted");
  $('#wrapper').removeClass('is-color-adjusted');
  $('#wrapper').removeClass('is-transparentized');
  $('#wrapper').removeClass('is-scaled');
  $('#wrapper').removeClass("is-not-toggled");
  $('#wrapper').addClass("is-toggled");
});

$('#btnShade').on('click', function() {
  $('#wrapper').toggleClass("is-shaded");
  $('#wrapper').removeClass('is-hue-adjusted');
  $('#wrapper').removeClass("is-lightened");
  $('#wrapper').removeClass("is-darkened");
  $('#wrapper').removeClass("is-saturated");
  $('#wrapper').removeClass("is-desaturated");
  $('#wrapper').removeClass("is-grayscaled");
  $('#wrapper').removeClass("is-complemented");
  $('#wrapper').removeClass('is-inverted');
  $('#wrapper').removeClass("is-tinted");
  $('#wrapper').removeClass('is-color-adjusted');
  $('#wrapper').removeClass('is-transparentized');
  $('#wrapper').removeClass('is-scaled');
  $('#wrapper').removeClass("is-not-toggled");
  $('#wrapper').addClass("is-toggled");
});

$('#btnTint').on('click', function() {
  $('#wrapper').toggleClass("is-tinted");
  $('#wrapper').removeClass('is-color-adjusted');
  $('#wrapper').removeClass('is-transparentized');
  $('#wrapper').removeClass('is-scaled');
  $('#wrapper').removeClass('is-hue-adjusted');
  $('#wrapper').removeClass("is-lightened");
  $('#wrapper').removeClass("is-darkened");
  $('#wrapper').removeClass("is-saturated");
  $('#wrapper').removeClass("is-desaturated");
  $('#wrapper').removeClass("is-grayscaled");
  $('#wrapper').removeClass("is-complemented");
  $('#wrapper').removeClass('is-inverted');
  $('#wrapper').removeClass("is-shaded");
  $('#wrapper').removeClass("is-not-toggled");
  $('#wrapper').addClass("is-toggled");
});
$('#btnTransparentize').on('click', function() {
  $('#wrapper').toggleClass("is-transparentized");
  $('#wrapper').removeClass("is-tinted");
  $('#wrapper').removeClass('is-color-adjusted');
  $('#wrapper').removeClass('is-scaled');
  $('#wrapper').removeClass('is-hue-adjusted');
  $('#wrapper').removeClass("is-lightened");
  $('#wrapper').removeClass("is-darkened");
  $('#wrapper').removeClass("is-saturated");
  $('#wrapper').removeClass("is-desaturated");
  $('#wrapper').removeClass("is-grayscaled");
  $('#wrapper').removeClass("is-complemented");
  $('#wrapper').removeClass('is-inverted');
  $('#wrapper').removeClass("is-shaded");
  $('#wrapper').removeClass("is-not-toggled");
  $('#wrapper').addClass("is-toggled");
});

$('#btnScale').on('click', function() {
  $('#wrapper').toggleClass("is-scaled");
  $('#wrapper').removeClass("is-tinted");
  $('#wrapper').removeClass('is-color-adjusted');
  $('#wrapper').removeClass('is-transparentized');
  $('#wrapper').removeClass('is-hue-adjusted');
  $('#wrapper').removeClass("is-lightened");
  $('#wrapper').removeClass("is-darkened");
  $('#wrapper').removeClass("is-saturated");
  $('#wrapper').removeClass("is-desaturated");
  $('#wrapper').removeClass("is-grayscaled");
  $('#wrapper').removeClass("is-complemented");
  $('#wrapper').removeClass('is-inverted');
  $('#wrapper').removeClass("is-shaded");
  $('#wrapper').removeClass("is-not-toggled");
  $('#wrapper').addClass("is-toggled");
});
$('#btnAdjustColor').on('click', function() {
  $('#wrapper').toggleClass("is-color-adjusted");
  $('#wrapper').removeClass("is-tinted");
  $('#wrapper').removeClass('is-transparentized');
  $('#wrapper').removeClass('is-scaled');
  $('#wrapper').removeClass('is-hue-adjusted');
  $('#wrapper').removeClass("is-lightened");
  $('#wrapper').removeClass("is-darkened");
  $('#wrapper').removeClass("is-saturated");
  $('#wrapper').removeClass("is-desaturated");
  $('#wrapper').removeClass("is-grayscaled");
  $('#wrapper').removeClass("is-complemented");
  $('#wrapper').removeClass('is-inverted');
  $('#wrapper').removeClass("is-shaded");
  $('#wrapper').removeClass("is-not-toggled");
  $('#wrapper').addClass("is-toggled");
});

$('#btnReset').on('click', function() {
  $('#wrapper').removeClass('is-hue-adjusted');
  $('#wrapper').removeClass("is-lightened");
  $('#wrapper').removeClass("is-darkened");
  $('#wrapper').removeClass("is-saturated");
  $('#wrapper').removeClass("is-desaturated");
  $('#wrapper').removeClass("is-grayscaled");
  $('#wrapper').removeClass("is-complemented");
  $('#wrapper').removeClass('is-inverted');
  $('#wrapper').removeClass("is-shaded");
  $('#wrapper').removeClass("is-tinted");
  $('#wrapper').removeClass('is-color-adjusted');
  $('#wrapper').removeClass('is-transparentized');
  $('#wrapper').removeClass('is-scaled');
  $('#wrapper').removeClass("is-toggled");
  $('#wrapper').addClass("is-not-toggled");
});

});

/* fingerprint: 390630ad1dbefd0189b6c52dad229500 */
//     Underscore.js 1.4.2
//     http://underscorejs.org
//     (c) 2009-2012 Jeremy Ashkenas, DocumentCloud Inc.
//     Underscore may be freely distributed under the MIT license.
(function () {
    var e = this,
        t = e._,
        n = {}, r = Array.prototype,
        i = Object.prototype,
        s = Function.prototype,
        o = r.push,
        u = r.slice,
        a = r.concat,
        f = r.unshift,
        l = i.toString,
        c = i.hasOwnProperty,
        h = r.forEach,
        p = r.map,
        d = r.reduce,
        v = r.reduceRight,
        m = r.filter,
        g = r.every,
        y = r.some,
        b = r.indexOf,
        w = r.lastIndexOf,
        E = Array.isArray,
        S = Object.keys,
        x = s.bind,
        T = function (e) {
            if (e instanceof T) return e;
            if (!(this instanceof T)) return new T(e);
            this._wrapped = e
        };
    typeof exports != "undefined" ? (typeof module != "undefined" && module.exports && (exports = module.exports = T), exports._ = T) : e._ = T, T.VERSION = "1.4.2";
    var N = T.each = T.forEach = function (e, t, r) {
        if (e == null) return;
        if (h && e.forEach === h) e.forEach(t, r);
        else if (e.length === +e.length) {
            for (var i = 0, s = e.length; i < s; i++)
                if (t.call(r, e[i], i, e) === n) return
        } else
            for (var o in e)
                if (T.has(e, o) && t.call(r, e[o], o, e) === n) return
    };
    T.map = T.collect = function (e, t, n) {
        var r = [];
        return e == null ? r : p && e.map === p ? e.map(t, n) : (N(e, function (e, i, s) {
            r[r.length] = t.call(n, e, i, s)
        }), r)
    }, T.reduce = T.foldl = T.inject = function (e, t, n, r) {
        var i = arguments.length > 2;
        e == null && (e = []);
        if (d && e.reduce === d) return r && (t = T.bind(t, r)), i ? e.reduce(t, n) : e.reduce(t);
        N(e, function (e, s, o) {
            i ? n = t.call(r, n, e, s, o) : (n = e, i = !0)
        });
        if (!i) throw new TypeError("Reduce of empty array with no initial value");
        return n
    }, T.reduceRight = T.foldr = function (e, t, n, r) {
        var i = arguments.length > 2;
        e == null && (e = []);
        if (v && e.reduceRight === v) return r && (t = T.bind(t, r)), arguments.length > 2 ? e.reduceRight(t, n) : e.reduceRight(t);
        var s = e.length;
        if (s !== +s) {
            var o = T.keys(e);
            s = o.length
        }
        N(e, function (u, a, f) {
            a = o ? o[--s] : --s, i ? n = t.call(r, n, e[a], a, f) : (n = e[a], i = !0)
        });
        if (!i) throw new TypeError("Reduce of empty array with no initial value");
        return n
    }, T.find = T.detect = function (e, t, n) {
        var r;
        return C(e, function (e, i, s) {
            if (t.call(n, e, i, s)) return r = e, !0
        }), r
    }, T.filter = T.select = function (e, t, n) {
        var r = [];
        return e == null ? r : m && e.filter === m ? e.filter(t, n) : (N(e, function (e, i, s) {
            t.call(n, e, i, s) && (r[r.length] = e)
        }), r)
    }, T.reject = function (e, t, n) {
        var r = [];
        return e == null ? r : (N(e, function (e, i, s) {
            t.call(n, e, i, s) || (r[r.length] = e)
        }), r)
    }, T.every = T.all = function (e, t, r) {
        t || (t = T.identity);
        var i = !0;
        return e == null ? i : g && e.every === g ? e.every(t, r) : (N(e, function (e, s, o) {
            if (!(i = i && t.call(r, e, s, o))) return n
        }), !! i)
    };
    var C = T.some = T.any = function (e, t, r) {
        t || (t = T.identity);
        var i = !1;
        return e == null ? i : y && e.some === y ? e.some(t, r) : (N(e, function (e, s, o) {
            if (i || (i = t.call(r, e, s, o))) return n
        }), !! i)
    };
    T.contains = T.include = function (e, t) {
        var n = !1;
        return e == null ? n : b && e.indexOf === b ? e.indexOf(t) != -1 : (n = C(e, function (e) {
            return e === t
        }), n)
    }, T.invoke = function (e, t) {
        var n = u.call(arguments, 2);
        return T.map(e, function (e) {
            return (T.isFunction(t) ? t : e[t]).apply(e, n)
        })
    }, T.pluck = function (e, t) {
        return T.map(e, function (e) {
            return e[t]
        })
    }, T.where = function (e, t) {
        return T.isEmpty(t) ? [] : T.filter(e, function (e) {
            for (var n in t)
                if (t[n] !== e[n]) return !1;
            return !0
        })
    }, T.max = function (e, t, n) {
        if (!t && T.isArray(e) && e[0] === +e[0] && e.length < 65535) return Math.max.apply(Math, e);
        if (!t && T.isEmpty(e)) return -Infinity;
        var r = {
            computed: -Infinity
        };
        return N(e, function (e, i, s) {
            var o = t ? t.call(n, e, i, s) : e;
            o >= r.computed && (r = {
                value: e,
                computed: o
            })
        }), r.value
    }, T.min = function (e, t, n) {
        if (!t && T.isArray(e) && e[0] === +e[0] && e.length < 65535) return Math.min.apply(Math, e);
        if (!t && T.isEmpty(e)) return Infinity;
        var r = {
            computed: Infinity
        };
        return N(e, function (e, i, s) {
            var o = t ? t.call(n, e, i, s) : e;
            o < r.computed && (r = {
                value: e,
                computed: o
            })
        }), r.value
    }, T.shuffle = function (e) {
        var t, n = 0,
            r = [];
        return N(e, function (e) {
            t = T.random(n++), r[n - 1] = r[t], r[t] = e
        }), r
    };
    var k = function (e) {
        return T.isFunction(e) ? e : function (t) {
            return t[e]
        }
    };
    T.sortBy = function (e, t, n) {
        var r = k(t);
        return T.pluck(T.map(e, function (e, t, i) {
            return {
                value: e,
                index: t,
                criteria: r.call(n, e, t, i)
            }
        }).sort(function (e, t) {
            var n = e.criteria,
                r = t.criteria;
            if (n !== r) {
                if (n > r || n === void 0) return 1;
                if (n < r || r === void 0) return -1
            }
            return e.index < t.index ? -1 : 1
        }), "value")
    };
    var L = function (e, t, n, r) {
        var i = {}, s = k(t);
        return N(e, function (t, o) {
            var u = s.call(n, t, o, e);
            r(i, u, t)
        }), i
    };
    T.groupBy = function (e, t, n) {
        return L(e, t, n, function (e, t, n) {
            (T.has(e, t) ? e[t] : e[t] = []).push(n)
        })
    }, T.countBy = function (e, t, n) {
        return L(e, t, n, function (e, t, n) {
            T.has(e, t) || (e[t] = 0), e[t]++
        })
    }, T.sortedIndex = function (e, t, n, r) {
        n = n == null ? T.identity : k(n);
        var i = n.call(r, t),
            s = 0,
            o = e.length;
        while (s < o) {
            var u = s + o >>> 1;
            n.call(r, e[u]) < i ? s = u + 1 : o = u
        }
        return s
    }, T.toArray = function (e) {
        return e ? e.length === +e.length ? u.call(e) : T.values(e) : []
    }, T.size = function (e) {
        return e.length === +e.length ? e.length : T.keys(e).length
    }, T.first = T.head = T.take = function (e, t, n) {
        return t != null && !n ? u.call(e, 0, t) : e[0]
    }, T.initial = function (e, t, n) {
        return u.call(e, 0, e.length - (t == null || n ? 1 : t))
    }, T.last = function (e, t, n) {
        return t != null && !n ? u.call(e, Math.max(e.length - t, 0)) : e[e.length - 1]
    }, T.rest = T.tail = T.drop = function (e, t, n) {
        return u.call(e, t == null || n ? 1 : t)
    }, T.compact = function (e) {
        return T.filter(e, function (e) {
            return !!e
        })
    };
    var A = function (e, t, n) {
        return N(e, function (e) {
            T.isArray(e) ? t ? o.apply(n, e) : A(e, t, n) : n.push(e)
        }), n
    };
    T.flatten = function (e, t) {
        return A(e, t, [])
    }, T.without = function (e) {
        return T.difference(e, u.call(arguments, 1))
    }, T.uniq = T.unique = function (e, t, n, r) {
        var i = n ? T.map(e, n, r) : e,
            s = [],
            o = [];
        return N(i, function (n, r) {
            if (t ? !r || o[o.length - 1] !== n : !T.contains(o, n)) o.push(n), s.push(e[r])
        }), s
    }, T.union = function () {
        return T.uniq(a.apply(r, arguments))
    }, T.intersection = function (e) {
        var t = u.call(arguments, 1);
        return T.filter(T.uniq(e), function (e) {
            return T.every(t, function (t) {
                return T.indexOf(t, e) >= 0
            })
        })
    }, T.difference = function (e) {
        var t = a.apply(r, u.call(arguments, 1));
        return T.filter(e, function (e) {
            return !T.contains(t, e)
        })
    }, T.zip = function () {
        var e = u.call(arguments),
            t = T.max(T.pluck(e, "length")),
            n = new Array(t);
        for (var r = 0; r < t; r++) n[r] = T.pluck(e, "" + r);
        return n
    }, T.object = function (e, t) {
        var n = {};
        for (var r = 0, i = e.length; r < i; r++) t ? n[e[r]] = t[r] : n[e[r][0]] = e[r][1];
        return n
    }, T.indexOf = function (e, t, n) {
        if (e == null) return -1;
        var r = 0,
            i = e.length;
        if (n) {
            if (typeof n != "number") return r = T.sortedIndex(e, t), e[r] === t ? r : -1;
            r = n < 0 ? Math.max(0, i + n) : n
        }
        if (b && e.indexOf === b) return e.indexOf(t, n);
        for (; r < i; r++)
            if (e[r] === t) return r;
        return -1
    }, T.lastIndexOf = function (e, t, n) {
        if (e == null) return -1;
        var r = n != null;
        if (w && e.lastIndexOf === w) return r ? e.lastIndexOf(t, n) : e.lastIndexOf(t);
        var i = r ? n : e.length;
        while (i--)
            if (e[i] === t) return i;
        return -1
    }, T.range = function (e, t, n) {
        arguments.length <= 1 && (t = e || 0, e = 0), n = arguments[2] || 1;
        var r = Math.max(Math.ceil((t - e) / n), 0),
            i = 0,
            s = new Array(r);
        while (i < r) s[i++] = e, e += n;
        return s
    };
    var O = function () {};
    T.bind = function (t, n) {
        var r, i;
        if (t.bind === x && x) return x.apply(t, u.call(arguments, 1));
        if (!T.isFunction(t)) throw new TypeError;
        return i = u.call(arguments, 2), r = function () {
            if (this instanceof r) {
                O.prototype = t.prototype;
                var e = new O,
                    s = t.apply(e, i.concat(u.call(arguments)));
                return Object(s) === s ? s : e
            }
            return t.apply(n, i.concat(u.call(arguments)))
        }
    }, T.bindAll = function (e) {
        var t = u.call(arguments, 1);
        return t.length == 0 && (t = T.functions(e)), N(t, function (t) {
            e[t] = T.bind(e[t], e)
        }), e
    }, T.memoize = function (e, t) {
        var n = {};
        return t || (t = T.identity),
        function () {
            var r = t.apply(this, arguments);
            return T.has(n, r) ? n[r] : n[r] = e.apply(this, arguments)
        }
    }, T.delay = function (e, t) {
        var n = u.call(arguments, 2);
        return setTimeout(function () {
            return e.apply(null, n)
        }, t)
    }, T.defer = function (e) {
        return T.delay.apply(T, [e, 1].concat(u.call(arguments, 1)))
    }, T.throttle = function (e, t) {
        var n, r, i, s, o, u, a = T.debounce(function () {
                o = s = !1
            }, t);
        return function () {
            n = this, r = arguments;
            var f = function () {
                i = null, o && (u = e.apply(n, r)), a()
            };
            return i || (i = setTimeout(f, t)), s ? o = !0 : (s = !0, u = e.apply(n, r)), a(), u
        }
    }, T.debounce = function (e, t, n) {
        var r, i;
        return function () {
            var s = this,
                o = arguments,
                u = function () {
                    r = null, n || (i = e.apply(s, o))
                }, a = n && !r;
            return clearTimeout(r), r = setTimeout(u, t), a && (i = e.apply(s, o)), i
        }
    }, T.once = function (e) {
        var t = !1,
            n;
        return function () {
            return t ? n : (t = !0, n = e.apply(this, arguments), e = null, n)
        }
    }, T.wrap = function (e, t) {
        return function () {
            var n = [e];
            return o.apply(n, arguments), t.apply(this, n)
        }
    }, T.compose = function () {
        var e = arguments;
        return function () {
            var t = arguments;
            for (var n = e.length - 1; n >= 0; n--) t = [e[n].apply(this, t)];
            return t[0]
        }
    }, T.after = function (e, t) {
        return e <= 0 ? t() : function () {
            if (--e < 1) return t.apply(this, arguments)
        }
    }, T.keys = S || function (e) {
        if (e !== Object(e)) throw new TypeError("Invalid object");
        var t = [];
        for (var n in e) T.has(e, n) && (t[t.length] = n);
        return t
    }, T.values = function (e) {
        var t = [];
        for (var n in e) T.has(e, n) && t.push(e[n]);
        return t
    }, T.pairs = function (e) {
        var t = [];
        for (var n in e) T.has(e, n) && t.push([n, e[n]]);
        return t
    }, T.invert = function (e) {
        var t = {};
        for (var n in e) T.has(e, n) && (t[e[n]] = n);
        return t
    }, T.functions = T.methods = function (e) {
        var t = [];
        for (var n in e) T.isFunction(e[n]) && t.push(n);
        return t.sort()
    }, T.extend = function (e) {
        return N(u.call(arguments, 1), function (t) {
            for (var n in t) e[n] = t[n]
        }), e
    }, T.pick = function (e) {
        var t = {}, n = a.apply(r, u.call(arguments, 1));
        return N(n, function (n) {
            n in e && (t[n] = e[n])
        }), t
    }, T.omit = function (e) {
        var t = {}, n = a.apply(r, u.call(arguments, 1));
        for (var i in e) T.contains(n, i) || (t[i] = e[i]);
        return t
    }, T.defaults = function (e) {
        return N(u.call(arguments, 1), function (t) {
            for (var n in t) e[n] == null && (e[n] = t[n])
        }), e
    }, T.clone = function (e) {
        return T.isObject(e) ? T.isArray(e) ? e.slice() : T.extend({}, e) : e
    }, T.tap = function (e, t) {
        return t(e), e
    };
    var M = function (e, t, n, r) {
        if (e === t) return e !== 0 || 1 / e == 1 / t;
        if (e == null || t == null) return e === t;
        e instanceof T && (e = e._wrapped), t instanceof T && (t = t._wrapped);
        var i = l.call(e);
        if (i != l.call(t)) return !1;
        switch (i) {
        case "[object String]":
            return e == String(t);
        case "[object Number]":
            return e != +e ? t != +t : e == 0 ? 1 / e == 1 / t : e == +t;
        case "[object Date]":
        case "[object Boolean]":
            return +e == +t;
        case "[object RegExp]":
            return e.source == t.source && e.global == t.global && e.multiline == t.multiline && e.ignoreCase == t.ignoreCase
        }
        if (typeof e != "object" || typeof t != "object") return !1;
        var s = n.length;
        while (s--)
            if (n[s] == e) return r[s] == t;
        n.push(e), r.push(t);
        var o = 0,
            u = !0;
        if (i == "[object Array]") {
            o = e.length, u = o == t.length;
            if (u)
                while (o--)
                    if (!(u = M(e[o], t[o], n, r))) break
        } else {
            var a = e.constructor,
                f = t.constructor;
            if (a !== f && !(T.isFunction(a) && a instanceof a && T.isFunction(f) && f instanceof f)) return !1;
            for (var c in e)
                if (T.has(e, c)) {
                    o++;
                    if (!(u = T.has(t, c) && M(e[c], t[c], n, r))) break
                }
            if (u) {
                for (c in t)
                    if (T.has(t, c) && !(o--)) break;
                u = !o
            }
        }
        return n.pop(), r.pop(), u
    };
    T.isEqual = function (e, t) {
        return M(e, t, [], [])
    }, T.isEmpty = function (e) {
        if (e == null) return !0;
        if (T.isArray(e) || T.isString(e)) return e.length === 0;
        for (var t in e)
            if (T.has(e, t)) return !1;
        return !0
    }, T.isElement = function (e) {
        return !!e && e.nodeType === 1
    }, T.isArray = E || function (e) {
        return l.call(e) == "[object Array]"
    }, T.isObject = function (e) {
        return e === Object(e)
    }, N(["Arguments", "Function", "String", "Number", "Date", "RegExp"], function (e) {
        T["is" + e] = function (t) {
            return l.call(t) == "[object " + e + "]"
        }
    }), T.isArguments(arguments) || (T.isArguments = function (e) {
        return !!e && !! T.has(e, "callee")
    }), typeof / . / != "function" && (T.isFunction = function (e) {
        return typeof e == "function"
    }), T.isFinite = function (e) {
        return T.isNumber(e) && isFinite(e)
    }, T.isNaN = function (e) {
        return T.isNumber(e) && e != +e
    }, T.isBoolean = function (e) {
        return e === !0 || e === !1 || l.call(e) == "[object Boolean]"
    }, T.isNull = function (e) {
        return e === null
    }, T.isUndefined = function (e) {
        return e === void 0
    }, T.has = function (e, t) {
        return c.call(e, t)
    }, T.noConflict = function () {
        return e._ = t, this
    }, T.identity = function (e) {
        return e
    }, T.times = function (e, t, n) {
        for (var r = 0; r < e; r++) t.call(n, r)
    }, T.random = function (e, t) {
        return t == null && (t = e, e = 0), e + (0 | Math.random() * (t - e + 1))
    };
    var _ = {
        escape: {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#x27;",
            "/": "&#x2F;"
        }
    };
    _.unescape = T.invert(_.escape);
    var D = {
        escape: new RegExp("[" + T.keys(_.escape).join("") + "]", "g"),
        unescape: new RegExp("(" + T.keys(_.unescape).join("|") + ")", "g")
    };
    T.each(["escape", "unescape"], function (e) {
        T[e] = function (t) {
            return t == null ? "" : ("" + t).replace(D[e], function (t) {
                return _[e][t]
            })
        }
    }), T.result = function (e, t) {
        if (e == null) return null;
        var n = e[t];
        return T.isFunction(n) ? n.call(e) : n
    }, T.mixin = function (e) {
        N(T.functions(e), function (t) {
            var n = T[t] = e[t];
            T.prototype[t] = function () {
                var e = [this._wrapped];
                return o.apply(e, arguments), F.call(this, n.apply(T, e))
            }
        })
    };
    var P = 0;
    T.uniqueId = function (e) {
        var t = P++;
        return e ? e + t : t
    }, T.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
    };
    var H = /(.)^/,
        B = {
            "'": "'",
            "\\": "\\",
            "\r": "r",
            "\n": "n",
            "	": "t",
            "\u2028": "u2028",
            "\u2029": "u2029"
        }, j = /\\|'|\r|\n|\t|\u2028|\u2029/g;
    T.template = function (e, t, n) {
        n = T.defaults({}, n, T.templateSettings);
        var r = new RegExp([(n.escape || H).source, (n.interpolate || H).source, (n.evaluate || H).source].join("|") + "|$", "g"),
            i = 0,
            s = "__p+='";
        e.replace(r, function (t, n, r, o, u) {
            s += e.slice(i, u).replace(j, function (e) {
                return "\\" + B[e]
            }), s += n ? "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'" : r ? "'+\n((__t=(" + r + "))==null?'':__t)+\n'" : o ? "';\n" + o + "\n__p+='" : "", i = u + t.length
        }), s += "';\n", n.variable || (s = "with(obj||{}){\n" + s + "}\n"), s = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + s + "return __p;\n";
        try {
            var o = new Function(n.variable || "obj", "_", s)
        } catch (u) {
            throw u.source = s, u
        }
        if (t) return o(t, T);
        var a = function (e) {
            return o.call(this, e, T)
        };
        return a.source = "function(" + (n.variable || "obj") + "){\n" + s + "}", a
    }, T.chain = function (e) {
        return T(e).chain()
    };
    var F = function (e) {
        return this._chain ? T(e).chain() : e
    };
    T.mixin(T), N(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function (e) {
        var t = r[e];
        T.prototype[e] = function () {
            var n = this._wrapped;
            return t.apply(n, arguments), (e == "shift" || e == "splice") && n.length === 0 && delete n[0], F.call(this, n)
        }
    }), N(["concat", "join", "slice"], function (e) {
        var t = r[e];
        T.prototype[e] = function () {
            return F.call(this, t.apply(this._wrapped, arguments))
        }
    }), T.extend(T.prototype, {
        chain: function () {
            return this._chain = !0, this
        },
        value: function () {
            return this._wrapped
        }
    })
}).call(this),
function () {
    var e = this,
        t = e.Backbone,
        n = [],
        r = n.push,
        i = n.slice,
        s = n.splice,
        o;
    typeof exports != "undefined" ? o = exports : o = e.Backbone = {}, o.VERSION = "0.9.10";
    var u = e._;
    !u && typeof require != "undefined" && (u = require("underscore")), o.$ = e.jQuery || e.Zepto || e.ender, o.noConflict = function () {
        return e.Backbone = t, this
    }, o.emulateHTTP = !1, o.emulateJSON = !1;
    var a = /\s+/,
        f = function (e, t, n, r) {
            if (!n) return !0;
            if (typeof n == "object")
                for (var i in n) e[t].apply(e, [i, n[i]].concat(r));
            else {
                if (!a.test(n)) return !0;
                var s = n.split(a);
                for (var o = 0, u = s.length; o < u; o++) e[t].apply(e, [s[o]].concat(r))
            }
        }, l = function (e, t) {
            var n, r = -1,
                i = e.length;
            switch (t.length) {
            case 0:
                while (++r < i)(n = e[r]).callback.call(n.ctx);
                return;
            case 1:
                while (++r < i)(n = e[r]).callback.call(n.ctx, t[0]);
                return;
            case 2:
                while (++r < i)(n = e[r]).callback.call(n.ctx, t[0], t[1]);
                return;
            case 3:
                while (++r < i)(n = e[r]).callback.call(n.ctx, t[0], t[1], t[2]);
                return;
            default:
                while (++r < i)(n = e[r]).callback.apply(n.ctx, t)
            }
        }, c = o.Events = {
            on: function (e, t, n) {
                if (!f(this, "on", e, [t, n]) || !t) return this;
                this._events || (this._events = {});
                var r = this._events[e] || (this._events[e] = []);
                return r.push({
                    callback: t,
                    context: n,
                    ctx: n || this
                }), this
            },
            once: function (e, t, n) {
                if (!f(this, "once", e, [t, n]) || !t) return this;
                var r = this,
                    i = u.once(function () {
                        r.off(e, i), t.apply(this, arguments)
                    });
                return i._callback = t, this.on(e, i, n), this
            },
            off: function (e, t, n) {
                var r, i, s, o, a, l, c, h;
                if (!this._events || !f(this, "off", e, [t, n])) return this;
                if (!e && !t && !n) return this._events = {}, this;
                o = e ? [e] : u.keys(this._events);
                for (a = 0, l = o.length; a < l; a++) {
                    e = o[a];
                    if (r = this._events[e]) {
                        s = [];
                        if (t || n)
                            for (c = 0, h = r.length; c < h; c++) i = r[c], (t && t !== i.callback && t !== i.callback._callback || n && n !== i.context) && s.push(i);
                        this._events[e] = s
                    }
                }
                return this
            },
            trigger: function (e) {
                if (!this._events) return this;
                var t = i.call(arguments, 1);
                if (!f(this, "trigger", e, t)) return this;
                var n = this._events[e],
                    r = this._events.all;
                return n && l(n, t), r && l(r, arguments), this
            },
            listenTo: function (e, t, n) {
                var r = this._listeners || (this._listeners = {}),
                    i = e._listenerId || (e._listenerId = u.uniqueId("l"));
                return r[i] = e, e.on(t, typeof t == "object" ? this : n, this), this
            },
            stopListening: function (e, t, n) {
                var r = this._listeners;
                if (!r) return;
                if (e) e.off(t, typeof t == "object" ? this : n, this), !t && !n && delete r[e._listenerId];
                else {
                    typeof t == "object" && (n = this);
                    for (var i in r) r[i].off(t, n, this);
                    this._listeners = {}
                }
                return this
            }
        };
    c.bind = c.on, c.unbind = c.off, u.extend(o, c);
    var h = o.Model = function (e, t) {
        var n, r = e || {};
        this.cid = u.uniqueId("c"), this.attributes = {}, t && t.collection && (this.collection = t.collection), t && t.parse && (r = this.parse(r, t) || {});
        if (n = u.result(this, "defaults")) r = u.defaults({}, r, n);
        this.set(r, t), this.changed = {}, this.initialize.apply(this, arguments)
    };
    u.extend(h.prototype, c, {
        changed: null,
        idAttribute: "id",
        initialize: function () {},
        toJSON: function (e) {
            return u.clone(this.attributes)
        },
        sync: function () {
            return o.sync.apply(this, arguments)
        },
        get: function (e) {
            return this.attributes[e]
        },
        escape: function (e) {
            return u.escape(this.get(e))
        },
        has: function (e) {
            return this.get(e) != null
        },
        set: function (e, t, n) {
            var r, i, s, o, a, f, l, c;
            if (e == null) return this;
            typeof e == "object" ? (i = e, n = t) : (i = {})[e] = t, n || (n = {});
            if (!this._validate(i, n)) return !1;
            s = n.unset, a = n.silent, o = [], f = this._changing, this._changing = !0, f || (this._previousAttributes = u.clone(this.attributes), this.changed = {}), c = this.attributes, l = this._previousAttributes, this.idAttribute in i && (this.id = i[this.idAttribute]);
            for (r in i) t = i[r], u.isEqual(c[r], t) || o.push(r), u.isEqual(l[r], t) ? delete this.changed[r] : this.changed[r] = t, s ? delete c[r] : c[r] = t;
            if (!a) {
                o.length && (this._pending = !0);
                for (var h = 0, p = o.length; h < p; h++) this.trigger("change:" + o[h], this, c[o[h]], n)
            }
            if (f) return this;
            if (!a)
                while (this._pending) this._pending = !1, this.trigger("change", this, n);
            return this._pending = !1, this._changing = !1, this
        },
        unset: function (e, t) {
            return this.set(e, void 0, u.extend({}, t, {
                unset: !0
            }))
        },
        clear: function (e) {
            var t = {};
            for (var n in this.attributes) t[n] = void 0;
            return this.set(t, u.extend({}, e, {
                unset: !0
            }))
        },
        hasChanged: function (e) {
            return e == null ? !u.isEmpty(this.changed) : u.has(this.changed, e)
        },
        changedAttributes: function (e) {
            if (!e) return this.hasChanged() ? u.clone(this.changed) : !1;
            var t, n = !1,
                r = this._changing ? this._previousAttributes : this.attributes;
            for (var i in e) {
                if (u.isEqual(r[i], t = e[i])) continue;
                (n || (n = {}))[i] = t
            }
            return n
        },
        previous: function (e) {
            return e == null || !this._previousAttributes ? null : this._previousAttributes[e]
        },
        previousAttributes: function () {
            return u.clone(this._previousAttributes)
        },
        fetch: function (e) {
            e = e ? u.clone(e) : {}, e.parse === void 0 && (e.parse = !0);
            var t = e.success;
            return e.success = function (e, n, r) {
                if (!e.set(e.parse(n, r), r)) return !1;
                t && t(e, n, r)
            }, this.sync("read", this, e)
        },
        save: function (e, t, n) {
            var r, i, s, o, a = this.attributes;
            return e == null || typeof e == "object" ? (r = e, n = t) : (r = {})[e] = t, r && (!n || !n.wait) && !this.set(r, n) ? !1 : (n = u.extend({
                validate: !0
            }, n), this._validate(r, n) ? (r && n.wait && (this.attributes = u.extend({}, a, r)), n.parse === void 0 && (n.parse = !0), i = n.success, n.success = function (e, t, n) {
                e.attributes = a;
                var s = e.parse(t, n);
                n.wait && (s = u.extend(r || {}, s));
                if (u.isObject(s) && !e.set(s, n)) return !1;
                i && i(e, t, n)
            }, s = this.isNew() ? "create" : n.patch ? "patch" : "update", s === "patch" && (n.attrs = r), o = this.sync(s, this, n), r && n.wait && (this.attributes = a), o) : !1)
        },
        destroy: function (e) {
            e = e ? u.clone(e) : {};
            var t = this,
                n = e.success,
                r = function () {
                    t.trigger("destroy", t, t.collection, e)
                };
            e.success = function (e, t, i) {
                (i.wait || e.isNew()) && r(), n && n(e, t, i)
            };
            if (this.isNew()) return e.success(this, null, e), !1;
            var i = this.sync("delete", this, e);
            return e.wait || r(), i
        },
        url: function () {
            var e = u.result(this, "urlRoot") || u.result(this.collection, "url") || M();
            return this.isNew() ? e : e + (e.charAt(e.length - 1) === "/" ? "" : "/") + encodeURIComponent(this.id)
        },
        parse: function (e, t) {
            return e
        },
        clone: function () {
            return new this.constructor(this.attributes)
        },
        isNew: function () {
            return this.id == null
        },
        isValid: function (e) {
            return !this.validate || !this.validate(this.attributes, e)
        },
        _validate: function (e, t) {
            if (!t.validate || !this.validate) return !0;
            e = u.extend({}, this.attributes, e);
            var n = this.validationError = this.validate(e, t) || null;
            return n ? (this.trigger("invalid", this, n, t || {}), !1) : !0
        }
    });
    var p = o.Collection = function (e, t) {
        t || (t = {}), t.model && (this.model = t.model), t.comparator !== void 0 && (this.comparator = t.comparator), this.models = [], this._reset(), this.initialize.apply(this, arguments), e && this.reset(e, u.extend({
            silent: !0
        }, t))
    };
    u.extend(p.prototype, c, {
        model: h,
        initialize: function () {},
        toJSON: function (e) {
            return this.map(function (t) {
                return t.toJSON(e)
            })
        },
        sync: function () {
            return o.sync.apply(this, arguments)
        },
        add: function (e, t) {
            e = u.isArray(e) ? e.slice() : [e], t || (t = {});
            var n, i, o, a, f, l, c, h, p, d;
            c = [], h = t.at, p = this.comparator && h == null && t.sort != 0, d = u.isString(this.comparator) ? this.comparator : null;
            for (n = 0, i = e.length; n < i; n++) {
                if (!(o = this._prepareModel(a = e[n], t))) {
                    this.trigger("invalid", this, a, t);
                    continue
                }
                if (f = this.get(o)) {
                    t.merge && (f.set(a === o ? o.attributes : a, t), p && !l && f.hasChanged(d) && (l = !0));
                    continue
                }
                c.push(o), o.on("all", this._onModelEvent, this), this._byId[o.cid] = o, o.id != null && (this._byId[o.id] = o)
            }
            c.length && (p && (l = !0), this.length += c.length, h != null ? s.apply(this.models, [h, 0].concat(c)) : r.apply(this.models, c)), l && this.sort({
                silent: !0
            });
            if (t.silent) return this;
            for (n = 0, i = c.length; n < i; n++)(o = c[n]).trigger("add", o, this, t);
            return l && this.trigger("sort", this, t), this
        },
        remove: function (e, t) {
            e = u.isArray(e) ? e.slice() : [e], t || (t = {});
            var n, r, i, s;
            for (n = 0, r = e.length; n < r; n++) {
                s = this.get(e[n]);
                if (!s) continue;
                delete this._byId[s.id], delete this._byId[s.cid], i = this.indexOf(s), this.models.splice(i, 1), this.length--, t.silent || (t.index = i, s.trigger("remove", s, this, t)), this._removeReference(s)
            }
            return this
        },
        push: function (e, t) {
            return e = this._prepareModel(e, t), this.add(e, u.extend({
                at: this.length
            }, t)), e
        },
        pop: function (e) {
            var t = this.at(this.length - 1);
            return this.remove(t, e), t
        },
        unshift: function (e, t) {
            return e = this._prepareModel(e, t), this.add(e, u.extend({
                at: 0
            }, t)), e
        },
        shift: function (e) {
            var t = this.at(0);
            return this.remove(t, e), t
        },
        slice: function (e, t) {
            return this.models.slice(e, t)
        },
        get: function (e) {
            return e == null ? void 0 : (this._idAttr || (this._idAttr = this.model.prototype.idAttribute), this._byId[e.id || e.cid || e[this._idAttr] || e])
        },
        at: function (e) {
            return this.models[e]
        },
        where: function (e) {
            return u.isEmpty(e) ? [] : this.filter(function (t) {
                for (var n in e)
                    if (e[n] !== t.get(n)) return !1;
                return !0
            })
        },
        sort: function (e) {
            if (!this.comparator) throw new Error("Cannot sort a set without a comparator");
            return e || (e = {}), u.isString(this.comparator) || this.comparator.length === 1 ? this.models = this.sortBy(this.comparator, this) : this.models.sort(u.bind(this.comparator, this)), e.silent || this.trigger("sort", this, e), this
        },
        pluck: function (e) {
            return u.invoke(this.models, "get", e)
        },
        update: function (e, t) {
            t = u.extend({
                add: !0,
                merge: !0,
                remove: !0
            }, t), t.parse && (e = this.parse(e, t));
            var n, r, i, s, o = [],
                a = [],
                f = {};
            u.isArray(e) || (e = e ? [e] : []);
            if (t.add && !t.remove) return this.add(e, t);
            for (r = 0, i = e.length; r < i; r++) n = e[r], s = this.get(n), t.remove && s && (f[s.cid] = !0), (t.add && !s || t.merge && s) && o.push(n);
            if (t.remove)
                for (r = 0, i = this.models.length; r < i; r++) n = this.models[r], f[n.cid] || a.push(n);
            return a.length && this.remove(a, t), o.length && this.add(o, t), this
        },
        reset: function (e, t) {
            t || (t = {}), t.parse && (e = this.parse(e, t));
            for (var n = 0, r = this.models.length; n < r; n++) this._removeReference(this.models[n]);
            return t.previousModels = this.models.slice(), this._reset(), e && this.add(e, u.extend({
                silent: !0
            }, t)), t.silent || this.trigger("reset", this, t), this
        },
        fetch: function (e) {
            e = e ? u.clone(e) : {}, e.parse === void 0 && (e.parse = !0);
            var t = e.success;
            return e.success = function (e, n, r) {
                var i = r.update ? "update" : "reset";
                e[i](n, r), t && t(e, n, r)
            }, this.sync("read", this, e)
        },
        create: function (e, t) {
            t = t ? u.clone(t) : {};
            if (!(e = this._prepareModel(e, t))) return !1;
            t.wait || this.add(e, t);
            var n = this,
                r = t.success;
            return t.success = function (e, t, i) {
                i.wait && n.add(e, i), r && r(e, t, i)
            }, e.save(null, t), e
        },
        parse: function (e, t) {
            return e
        },
        clone: function () {
            return new this.constructor(this.models)
        },
        _reset: function () {
            this.length = 0, this.models.length = 0, this._byId = {}
        },
        _prepareModel: function (e, t) {
            if (e instanceof h) return e.collection || (e.collection = this), e;
            t || (t = {}), t.collection = this;
            var n = new this.model(e, t);
            return n._validate(e, t) ? n : !1
        },
        _removeReference: function (e) {
            this === e.collection && delete e.collection, e.off("all", this._onModelEvent, this)
        },
        _onModelEvent: function (e, t, n, r) {
            if ((e === "add" || e === "remove") && n !== this) return;
            e === "destroy" && this.remove(t, r), t && e === "change:" + t.idAttribute && (delete this._byId[t.previous(t.idAttribute)], t.id != null && (this._byId[t.id] = t)), this.trigger.apply(this, arguments)
        },
        sortedIndex: function (e, t, n) {
            t || (t = this.comparator);
            var r = u.isFunction(t) ? t : function (e) {
                    return e.get(t)
                };
            return u.sortedIndex(this.models, e, r, n)
        }
    });
    var d = ["forEach", "each", "map", "collect", "reduce", "foldl", "inject", "reduceRight", "foldr", "find", "detect", "filter", "select", "reject", "every", "all", "some", "any", "include", "contains", "invoke", "max", "min", "toArray", "size", "first", "head", "take", "initial", "rest", "tail", "drop", "last", "without", "indexOf", "shuffle", "lastIndexOf", "isEmpty", "chain"];
    u.each(d, function (e) {
        p.prototype[e] = function () {
            var t = i.call(arguments);
            return t.unshift(this.models), u[e].apply(u, t)
        }
    });
    var v = ["groupBy", "countBy", "sortBy"];
    u.each(v, function (e) {
        p.prototype[e] = function (t, n) {
            var r = u.isFunction(t) ? t : function (e) {
                    return e.get(t)
                };
            return u[e](this.models, r, n)
        }
    });
    var m = o.Router = function (e) {
        e || (e = {}), e.routes && (this.routes = e.routes), this._bindRoutes(), this.initialize.apply(this, arguments)
    }, g = /\((.*?)\)/g,
        y = /(\(\?)?:\w+/g,
        b = /\*\w+/g,
        w = /[\-{}\[\]+?.,\\\^$|#\s]/g;
    u.extend(m.prototype, c, {
        initialize: function () {},
        route: function (e, t, n) {
            return u.isRegExp(e) || (e = this._routeToRegExp(e)), n || (n = this[t]), o.history.route(e, u.bind(function (r) {
                var i = this._extractParameters(e, r);
                n && n.apply(this, i), this.trigger.apply(this, ["route:" + t].concat(i)), this.trigger("route", t, i), o.history.trigger("route", this, t, i)
            }, this)), this
        },
        navigate: function (e, t) {
            return o.history.navigate(e, t), this
        },
        _bindRoutes: function () {
            if (!this.routes) return;
            var e, t = u.keys(this.routes);
            while ((e = t.pop()) != null) this.route(e, this.routes[e])
        },
        _routeToRegExp: function (e) {
            return e = e.replace(w, "\\$&").replace(g, "(?:$1)?").replace(y, function (e, t) {
                return t ? e : "([^/]+)"
            }).replace(b, "(.*?)"), new RegExp("^" + e + "$")
        },
        _extractParameters: function (e, t) {
            return e.exec(t).slice(1)
        }
    });
    var E = o.History = function () {
        this.handlers = [], u.bindAll(this, "checkUrl"), typeof window != "undefined" && (this.location = window.location, this.history = window.history)
    }, S = /^[#\/]|\s+$/g,
        x = /^\/+|\/+$/g,
        T = /msie [\w.]+/,
        N = /\/$/;
    E.started = !1, u.extend(E.prototype, c, {
        interval: 50,
        getHash: function (e) {
            var t = (e || this).location.href.match(/#(.*)$/);
            return t ? t[1] : ""
        },
        getFragment: function (e, t) {
            if (e == null)
                if (this._hasPushState || !this._wantsHashChange || t) {
                    e = this.location.pathname;
                    var n = this.root.replace(N, "");
                    e.indexOf(n) || (e = e.substr(n.length))
                } else e = this.getHash();
            return e.replace(S, "")
        },
        start: function (e) {
            if (E.started) throw new Error("Backbone.history has already been started");
            E.started = !0, this.options = u.extend({}, {
                root: "/"
            }, this.options, e), this.root = this.options.root, this._wantsHashChange = this.options.hashChange !== !1, this._wantsPushState = !! this.options.pushState, this._hasPushState = !! (this.options.pushState && this.history && this.history.pushState);
            var t = this.getFragment(),
                n = document.documentMode,
                r = T.exec(navigator.userAgent.toLowerCase()) && (!n || n <= 7);
            this.root = ("/" + this.root + "/").replace(x, "/"), r && this._wantsHashChange && (this.iframe = o.$('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo("body")[0].contentWindow, this.navigate(t)), this._hasPushState ? o.$(window).on("popstate", this.checkUrl) : this._wantsHashChange && "onhashchange" in window && !r ? o.$(window).on("hashchange", this.checkUrl) : this._wantsHashChange && (this._checkUrlInterval = setInterval(this.checkUrl, this.interval)), this.fragment = t;
            var i = this.location,
                s = i.pathname.replace(/[^\/]$/, "$&/") === this.root;
            if (this._wantsHashChange && this._wantsPushState && !this._hasPushState && !s) return this.fragment = this.getFragment(null, !0), this.location.replace(this.root + this.location.search + "#" + this.fragment), !0;
            this._wantsPushState && this._hasPushState && s && i.hash && (this.fragment = this.getHash().replace(S, ""), this.history.replaceState({}, document.title, this.root + this.fragment + i.search));
            if (!this.options.silent) return this.loadUrl()
        },
        stop: function () {
            o.$(window).off("popstate", this.checkUrl).off("hashchange", this.checkUrl), clearInterval(this._checkUrlInterval), E.started = !1
        },
        route: function (e, t) {
            this.handlers.unshift({
                route: e,
                callback: t
            })
        },
        checkUrl: function (e) {
            var t = this.getFragment();
            t === this.fragment && this.iframe && (t = this.getFragment(this.getHash(this.iframe)));
            if (t === this.fragment) return !1;
            this.iframe && this.navigate(t), this.loadUrl() || this.loadUrl(this.getHash())
        },
        loadUrl: function (e) {
            var t = this.fragment = this.getFragment(e),
                n = u.any(this.handlers, function (e) {
                    if (e.route.test(t)) return e.callback(t), !0
                });
            return n
        },
        navigate: function (e, t) {
            if (!E.started) return !1;
            if (!t || t === !0) t = {
                trigger: t
            };
            e = this.getFragment(e || "");
            if (this.fragment === e) return;
            this.fragment = e;
            var n = this.root + e;
            if (this._hasPushState) this.history[t.replace ? "replaceState" : "pushState"]({}, document.title, n);
            else {
                if (!this._wantsHashChange) return this.location.assign(n);
                this._updateHash(this.location, e, t.replace), this.iframe && e !== this.getFragment(this.getHash(this.iframe)) && (t.replace || this.iframe.document.open().close(), this._updateHash(this.iframe.location, e, t.replace))
            }
            t.trigger && this.loadUrl(e)
        },
        _updateHash: function (e, t, n) {
            if (n) {
                var r = e.href.replace(/(javascript:|#).*$/, "");
                e.replace(r + "#" + t)
            } else e.hash = "#" + t
        }
    }), o.history = new E;
    var C = o.View = function (e) {
        this.cid = u.uniqueId("view"), this._configure(e || {}), this._ensureElement(), this.initialize.apply(this, arguments), this.delegateEvents()
    }, k = /^(\S+)\s*(.*)$/,
        L = ["model", "collection", "el", "id", "attributes", "className", "tagName", "events"];
    u.extend(C.prototype, c, {
        tagName: "div",
        $: function (e) {
            return this.$el.find(e)
        },
        initialize: function () {},
        render: function () {
            return this
        },
        remove: function () {
            return this.$el.remove(), this.stopListening(), this
        },
        setElement: function (e, t) {
            return this.$el && this.undelegateEvents(), this.$el = e instanceof o.$ ? e : o.$(e), this.el = this.$el[0], t !== !1 && this.delegateEvents(), this
        },
        delegateEvents: function (e) {
            if (!e && !(e = u.result(this, "events"))) return;
            this.undelegateEvents();
            for (var t in e) {
                var n = e[t];
                u.isFunction(n) || (n = this[e[t]]);
                if (!n) throw new Error('Method "' + e[t] + '" does not exist');
                var r = t.match(k),
                    i = r[1],
                    s = r[2];
                n = u.bind(n, this), i += ".delegateEvents" + this.cid, s === "" ? this.$el.on(i, n) : this.$el.on(i, s, n)
            }
        },
        undelegateEvents: function () {
            this.$el.off(".delegateEvents" + this.cid)
        },
        _configure: function (e) {
            this.options && (e = u.extend({}, u.result(this, "options"), e)), u.extend(this, u.pick(e, L)), this.options = e
        },
        _ensureElement: function () {
            if (!this.el) {
                var e = u.extend({}, u.result(this, "attributes"));
                this.id && (e.id = u.result(this, "id")), this.className && (e["class"] = u.result(this, "className"));
                var t = o.$("<" + u.result(this, "tagName") + ">").attr(e);
                this.setElement(t, !1)
            } else this.setElement(u.result(this, "el"), !1)
        }
    });
    var A = {
        create: "POST",
        update: "PUT",
        patch: "PATCH",
        "delete": "DELETE",
        read: "GET"
    };
    o.sync = function (e, t, n) {
        var r = A[e];
        u.defaults(n || (n = {}), {
            emulateHTTP: o.emulateHTTP,
            emulateJSON: o.emulateJSON
        });
        var i = {
            type: r,
            dataType: "json"
        };
        n.url || (i.url = u.result(t, "url") || M()), n.data == null && t && (e === "create" || e === "update" || e === "patch") && (i.contentType = "application/json", i.data = JSON.stringify(n.attrs || t.toJSON(n))), n.emulateJSON && (i.contentType = "application/x-www-form-urlencoded", i.data = i.data ? {
            model: i.data
        } : {});
        if (n.emulateHTTP && (r === "PUT" || r === "DELETE" || r === "PATCH")) {
            i.type = "POST", n.emulateJSON && (i.data._method = r);
            var s = n.beforeSend;
            n.beforeSend = function (e) {
                e.setRequestHeader("X-HTTP-Method-Override", r);
                if (s) return s.apply(this, arguments)
            }
        }
        i.type !== "GET" && !n.emulateJSON && (i.processData = !1);
        var a = n.success;
        n.success = function (e) {
            a && a(t, e, n), t.trigger("sync", t, e, n)
        };
        var f = n.error;
        n.error = function (e) {
            f && f(t, e, n), t.trigger("error", t, e, n)
        };
        var l = n.xhr = o.ajax(u.extend(i, n));
        return t.trigger("request", t, l, n), l
    }, o.ajax = function () {
        return o.$.ajax.apply(o.$, arguments)
    };
    var O = function (e, t) {
        var n = this,
            r;
        e && u.has(e, "constructor") ? r = e.constructor : r = function () {
            return n.apply(this, arguments)
        }, u.extend(r, n, t);
        var i = function () {
            this.constructor = r
        };
        return i.prototype = n.prototype, r.prototype = new i, e && u.extend(r.prototype, e), r.__super__ = n.prototype, r
    };
    h.extend = p.extend = m.extend = C.extend = E.extend = O;
    var M = function () {
        throw new Error('A "url" property or function must be specified')
    }
}.call(this);
var Cursor = {
    x: 0,
    y: 0,
    init: function () {
        this.setEvent("mouse"), this.setEvent("touch")
    },
    setEvent: function (e) {
        var t = document["on" + e + "move"] || function () {};
        document["on" + e + "move"] = function (e) {
            t(e), Cursor.refresh(e)
        }
    },
    refresh: function (e) {
        e || (e = window.event), e.type == "mousemove" ? this.set(e) : e.touches && this.set(e.touches[0])
    },
    set: function (e) {
        if (e.pageX || e.pageY) this.x = e.pageX, this.y = e.pageY;
        else if (e.clientX || e.clientY) this.x = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft, this.y = e.clientY + document.body.scrollTop + document.documentElement.scrollTop
    }
};
Cursor.init();
var Position = {
    get: function (e) {
        var t = curtop = 0;
        if (e.offsetParent)
            do t += e.offsetLeft, curtop += e.offsetTop; while (e = e.offsetParent);
        return [t, curtop]
    }
}, Dragdealer = function (e, t) {
        typeof e == "string" && (e = document.getElementById(e));
        if (!e) return;
        var n = e.getElementsByTagName("div")[0];
        if (!n || n.className.search(/(^|\s)handle(\s|$)/) == -1) return;
        this.init(e,
            n, t || {}), this.setup()
    };
Dragdealer.prototype = {
    init: function (e, t, n) {
        this.wrapper = e, this.handle = t, this.options = n, this.disabled = this.getOption("disabled", !1), this.horizontal = this.getOption("horizontal", !0), this.vertical = this.getOption("vertical", !1), this.slide = this.getOption("slide", !0), this.steps = this.getOption("steps", 0), this.snap = this.getOption("snap", !1), this.loose = this.getOption("loose", !1), this.speed = this.getOption("speed", 10) / 100, this.xPrecision = this.getOption("xPrecision", 0), this.yPrecision = this.getOption("yPrecision", 0), this.callback = n.callback || null, this.animationCallback = n.animationCallback || null, this.bounds = {
            left: n.left || 0,
            right: -(n.right || 0),
            top: n.top || 0,
            bottom: -(n.bottom || 0),
            x0: 0,
            x1: 0,
            xRange: 0,
            y0: 0,
            y1: 0,
            yRange: 0
        }, this.value = {
            prev: [-1, -1],
            current: [n.x || 0, n.y || 0],
            target: [n.x || 0, n.y || 0]
        }, this.offset = {
            wrapper: [0, 0],
            mouse: [0, 0],
            prev: [-999999, -999999],
            current: [0, 0],
            target: [0, 0]
        }, this.change = [0, 0], this.activity = !1, this.dragging = !1, this.tapping = !1
    },
    getOption: function (e, t) {
        return this.options[e] !== undefined ? this.options[e] : t
    },
    setup: function () {
        this.setWrapperOffset(), this.setBoundsPadding(), this.setBounds(), this.setSteps(), this.addListeners()
    },
    setWrapperOffset: function () {
        this.offset.wrapper = Position.get(this.wrapper)
    },
    setBoundsPadding: function () {
        !this.bounds.left && !this.bounds.right && (this.bounds.left = Position.get(this.handle)[0] - this.offset.wrapper[0], this.bounds.right = -this.bounds.left), !this.bounds.top && !this.bounds.bottom && (this.bounds.top = Position.get(this.handle)[1] - this.offset.wrapper[1], this.bounds.bottom = -this.bounds.top)
    },
    setBounds: function () {
        this.bounds.x0 = this.bounds.left, this.bounds.x1 = this.wrapper.offsetWidth + this.bounds.right, this.bounds.xRange = this.bounds.x1 - this.bounds.x0 - this.handle.offsetWidth, this.bounds.y0 = this.bounds.top, this.bounds.y1 = this.wrapper.offsetHeight + this.bounds.bottom, this.bounds.yRange = this.bounds.y1 - this.bounds.y0 - this.handle.offsetHeight, this.bounds.xStep = 1 / (this.xPrecision || Math.max(this.wrapper.offsetWidth, this.handle.offsetWidth)), this.bounds.yStep = 1 / (this.yPrecision || Math.max(this.wrapper.offsetHeight, this.handle.offsetHeight))
    },
    setSteps: function () {
        if (this.steps > 1) {
            this.stepRatios = [];
            for (var e = 0; e <= this.steps - 1; e++) this.stepRatios[e] = e / (this.steps - 1)
        }
    },
    addListeners: function () {
        var e = this;
        this.wrapper.onselectstart = function () {
            return !1
        }, this.handle.onmousedown = this.handle.ontouchstart = function (t) {
            e.handleDownHandler(t)
        }, this.wrapper.onmousedown = this.wrapper.ontouchstart = function (t) {
            e.wrapperDownHandler(t)
        };
        var t = document.onmouseup || function () {};
        document.onmouseup = function (n) {
            t(n), e.documentUpHandler(n)
        };
        var n = document.ontouchend || function () {};
        document.ontouchend = function (t) {
            n(t), e.documentUpHandler(t)
        };
        var r = window.onresize || function () {};
        window.onresize = function (t) {
            r(t), e.documentResizeHandler(t)
        }, this.wrapper.onmousemove = function (t) {
            e.activity = !0
        }, this.wrapper.onclick = function (t) {
            return !e.activity
        }, this.interval = setInterval(function () {
            e.animate()
        }, 25), e.animate(!1, !0)
    },
    handleDownHandler: function (e) {
        this.activity = !1, Cursor.refresh(e), this.preventDefaults(e, !0), this.startDrag(), this.cancelEvent(e)
    },
    wrapperDownHandler: function (e) {
        Cursor.refresh(e), this.preventDefaults(e, !0), this.startTap()
    },
    documentUpHandler: function (e) {
        this.stopDrag(), this.stopTap()
    },
    documentResizeHandler: function (e) {
        this.setWrapperOffset(), this.setBounds(), this.update()
    },
    enable: function () {
        this.disabled = !1, this.handle.className = this.handle.className.replace(/\s?disabled/g, "")
    },
    disable: function () {
        this.disabled = !0, this.handle.className += " disabled"
    },
    setStep: function (e, t, n) {
        this.setValue(this.steps && e > 1 ? (e - 1) / (this.steps - 1) : 0, this.steps && t > 1 ? (t - 1) / (this.steps - 1) : 0, n)
    },
    setValue: function (e, t, n) {
        this.setTargetValue([e, t || 0]), n && this.groupCopy(this.value.current, this.value.target)
    },
    startTap: function (e) {
        if (this.disabled) return;
        this.tapping = !0, e === undefined && (e = [Cursor.x - this.offset.wrapper[0] - this.handle.offsetWidth / 2, Cursor.y - this.offset.wrapper[1] - this.handle.offsetHeight / 2]), this.setTargetOffset(e)
    },
    stopTap: function () {
        if (this.disabled || !this.tapping) return;
        this.tapping = !1, this.setTargetValue(this.value.current), this.result()
    },
    startDrag: function () {
        if (this.disabled) return;
        this.offset.mouse = [Cursor.x - Position.get(this.handle)[0], Cursor.y - Position.get(this.handle)[1]], this.dragging = !0
    },
    stopDrag: function () {
        if (this.disabled || !this.dragging) return;
        this.dragging = !1;
        var e = this.groupClone(this.value.current);
        if (this.slide) {
            var t = this.change;
            e[0] += t[0] * 4, e[1] += t[1] * 4
        }
        this.setTargetValue(e), this.result()
    },
    feedback: function () {
        var e = this.value.current;
        this.snap && this.steps > 1 && (e = this.getClosestSteps(e)), this.groupCompare(e, this.value.prev) || (typeof this.animationCallback == "function" && this.animationCallback(e[0], e[1]), this.groupCopy(this.value.prev, e))
    },
    result: function () {
        typeof this.callback == "function" && this.callback(this.value.target[0], this.value.target[1])
    },
    animate: function (e, t) {
        if (e && !this.dragging) return;
        if (this.dragging) {
            var n = this.groupClone(this.value.target),
                r = [Cursor.x - this.offset.wrapper[0] - this.offset.mouse[0], Cursor.y - this.offset.wrapper[1] - this.offset.mouse[1]];
            this.setTargetOffset(r, this.loose), this.change = [this.value.target[0] - n[0], this.value.target[1] - n[1]]
        }(this.dragging || t) && this.groupCopy(this.value.current, this.value.target);
        if (this.dragging || this.glide() || t) this.update(), this.feedback()
    },
    glide: function () {
        var e = [this.value.target[0] - this.value.current[0], this.value.target[1] - this.value.current[1]];
        return !e[0] && !e[1] ? !1 : (Math.abs(e[0]) > this.bounds.xStep || Math.abs(e[1]) > this.bounds.yStep ? (this.value.current[0] += e[0] * this.speed, this.value.current[1] += e[1] * this.speed) : this.groupCopy(this.value.current, this.value.target), !0)
    },
    update: function () {
        this.snap ? this.offset.current = this.getOffsetsByRatios(this.getClosestSteps(this.value.current)) : this.offset.current = this.getOffsetsByRatios(this.value.current), this.show()
    },
    show: function () {
        this.groupCompare(this.offset.current, this.offset.prev) || (this.horizontal && (this.handle.style.left = String(this.offset.current[0]) + "px"), this.vertical && (this.handle.style.top = String(this.offset.current[1]) + "px"), this.groupCopy(this.offset.prev, this.offset.current))
    },
    setTargetValue: function (e, t) {
        var n = t ? this.getLooseValue(e) : this.getProperValue(e);
        this.groupCopy(this.value.target, n), this.offset.target = this.getOffsetsByRatios(n)
    },
    setTargetOffset: function (e, t) {
        var n = this.getRatiosByOffsets(e),
            r = t ? this.getLooseValue(n) : this.getProperValue(n);
        this.groupCopy(this.value.target, r), this.offset.target = this.getOffsetsByRatios(r)
    },
    getLooseValue: function (e) {
        var t = this.getProperValue(e);
        return [t[0] + (e[0] - t[0]) / 4, t[1] + (e[1] - t[1]) / 4]
    },
    getProperValue: function (e) {
        var t = this.groupClone(e);
        return t[0] = Math.max(t[0], 0), t[1] = Math.max(t[1], 0), t[0] = Math.min(t[0], 1), t[1] = Math.min(t[1], 1), (!this.dragging && !this.tapping || this.snap) && this.steps > 1 && (t = this.getClosestSteps(t)), t
    },
    getRatiosByOffsets: function (e) {
        return [this.getRatioByOffset(e[0], this.bounds.xRange, this.bounds.x0), this.getRatioByOffset(e[1], this.bounds.yRange, this.bounds.y0)]
    },
    getRatioByOffset: function (e, t, n) {
        return t ? (e - n) / t : 0
    },
    getOffsetsByRatios: function (e) {
        return [this.getOffsetByRatio(e[0], this.bounds.xRange, this.bounds.x0), this.getOffsetByRatio(e[1], this.bounds.yRange, this.bounds.y0)]
    },
    getOffsetByRatio: function (e, t, n) {
        return Math.round(e * t) + n
    },
    getClosestSteps: function (e) {
        return [this.getClosestStep(e[0]), this.getClosestStep(e[1])]
    },
    getClosestStep: function (e) {
        var t = 0,
            n = 1;
        for (var r = 0; r <= this.steps - 1; r++) Math.abs(this.stepRatios[r] - e) < n && (n = Math.abs(this.stepRatios[r] - e), t = r);
        return this.stepRatios[t]
    },
    groupCompare: function (e, t) {
        return e[0] == t[0] && e[1] == t[1]
    },
    groupCopy: function (e, t) {
        e[0] = t[0], e[1] = t[1]
    },
    groupClone: function (e) {
        return [e[0], e[1]]
    },
    preventDefaults: function (e, t) {
        e || (e = window.event), e.preventDefault && e.preventDefault(), e.returnValue = !1, t && document.selection && document.selection.empty()
    },
    cancelEvent: function (e) {
        e || (e = window.event), e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0
    }
}, ! function (e) {
    e.fn.dragdealer = function (e) {
        return new Dragdealer(this[0], e)
    }
}(jQuery),
function () {
    if (!this.require) {
        var e = {}, t = {}, n = function (s, o) {
                var u = r(o, s),
                    a = r(u, "./index"),
                    f, l;
                f = t[u] || t[a];
                if (f) return f;
                if (l = e[u] || e[u = a]) return f = {
                    id: u,
                    exports: {}
                }, t[u] = f.exports, l(f.exports, function (e) {
                    return n(e, i(u))
                }, f), t[u] = f.exports;
                throw "module " + s + " not found"
            }, r = function (e, t) {
                var n = [],
                    r, i;
                /^\.\.?(\/|$)/.test(t) ? r = [e, t].join("/").split("/") : r = t.split("/");
                for (var s = 0, o = r.length; s < o; s++) i = r[s], i == ".." ? n.pop() : i != "." && i != "" && n.push(i);
                return n.join("/")
            }, i = function (e) {
                return e.split("/").slice(0, -1).join("/")
            };
        this.require = function (e) {
            return n(e, "")
        }, this.require.define = function (t) {
            for (var n in t) e[n] = t[n]
        }, this.require.modules = e, this.require.cache = t
    }
    return this.require.define
}.call(this)({
    color: function (e, t, n) {
        (function () {
            var e;
            e = Backbone.Model.extend({
                defaults: {},
                randomColor: function () {
                    return [_.random(0, 360), 100, 50, 1]
                },
                updateRgb: function (e) {
                    return e || (e = this.hslToRgb(this.hsla())), this.set({
                        rgb: [e[0], e[1], e[2]]
                    }), e
                },
                updateHsl: function (e) {
                    return this.set({
                        h: e[0],
                        s: e[1],
                        l: e[2]
                    })
                },
                updateHex: function (e) {
                    return this.set({
                        hex: this.rgbToHex(e || this.rgba())
                    })
                },
                h: function (e) {
                    return this.inRange("h", e) ? (this.get("h") !== e && (this.set({
                        h: e
                    }), this.updateHex(this.updateRgb())), e) : !1
                },
                s: function (e) {
                    return this.inRange("s", e) ? (this.get("s") !== e && (this.set({
                        s: e
                    }), this.updateHex(this.updateRgb())), e) : !1
                },
                l: function (e) {
                    return this.inRange("l", e) ? (this.get("l") !== e && (this.set({
                        l: e
                    }), this.updateHex(this.updateRgb())), e) : !1
                },
                a: function (e) {
                    return this.inRange("a", e) ? (this.get("a") !== e && (this.set({
                        a: e
                    }), this.updateHex(this.updateRgb())), e) : !1
                },
                hsla: function (e) {
                    return e != null ? (e = this.isHsl(e), e ? (this.hsla().join(",") !== e.join(",") && (this.updateHex(this.updateRgb(this.hslToRgb(e))), this.updateHsl(e), this.set({
                        a: e[3] != null ? e[3] : 1
                    })), e) : !1) : [this.get("h"), this.get("s"), this.get("l"), this.get("a")]
                },
                hslaStr: function (e) {
                    return e || (e = this.hsla()), "hsla(" + e[0] + ", " + e[1] + "%, " + e[2] + "%, " + e[3] + ")"
                },
                rgba: function (e) {
                    return e != null ? (e = this.isRgb(e), e ? (e.join(",") !== this.rgba().join(",") && (this.set({
                        rgb: [e[0], e[1], e[2]],
                        a: e[3] != null ? e[3] : 1
                    }), this.updateHex(e), this.updateHsl(this.rgbToHsl(e))), e) : !1) : this.get("rgb").concat(this.get("a"))
                },
                rgbaStr: function () {
                    var e;
                    return e = this.get("rgb"), "rgba(" + e[0] + ", " + e[1] + ", " + e[2] + ", " + this.get("a") + ")"
                },
                hex: function (e) {
                    var t;
                    return e != null ? (e = this.isHex(e), e ? (this.hex() !== e && (this.set({
                        hex: e
                    }), t = this.hexToRgb(e), this.updateRgb(t), this.set({
                        a: t[3] || 1
                    }), this.updateHsl(this.rgbToHsl(t))), e) : !1) : this.get("hex")
                },
                isHex: function (t, n) {
                    var r, i;
                    return n == null && (n = !0), r = (i = t.match(/^#?([0-9a-fA-F]{3})([0-9a-fA-F]{3})?$/)) != null ? i.slice(1) : void 0, r == null ? !1 : (e = _.compact(r).join(""), n ? "#" + e : e)
                },
                isRgb: function (e) {
                    var t, n, r, i;
                    if (typeof e == "string") {
                        n = (i = e.match(/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,?\s*(0?\.?\d+)?\s*\)$/)) != null ? i.slice(1) : void 0;
                        if (n == null) return !1;
                        e = function () {
                            var e, r, i, s;
                            i = _.compact(n), s = [];
                            for (e = 0, r = i.length; e < r; e++) t = i[e], s.push(parseFloat(t));
                            return s
                        }()
                    }
                    return e[3] == null && (e[3] = 1), r = e[0] <= 255 && e[1] <= 255 && e[2] <= 255 && e[3] <= 1, r ? e : !1
                },
                isHsl: function (e) {
                    var t, n, r, i;
                    if (typeof e == "string") {
                        n = (i = e.match(/hsla?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\%\s*,\s*(\d{1,3})\%\s*,?\s*(0?\.?\d+)?\s*\)$/)) != null ? i.slice(1) : void 0;
                        if (n == null) return !1;
                        e = function () {
                            var e, r, i, s;
                            i = _.compact(n), s = [];
                            for (e = 0, r = i.length; e < r; e++) t = i[e], s.push(parseFloat(t));
                            return s
                        }()
                    }
                    return e[3] == null && (e[3] = 1), r = e[0] <= 360 && e[1] <= 100 && e[2] <= 100 && e[3] <= 1, r ? e : !1
                },
                valid: function (e) {
                    var t;
                    return t = this.type(e), t === "hex" ? this.isHex(e) : t === "rgb" ? this.isRgb(e) : t === "hsl" ? this.isHsl(e) : !1
                },
                inRange: function (e, t) {
                    var n;
                    switch (e) {
                    case "h":
                        n = t >= 0 && t <= 360;
                        break;
                    case "s":
                    case "l":
                        n = t >= 0 && t <= 100;
                        break;
                    case "a":
                        n = t >= 0 && t <= 1
                    }
                    return n
                },
                type: function (e) {
                    var t, n;
                    return t = e.toString(), n = t.indexOf("#") >= 0 || t.length === 3 || t.length === 6 ? "hex" : t.indexOf("%") ? "hsl" : "rgb"
                },
                hexToRgb: function (t) {
                    var n;
                    return t = this.isHex(t, !1), t ? (t.length !== 6 && (t = function () {
                        var e, r, i;
                        i = [];
                        for (e = 0, r = t.length; e < r; e++) n = t[e], i.push("" + n + n);
                        return i
                    }().join("")), e = t.match(/#?(.{2})(.{2})(.{2})/).slice(1), e = function () {
                        var t, r, i;
                        i = [];
                        for (t = 0, r = e.length; t < r; t++) n = e[t], i.push(parseInt(n, 16));
                        return i
                    }().concat([1])) : !1
                },
                hexToHsl: function (e) {
                    if (e.indexOf("#") >= 0 || e.length < 6) e = this.isHex(e);
                    return e ? this.rgbToHsl(this.hexToRgb(e)) : !1
                },
                rgbToHex: function (e) {
                    var t, n, r;
                    typeof e == "string" && (e = this.isRgb(e));
                    if (e) return n = function () {
                        var n, r, i, s;
                        i = e.slice(0, 3), s = [];
                        for (n = 0, r = i.length; n < r; n++) t = i[n], s.push(parseFloat(t).toString(16));
                        return s
                    }(), n = function () {
                        var e, r, i;
                        i = [];
                        for (e = 0, r = n.length; e < r; e++) t = n[e], t.length === 1 ? i.push("0" + t) : i.push(t);
                        return i
                    }(), n = n.join(""), _.compact(function () {
                        var e, t, s, o;
                        s = n.match(/.{1,2}/g), o = [];
                        for (e = 0, t = s.length; e < t; e++) r = s[e], o.push(r[0] === r[1]);
                        return o
                    }()).length === 3 ? "#" + n[0] + n[2] + n[4] : "#" + n
                },
                rgbToHsl: function (e) {
                    var t, n, r, i, s, o, u, a, f, l, c, h, p, d;
                    return typeof e == "string" && (e = this.isRgb(e)), e ? (h = parseFloat(e[0]) / 255, s = parseFloat(e[1]) / 255, r = parseFloat(e[2]) / 255, l = Math.max(h, s, r), c = Math.min(h, s, r), i = l - c, n = l + c, u = c === l ? 0 : h === l ? (60 * (s - r) / i + 360) % 360 : s === l ? 60 * (r - h) / i + 120 : 60 * (h - s) / i + 240, f = .5 * n, d = f === 0 ? 0 : f === 1 ? 1 : f <= .5 ? i / n : i / (2 - n), o = Math.round(u), p = Math.round(d * 100), a = Math.round(f * 100), t = parseFloat(e[3]) || 1, [o, p, a, t]) : !1
                },
                hslToRgb: function (e) {
                    var t, n, r, i, s, o, u, a, f, l, c, h;
                    return typeof e == "string" && (e = this.isHsl(e)), e ? (o = parseInt(e[0]) / 360, h = parseInt(e[1]) / 100, u = parseInt(e[2]) / 100, f = u <= .5 ? u * (1 + h) : u + h - u * h, a = 2 * u - f, c = o + 1 / 3, s = o, r = o - 1 / 3, l = Math.round(this.hueToRgb(a, f, c) * 255), i = Math.round(this.hueToRgb(a, f, s) * 255), n = Math.round(this.hueToRgb(a, f, r) * 255), t = parseFloat(e[3]) || 1, [l, i, n, t]) : !1
                },
                hslToHex: function (e) {
                    return typeof e == "string" && (e = this.isHsl(e)), e ? this.rgbToHex(this.hslToRgb(e)) : !1
                },
                hueToRgb: function (e, t, n) {
                    return n < 0 && (n += 1), n > 1 && (n -= 1), n * 6 < 1 ? e + (t - e) * n * 6 : n * 2 < 1 ? t : n * 3 < 2 ? e + (t - e) * (2 / 3 - n) * 6 : e
                }
            }), n.exports = function (t) {
                return new e(t)
            }
        }).call(this)
    },
    inputs: function (e, t, n) {
        (function () {
            var e;
            e = Backbone.View.extend({
                initialize: function (e) {
                    return this.setElement($(e.el)), this.model.on("change:h", this.setHue, this), this.model.on("change:s", this.setSat, this), this.model.on("change:l", this.setLum, this), this.model.on("change:a", this.setAlpha, this), this.model.on("change:a", this.changeRgb, this), this.model.on("change:hex", this.changeHex, this), this.model.on("change:rgb", this.changeRgb, this)
                },
                events: {
                    "keydown .sliders input": "bumpHsl",
                    "keyup .sliders input": "editHsl",
                    "keyup .color-inputs input": "changeColor"
                },
                changeColor: function (e) {
                    var t;
                    return t = $(e.target), this.model[t.attr("id")](t.val()) ? t.removeClass("error") : t.addClass("error")
                },
                bumpHsl: function (e) {
                    var t, n;
                    if (e.keyCode === 38 || e.keyCode === 40) return t = $(e.target).attr("id"), n = e.shiftKey ? 10 : 1, e.keyCode === 40 && (n = -n), this.bumpValue(t, n), e.preventDefault()
                },
                bumpValue: function (e, t) {
                    var n, r;
                    n = this.model.get(e), r = e === "a" ? Math.round(n * 100 + t) / 100 : n + t;
                    switch (e) {
                    case "h":
                        r = this.gate(r, 360);
                        break;
                    case "s":
                    case "l":
                        r = this.gate(r, 100);
                        break;
                    case "a":
                        r = this.gate(r, 1)
                    }
                    return this.model[e](r)
                },
                gate: function (e, t) {
                    return e < 0 ? 0 : e > t ? t : e
                },
                editHsl: function (e) {
                    var t, n, r;
                    return t = $(e.target), n = t.attr("id"), r = parseFloat(t.val()), this.model.inRange(n, r) ? (t.removeClass("error"), this.model[n](r)) : t.addClass("error")
                },
                changeHex: function () {
                    return this.update($("#hex"), this.model.get("hex"))
                },
                changeRgb: function () {
                    return this.update($("#rgba"), this.model.rgbaStr())
                },
                changeHsl: function () {
                    return this.update($("#hsla"), this.model.hslaStr())
                },
                setHue: function () {
                    return this.update($("#h"), this.model.get("h")), this.changeHsl()
                },
                setSat: function () {
                    return this.update($("#s"), this.model.get("s")), this.changeHsl()
                },
                setLum: function () {
                    return this.update($("#l"), this.model.get("l")), this.changeHsl()
                },
                setAlpha: function () {
                    return this.update($("#a"), this.model.get("a")), this.changeHsl()
                },
                update: function (e, t) {
                    if (e.val() !== "" + t) return e.val("" + t)
                }
            }), n.exports = function (t) {
                return new e(t)
            }
        }).call(this)
    },
    picker: function (e, t, n) {
        (function () {
            var e;
            e = Backbone.View.extend({
                initialize: function (e) {
                    return this.setElement($(e.el))
                },
                render: function () {
                    var e = this;
                    return this.hueSlider = this.$("#h-slider").dragdealer({
                        slide: !1,
                        steps: 361,
                        speed: 100,
                        x: this.model.get("h") / 360,
                        animationCallback: function (t, n) {
                            var r;
                            r = Math.round(t * 360);
                            if (e.model.get("h") !== r) return e.model.h(r)
                        }
                    }), this.satSlider = this.$("#s-slider").dragdealer({
                        slide: !1,
                        steps: 101,
                        speed: 100,
                        x: this.model.get("s") / 100,
                        animationCallback: function (t, n) {
                            var r;
                            r = Math.round(t * 100);
                            if (e.model.get("s") !== r) return e.model.s(r)
                        }
                    }), this.lumSlider = this.$("#l-slider").dragdealer({
                        slide: !1,
                        steps: 101,
                        speed: 100,
                        x: this.model.get("l") / 100,
                        animationCallback: function (t, n) {
                            var r;
                            r = Math.round(t * 100);
                            if (e.model.get("l") !== r) return e.model.l(r)
                        }
                    }), this.alphaSlider = this.$("#a-slider").dragdealer({
                        slide: !1,
                        steps: 101,
                        speed: 100,
                        x: this.model.get("a"),
                        animationCallback: function (t, n) {
                            var r;
                            r = Math.round(t * 100) / 100;
                            if (e.model.get("a") !== r) return e.model.a(r)
                        }
                    }), this.updateSliderStyles("all"), this.model.on("change:h", this.setHue, this), this.model.on("change:s", this.setSat, this), this.model.on("change:l", this.setLum, this), this.model.on("change:a", this.setAlpha, this), this
                },
                setHue: function () {
                    return this.setSlider(this.hueSlider, this.model.get("h"), 360), this.updateSliderStyles("h")
                },
                setSat: function () {
                    return this.setSlider(this.satSlider, this.model.get("s"), 100), this.updateSliderStyles("s")
                },
                setLum: function () {
                    return this.setSlider(this.lumSlider, this.model.get("l"), 100), this.updateSliderStyles("l")
                },
                setAlpha: function () {
                    return this.setSlider(this.alphaSlider, this.model.get("a") * 100, 100), this.updateSliderStyles("a")
                },
                setSlider: function (e, t, n) {
                    if (Math.round(e.value.current[0] * n) !== Math.round(t)) return e.setValue(t / n)
                },
                updateSliderStyles: function (e) {
                    var t, n, r, i, s;
                    n = _.without(["h", "s", "l", "a"], e), s = [];
                    for (r = 0, i = n.length; r < i; r++) t = n[r], s.push(this.setSliderBg(t));
                    return s
                },
                setSliderBg: function (e) {
                    return $("#" + e + "-slider").attr("style", "background: -webkit-" + this.gradient(e) + "; background: -moz-" + this.gradient(e))
                },
                gradient: function (e) {
                    var t, n, r, i;
                    switch (e) {
                    case "h":
                        i = 36, n = 10;
                        break;
                    case "s":
                    case "l":
                        i = 5, n = 20;
                        break;
                    case "a":
                        i = 5, n = .2
                    }
                    return t = function () {
                        var t, s;
                        s = [];
                        for (r = t = 0; 0 <= i ? t <= i : t >= i; r = 0 <= i ? ++t : --t) s.push(this.model.hslaStr(this.tweakHsla(e, r * n)));
                        return s
                    }.call(this), "linear-gradient(left, " + t.join(",") + ");"
                },
                tweakHsla: function (e, t) {
                    var n, r;
                    n = this.model.hsla();
                    switch (e) {
                    case "h":
                        r = 0;
                        break;
                    case "s":
                        r = 1;
                        break;
                    case "l":
                        r = 2;
                        break;
                    case "a":
                        r = 3
                    }
                    return n.splice(r, 1, t), n
                }
            }), n.exports = function (t) {
                return new e(t)
            }
        }).call(this)
    },
    site: function (t, n, r) {
        (function () {
            var t, i, s, o, u;
            t = n("color"), s = n("picker"), i = n("inputs"), u = n("tiles"), o = Backbone.View.extend({
                initialize: function (e) {
                    return this.setElement($("body")), this.tiles = e.tiles, this.model.set({
                        tile: "foreground"
                    }), this.model.on("change:h", this.updateColor, this), this.model.on("change:s", this.updateColor, this), this.model.on("change:l", this.updateColor, this), this.model.on("change:a", this.updateColor, this), this.style = $("<style>"), $("head").append(this.style), t = this.urlToColor(window.location.hash) || this.model.randomColor(), this.model.hsla(t)
                },
                events: {
                    "click .url": "selectUrl",
                    "click .show-more": "toggleWhy"
                },
                updateColor: function () {
                    var e, n;
                    t = this.model.hsla(), n = this.model.get("tile"), e = {}, e[n] = t, this.model.set(e), this.setUrl();
                    if (n === "foreground") return this.setPageStyles()
                },
                selectUrl: function (e) {
                    return e.target.select()
                },
                toggleWhy: function () {
                    return $("#more").toggleClass("hide"), e.preventDefault()
                },
                urlToColor: function (e) {
                    var n, r, i, s, o, u, a;
                    if (e.length) return i = function () {
                        var r, i, s, f;
                        s = e.split("/"), f = [];
                        for (r = 0, i = s.length; r < i; r++) t = s[r], t = t.split(","), o = t[0], n = t[1], u = this.model.hexToRgb(o), f.push(a = n != null ? (u.splice(-1, 1, parseFloat(n)), this.model.rgbToHsl(u)) : this.model.rgbToHsl(u));
                        return f
                    }.call(this), s = i[0], r = i[1], s != null && this.model.set({
                        foreground: s
                    }), r != null && this.model.set({
                        background: r
                    }), s
                },
                setUrl: function () {
                    var e, t, n, r, i, s, o;
                    return n = window.location.host, t = this.getColorUrl(this.model.get("foreground")), e = this.model.get("background"), e[3] > 0 && (t += "/" + this.getColorUrl(e)), r = $(".url"), s = "" + n + "/" + t, i = this.throttle(function (e) {
                        return window.location.replace(e)
                    }, 300), i(t), o = s.length * 7.8, r.css({
                        width: o
                    }), r.val(s)
                },
                getColorUrl: function (e) {
                    var t;
                    return t = this.model.hslToHex(e), e[3] !== 1 && (t += "," + e[3]), t
                },
                setPageStyles: function () {
                    var e, t, n, r;
                    t = this.model.hsla();
                    if (!_.contains(t, void 0)) return n = this.model.hslaStr([t[0], 100, 70, 1]), r = this.model.hslaStr([t[0], 40, 70, 1]), e = this.model.hslaStr([t[0], 40, 70, 1])//, this.style.text("body a:hover { color: " + n + " !important }   body h2, body h3, code { color: " + e + " }")
                },
                getTextShadow: function (e) {
                    var n, r, i, s, o = this;
                    return i = e[2], s = i < 35 ? 30 : i > 80 ? 30 : e[1], r = i < 35 ? 35 : i > 80 ? 80 : i, t = [e[0], Math.round(s / 2.7), r], n = [], _(4).times(function (e) {
                        return n.push(o.adjustLum(Math.round(-5.5 * (e - 1)), t))
                    }), n[0] + " 0px 1px 0px, " + n[1] + " 0px 2px 0px, " + n[2] + " 0px 3px 0px, " + n[3] + " 0px 4px 0px, " + "rgba(0, 0, 0, 0.2) 0px 5px 1px, " + "rgba(0, 0, 0, 0.3) 0px 0px 10px, " + "rgba(0, 0, 0, 0.4) 0px 3px 5px, " + "rgba(0, 0, 0, 0.5) 0px 6px 5px, " + "rgba(0, 0, 0, 0.6) 0px 10px 10px"
                },
                adjustLum: function (e, t) {
                    return t == null && (t = this.model.hsla()), this.model.hslaStr([t[0], t[1], t[2] + 1, this.model.get("a")])
                },
                throttle: function (e, t) {
                    var n;
                    return t == null && (t = 50), n = null,
                    function () {
                        var r, i;
                        return i = this, r = arguments, clearTimeout(n), n = setTimeout(function () {
                            return e.apply(i, r)
                        }, t)
                    }
                }
            }), r.exports = function () {
                return t = t(), s({
                    model: t,
                    el: "#picker"
                }).render(), i({
                    model: t,
                    el: "#hslpicker"
                }), new o({
                    model: t,
                    tiles: u({
                        model: t,
                        el: "#tiles"
                    })
                })
            }
        }).call(this)
    },
    tiles: function (e, t, n) {
        (function () {
            var e;
            e = Backbone.View.extend({
                initialize: function (e) {
                    return this.model.on("change:foreground", this.updateForeground, this), this.model.on("change:background", this.updateBackground, this), this.model.get("background") || this.model.set({
                        background: [360, 100, 100, 0]
                    }), _.delay(this.toggleExposed, 1e3)
                },
                events: {
                    "click .expose": "toggleExposed",
                    "click .foreground, .background": "selectTile",
                    "click .bg": "setTileBg"
                },
                toggleExposed: function () {
                    return $(".color-tiles").toggleClass("exposed"), $(".slider").css("background-color", $(".color-tiles").is(".exposed") ? "transparent" : this.model.hslaStr(this.model.get("background"))), $(".foreground").trigger("click")
                },



                selectTile: function (e) {
                    var t;
                    t = $(e.currentTarget);
                    if (!t.is(".selected")) return this.model.set({
                        tile: t.data("name")
                    }), this.model.hsla(this.model.get(t.data("name"))), $(".selected").removeClass("selected"), t.addClass("selected")
                },
                setTileBg: function (e) {
                    var t, n;
                    return n = $(e.target), n.is(".random") ? (t = this.model.randomColor(), t[3] = this.model.get("a") || 1, this.model.hsla(t)) : this.model.hsla(n.data("color"))
                },
                updateForeground: function () {
                    return $(".foreground-color").css({
                        "background-color": this.model.hslaStr(this.model.get("foreground"))
                    })
                },
                updateHeader: function () {
                  return $(".header").css({
                    "background-color": this.model.hslaStr(this.model.get("header"))
                  })
                },
                updateBackground: function () {
                    return $(".background-color").css({
                        "background-color": this.model.hslaStr(this.model.get("background"))
                    })
                }
            }), n.exports = function (t) {
                return new e(t)
            }
        }).call(this)
    }
});

// Generated by CoffeeScript 1.3.3

/*
Color
=====

SassMe - an Arc90 Lab Project

The MIT License (MIT)
Copyright © 2012 Arc90 | http://arc90.com

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the “Software”), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

Authors:
--------

Jim Nielsen
Darren Newton
Robert Petro
Matt Quintanilla
Jesse Reiner

Color algorithms:
-----------------
RGB/HSL Algorithms adapted from: http://mjijackson.com/2008/02/rgb-to-hsl-and-
rgb-to-hsv-color-model-conversion-algorithms-in-javascript

Syntactically Awesome Stylesheets:
----------------------------------
The overall structure of the SASS conversions is based on the Ruby
SASS project:
https://github.com/nex3/sass/blob/stable/lib/sass/script/color.rb
Copyright (c) 2006-2009 Hampton Catlin, Nathan Weizenbaum, and Chris Eppstein
*/


(function() {
  var Color, root;

  root = typeof exports !== "undefined" && exports !== null ? exports : this;

  root.Color = Color = (function() {

    function Color(color) {
      this.hex = color.charAt(0) === "#" ? color : "#" + color;
      if (color != null) {
        this.rgb = this.hex2rgb(this.hex);
      }
      if (this.rgb != null) {
        this.hsl = this.rgb2hsl(this.rgb);
      }
      return this;
    }

    Color.prototype.hex2rgb = function(color) {
      var rgb;
      if (color.charAt(0) === '#') {
        color = color.substr(1);
      }
      return rgb = {
        r: parseInt(color.charAt(0) + '' + color.charAt(1), 16),
        g: parseInt(color.charAt(2) + '' + color.charAt(3), 16),
        b: parseInt(color.charAt(4) + '' + color.charAt(5), 16)
      };
    };

    Color.prototype.rgb2hsl = function(rgb) {
      var b, d, g, h, hsl, l, max, min, r, s, _ref;
      _ref = [rgb.r, rgb.g, rgb.b], r = _ref[0], g = _ref[1], b = _ref[2];
      r /= 255;
      g /= 255;
      b /= 255;
      max = Math.max(r, g, b);
      min = Math.min(r, g, b);
      d = max - min;
      h = (function() {
        switch (max) {
          case min:
            return 0;
          case r:
            return 60 * (g - b) / d;
          case g:
            return 60 * (b - r) / d + 120;
          case b:
            return 60 * (r - g) / d + 240;
        }
      })();
      if (h < 0) {
        h = 360 + h;
      }
      l = (max + min) / 2.0;
      s = max === min ? 0 : l < 0.5 ? d / (2 * l) : d / (2 - 2 * l);
      return hsl = {
        h: Math.abs((h % 360).toFixed(5)),
        s: (s * 100).toFixed(5),
        l: (l * 100).toFixed(5)
      };
    };

    Color.prototype.rgb2hex = function(rgb) {
      return "#" + ((1 << 24) + (rgb.r << 16) + (rgb.g << 8) + rgb.b).toString(16).slice(1);
    };

    Color.prototype.hue2rgb = function(p, q, t) {
      if (t < 0) {
        t += 1;
      }
      if (t > 1) {
        t -= 1;
      }
      if (t < 1 / 6) {
        return p + (q - p) * 6 * t;
      }
      if (t < 1 / 2) {
        return q;
      }
      if (t < 2 / 3) {
        return p + (q - p) * (2 / 3 - t) * 6;
      }
      return p;
    };

    Color.prototype.hsl2rgb = function(hsl) {
      var b, g, h, l, p, q, r, rgb, s, _ref;
      _ref = [parseFloat(hsl.h).toFixed(5) / 360, parseFloat(hsl.s).toFixed(5) / 100, parseFloat(hsl.l).toFixed(5) / 100], h = _ref[0], s = _ref[1], l = _ref[2];
      if (s === 0) {
        r = g = b = l;
      } else {
        q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        p = 2 * l - q;
        r = this.hue2rgb(p, q, h + 1 / 3);
        g = this.hue2rgb(p, q, h);
        b = this.hue2rgb(p, q, h - 1 / 3);
      }
      return rgb = {
        r: Math.round(r * 255),
        g: Math.round(g * 255),
        b: Math.round(b * 255)
      };
    };

    Color.prototype.hsl2hex = function(hsl) {
      return this.rgb2hex(this.hsl2rgb(hsl));
    };

    Color.prototype.mod = function(attr) {
      var hsl, out, rgb, type;
      if ((_.intersection(_.keys(attr), ['h', 's', 'l']).length > 0) && (_.intersection(_.keys(attr), ['r', 'g', 'b']).length > 0)) {
        return null;
      }
      if (_.intersection(_.keys(attr), ['r', 'g', 'b']).length > 0) {
        type = "rgb";
      } else if (_.intersection(_.keys(attr), ['h', 's', 'l']).length > 0) {
        type = "hsl";
      } else {
        return null;
      }
      _.each(attr, function(val, key, list) {
        if (val === null) {
          return delete list[key];
        }
      });
      switch (type) {
        case 'rgb':
          rgb = _.pick(attr, 'r', 'g', 'b');
          if (_.isEmpty(rgb) === false) {
            out = _.extend(_.clone(this.rgb), rgb);
          } else {
            out = this.rgb;
          }
          break;
        case 'hsl':
          hsl = _.pick(attr, 'h', 's', 'l');
          if (_.isEmpty(hsl) === false) {
            out = _.extend(_.clone(this.hsl), hsl);
          } else {
            out = this.hsl;
          }
      }
      return out;
    };

    Color.prototype.constrain = function(attr, amount, limit, direction) {
      var math, test, val;
      math = [attr, direction, amount].join(' ');
      val = eval(math);
      test = (limit[1] >= val && val >= limit[0]);
      if (test) {
        val;

      } else {
        if (val < limit[0]) {
          val = limit[0];
        }
        if (val > limit[1]) {
          val = limit[1];
        }
      }
      return Math.abs(val);
    };

    Color.prototype.constrain_degrees = function(attr, amount) {
      var val;
      val = attr + amount;
      if (val > 360) {
        val -= 360;
      }
      if (val < 0) {
        val += 360;
      }
      return Math.abs(val);
    };

    Color.prototype.red = function() {
      return this.rgb.r;
    };

    Color.prototype.green = function() {
      return this.rgb.g;
    };

    Color.prototype.blue = function() {
      return this.rgb.b;
    };

    Color.prototype.hue = function() {
      return this.hsl.h;
    };

    Color.prototype.saturation = function() {
      return this.hsl.s;
    };

    Color.prototype.lightness = function() {
      return this.hsl.l;
    };

    return Color;

  })();

}).call(this);
// Generated by CoffeeScript 1.3.3

/*
Transforms
==========

SassMe - an Arc90 Lab Project

The MIT License (MIT)
Copyright © 2012 Arc90 | http://arc90.com

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the “Software”), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

Authors:
--------

Jim Nielsen
Darren Newton
Robert Petro
Matt Quintanilla
Jesse Reiner

Syntactically Awesome Stylesheets:
----------------------------------

Structure of the color functions ported from SASS -
https://github.com/nex3/sass/blob/stable/lib/sass/script/functions.rb
Copyright (c) 2006-2009 Hampton Catlin, Nathan Weizenbaum, and Chris Eppstein
*/


(function() {
  var root;

  root = typeof exports !== "undefined" && exports !== null ? exports : this;

  root.Transforms = {
    lighten: function(color, percentage) {
      var hsl;
      hsl = color.mod({
        l: color.constrain(color.lightness(), percentage, [0, 100], '+')
      });
      return color.rgb2hex(color.hsl2rgb(hsl));
    },
    darken: function(color, percentage) {
      var hsl;
      hsl = color.mod({
        l: color.constrain(color.lightness(), percentage, [0, 100], '-')
      });
      return color.rgb2hex(color.hsl2rgb(hsl));
    },
    saturate: function(color, percentage) {
      var hsl;
      hsl = color.mod({
        s: color.constrain(color.saturation(), percentage, [0, 100], '+')
      });
      return color.rgb2hex(color.hsl2rgb(hsl));
    },
    desaturate: function(color, percentage) {
      var hsl;
      hsl = color.mod({
        s: color.constrain(color.saturation(), percentage, [0, 100], '-')
      });
      return color.rgb2hex(color.hsl2rgb(hsl));
    },
    adjust_hue: function(color, degrees) {
      var hsl;
      hsl = color.mod({
        h: color.constrain_degrees(color.hue(), degrees)
      });
      return color.rgb2hex(color.hsl2rgb(hsl));
    }
  };

}).call(this);
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
(function(){var lang=/\blang(?:uage)?-(?!\*)(\w+)\b/i;var _=self.Prism={util:{type:function(o){return Object.prototype.toString.call(o).match(/\[object (\w+)\]/)[1]},clone:function(o){var type=_.util.type(o);switch(type){case "Object":var clone={};for(var key in o)if(o.hasOwnProperty(key))clone[key]=_.util.clone(o[key]);return clone;case "Array":return o.slice()}return o}},languages:{extend:function(id,redef){var lang=_.util.clone(_.languages[id]);for(var key in redef)lang[key]=redef[key];return lang}, insertBefore:function(inside,before,insert,root){root=root||_.languages;var grammar=root[inside];var ret={};for(var token in grammar)if(grammar.hasOwnProperty(token)){if(token==before)for(var newToken in insert)if(insert.hasOwnProperty(newToken))ret[newToken]=insert[newToken];ret[token]=grammar[token]}return root[inside]=ret},DFS:function(o,callback){for(var i in o){callback.call(o,i,o[i]);if(_.util.type(o)==="Object")_.languages.DFS(o[i],callback)}}},highlightAll:function(async,callback){var elements= document.querySelectorAll('code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code');for(var i=0,element;element=elements[i++];)_.highlightElement(element,async===true,callback)},highlightElement:function(element,async,callback){var language,grammar,parent=element;while(parent&&!lang.test(parent.className))parent=parent.parentNode;if(parent){language=(parent.className.match(lang)||[,""])[1];grammar=_.languages[language]}if(!grammar)return;element.className= element.className.replace(lang,"").replace(/\s+/g," ")+" language-"+language;parent=element.parentNode;if(/pre/i.test(parent.nodeName))parent.className=parent.className.replace(lang,"").replace(/\s+/g," ")+" language-"+language;var code=element.textContent;if(!code)return;code=code.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ");var env={element:element,language:language,grammar:grammar,code:code};_.hooks.run("before-highlight",env);if(async&&self.Worker){var worker=new Worker(_.filename); worker.onmessage=function(evt){env.highlightedCode=Token.stringify(JSON.parse(evt.data),language);_.hooks.run("before-insert",env);env.element.innerHTML=env.highlightedCode;callback&&callback.call(env.element);_.hooks.run("after-highlight",env)};worker.postMessage(JSON.stringify({language:env.language,code:env.code}))}else{env.highlightedCode=_.highlight(env.code,env.grammar,env.language);_.hooks.run("before-insert",env);env.element.innerHTML=env.highlightedCode;callback&&callback.call(element);_.hooks.run("after-highlight", env)}},highlight:function(text,grammar,language){return Token.stringify(_.tokenize(text,grammar),language)},tokenize:function(text,grammar,language){var Token=_.Token;var strarr=[text];var rest=grammar.rest;if(rest){for(var token in rest)grammar[token]=rest[token];delete grammar.rest}tokenloop:for(var token in grammar){if(!grammar.hasOwnProperty(token)||!grammar[token])continue;var pattern=grammar[token],inside=pattern.inside,lookbehind=!!pattern.lookbehind,lookbehindLength=0;pattern=pattern.pattern|| pattern;for(var i=0;i<strarr.length;i++){var str=strarr[i];if(strarr.length>text.length)break tokenloop;if(str instanceof Token)continue;pattern.lastIndex=0;var match=pattern.exec(str);if(match){if(lookbehind)lookbehindLength=match[1].length;var from=match.index-1+lookbehindLength,match=match[0].slice(lookbehindLength),len=match.length,to=from+len,before=str.slice(0,from+1),after=str.slice(to+1);var args=[i,1];if(before)args.push(before);var wrapped=new Token(token,inside?_.tokenize(match,inside): match);args.push(wrapped);if(after)args.push(after);Array.prototype.splice.apply(strarr,args)}}}return strarr},hooks:{all:{},add:function(name,callback){var hooks=_.hooks.all;hooks[name]=hooks[name]||[];hooks[name].push(callback)},run:function(name,env){var callbacks=_.hooks.all[name];if(!callbacks||!callbacks.length)return;for(var i=0,callback;callback=callbacks[i++];)callback(env)}}};var Token=_.Token=function(type,content){this.type=type;this.content=content};Token.stringify=function(o,language, parent){if(typeof o=="string")return o;if(Object.prototype.toString.call(o)=="[object Array]")return o.map(function(element){return Token.stringify(element,language,o)}).join("");var env={type:o.type,content:Token.stringify(o.content,language,parent),tag:"span",classes:["token",o.type],attributes:{},language:language,parent:parent};if(env.type=="comment")env.attributes["spellcheck"]="true";_.hooks.run("wrap",env);var attributes="";for(var name in env.attributes)attributes+=name+'="'+(env.attributes[name]|| "")+'"';return"<"+env.tag+' class="'+env.classes.join(" ")+'" '+attributes+">"+env.content+"</"+env.tag+">"};if(!self.document){self.addEventListener("message",function(evt){var message=JSON.parse(evt.data),lang=message.language,code=message.code;self.postMessage(JSON.stringify(_.tokenize(code,_.languages[lang])));self.close()},false);return}var script=document.getElementsByTagName("script");script=script[script.length-1];if(script){_.filename=script.src;if(document.addEventListener&&!script.hasAttribute("data-manual"))document.addEventListener("DOMContentLoaded", _.highlightAll)}})(); Prism.languages.markup={"comment":/&lt;!--[\w\W]*?--\x3e/g,"prolog":/&lt;\?.+?\?>/,"doctype":/&lt;!DOCTYPE.+?>/,"cdata":/&lt;!\[CDATA\[[\w\W]*?]]\x3e/i,"tag":{pattern:/&lt;\/?[\w:-]+\s*(?:\s+[\w:-]+(?:=(?:("|')(\\?[\w\W])*?\1|\w+))?\s*)*\/?>/gi,inside:{"tag":{pattern:/^&lt;\/?[\w:-]+/i,inside:{"punctuation":/^&lt;\/?/,"namespace":/^[\w-]+?:/}},"attr-value":{pattern:/=(?:('|")[\w\W]*?(\1)|[^\s>]+)/gi,inside:{"punctuation":/=|>|"/g}},"punctuation":/\/?>/g,"attr-name":{pattern:/[\w:-]+/g,inside:{"namespace":/^[\w-]+?:/}}}}, "entity":/&amp;#?[\da-z]{1,8};/gi};Prism.hooks.add("wrap",function(env){if(env.type==="entity")env.attributes["title"]=env.content.replace(/&amp;/,"&")});Prism.languages.css={"comment":/\/\*[\w\W]*?\*\//g,"atrule":{pattern:/@[\w-]+?.*?(;|(?=\s*{))/gi,inside:{"punctuation":/[;:]/g}},"url":/url\((["']?).*?\1\)/gi,"selector":/[^\{\}\s][^\{\};]*(?=\s*\{)/g,"property":/(\b|\B)[\w-]+(?=\s*:)/ig,"string":/("|')(\\?.)*?\1/g,"important":/\B!important\b/gi,"ignore":/&(lt|gt|amp);/gi,"punctuation":/[\{\};:]/g}; if(Prism.languages.markup)Prism.languages.insertBefore("markup","tag",{"style":{pattern:/(&lt;|<)style[\w\W]*?(>|&gt;)[\w\W]*?(&lt;|<)\/style(>|&gt;)/ig,inside:{"tag":{pattern:/(&lt;|<)style[\w\W]*?(>|&gt;)|(&lt;|<)\/style(>|&gt;)/ig,inside:Prism.languages.markup.tag.inside},rest:Prism.languages.css}}}); Prism.languages.clike={"comment":{pattern:/(^|[^\\])(\/\*[\w\W]*?\*\/|(^|[^:])\/\/.*?(\r?\n|$))/g,lookbehind:true},"string":/("|')(\\?.)*?\1/g,"class-name":{pattern:/((?:class|interface|extends|implements|trait|instanceof|new)\s+)[a-z0-9_\.\\]+/ig,lookbehind:true,inside:{punctuation:/(\.|\\)/}},"keyword":/\b(if|else|while|do|for|return|in|instanceof|function|new|try|catch|finally|null|break|continue)\b/g,"boolean":/\b(true|false)\b/g,"function":{pattern:/[a-z0-9_]+\(/ig,inside:{punctuation:/\(/}}, "number":/\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee]-?\d+)?)\b/g,"operator":/[-+]{1,2}|!|=?&lt;|=?&gt;|={1,2}|(&amp;){1,2}|\|?\||\?|\*|\/|\~|\^|\%/g,"ignore":/&(lt|gt|amp);/gi,"punctuation":/[{}[\];(),.:]/g};Prism.languages.javascript=Prism.languages.extend("clike",{"keyword":/\b(var|let|if|else|while|do|for|return|in|instanceof|function|new|with|typeof|try|catch|finally|null|break|continue)\b/g,"number":/\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee]-?\d+)?|NaN|-?Infinity)\b/g}); Prism.languages.insertBefore("javascript","keyword",{"regex":{pattern:/(^|[^/])\/(?!\/)(\[.+?]|\\.|[^/\r\n])+\/[gim]{0,3}(?=\s*($|[\r\n,.;})]))/g,lookbehind:true}});if(Prism.languages.markup)Prism.languages.insertBefore("markup","tag",{"script":{pattern:/(&lt;|<)script[\w\W]*?(>|&gt;)[\w\W]*?(&lt;|<)\/script(>|&gt;)/ig,inside:{"tag":{pattern:/(&lt;|<)script[\w\W]*?(>|&gt;)|(&lt;|<)\/script(>|&gt;)/ig,inside:Prism.languages.markup.tag.inside},rest:Prism.languages.javascript}}}); (function(){if(!self.Prism||(!self.document||!document.querySelector))return;var Extensions={"js":"javascript","html":"markup","svg":"markup"};Array.prototype.slice.call(document.querySelectorAll("pre[data-src]")).forEach(function(pre){var src=pre.getAttribute("data-src");var extension=(src.match(/\.(\w+)$/)||[,""])[1];var language=Extensions[extension]||extension;var code=document.createElement("code");code.className="language-"+language;pre.textContent="";code.textContent="Loading\u2026";pre.appendChild(code); var xhr=new XMLHttpRequest;xhr.open("GET",src,true);xhr.onreadystatechange=function(){if(xhr.readyState==4)if(xhr.status<400&&xhr.responseText){code.textContent=xhr.responseText;Prism.highlightElement(code)}else if(xhr.status>=400)code.textContent="\u2716 Error "+xhr.status+" while fetching file: "+xhr.statusText;else code.textContent="\u2716 Error: File does not exist or is empty"};xhr.send(null)})})(); Prism.languages.scss=Prism.languages.extend("css",{comment:{pattern:/(^|[^\\])(\/\*[\w\W]*?\*\/|\/\/.*?(\r?\n|$))/g,lookbehind:!0},atrule:/@[\w-]+(?=\s+(\(|\{|;))/gi,url:/([-a-z]+-)*url(?=\()/gi,selector:/([^@;\{\}\(\)]?([^@;\{\}\(\)]|&amp;|\#\{\$[-_\w]+\})+)(?=\s*\{(\}|\s|[^\}]+(:|\{)[^\}]+))/gm});Prism.languages.insertBefore("scss","atrule",{keyword:/@(if|else if|else|for|each|while|import|extend|debug|warn|mixin|include|function|return)|(?=@for\s+\$[-_\w]+\s)+from/i}); Prism.languages.insertBefore("scss","property",{variable:/((\$[-_\w]+)|(#\{\$[-_\w]+\}))/i});Prism.languages.insertBefore("scss","ignore",{placeholder:/%[-_\w]+/i,statement:/\B!(default|optional)\b/gi,"boolean":/\b(true|false)\b/g,"null":/\b(null)\b/g,operator:/\s+([-+]{1,2}|={1,2}|!=|\|?\||\?|\*|\/|\%)\s+/g});



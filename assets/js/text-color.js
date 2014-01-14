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



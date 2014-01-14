
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
    var classes = ['bg-base00','bg-base01','bg-base02','bg-base03','bg-base04','bg-base05','bg-base06', 'bg-base07','bg-base16-yellow','bg-base16-orange','bg-base16-red','bg-base16-magenta','bg-base16-violet','bg-base16-blue','bg-base16-cyan','bg-base16-green', 'bg-transparent',];
    this.className = classes[($.inArray(this.className, classes)+1)%classes.length];
  });
});

});


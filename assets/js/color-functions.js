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
  $('#wrapper').removeClass("is-not-toggled");
  $('#wrapper').addClass("is-toggled");
});

$('#btnTint').on('click', function() {
  $('#wrapper').toggleClass("is-tinted");
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
  $('#wrapper').removeClass("is-toggled");
  $('#wrapper').addClass("is-not-toggled");
});

});


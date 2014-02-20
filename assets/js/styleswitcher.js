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
  $(".switchto-ctiles16-shapeshifter").click(function(){$("#stylesheet").attr("href","../assets/css/ctiles16-shapeshifter.css");return false});
  $(".switchto-ctiles16-solarized").click(function(){$("#stylesheet").attr("href","../assets/css/ctiles16-solarized.css");return false});
  $(".switchto-ctiles16-tomorrow").click(function(){$("#stylesheet").attr("href","../assets/css/ctiles16-tomorrow.css");return false});
  $(".switchto-ctiles16-kitchen").click(function(){$("#stylesheet").attr("href","../assets/css/ctiles16-kitchen.css");return false});
  $(".switchto-ctiles16-studio").click(function(){$("#stylesheet").attr("href","../assets/css/ctiles16-studio.css");return false});
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

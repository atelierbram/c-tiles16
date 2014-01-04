# c-Tiles16

Colorscheming with Variables

## Introduction
It’ s one thing two have color variables declared on top of your Sass/Less/Stylus stylesheet. It’ s another thing to use them in an intuitive and meaningfull way in your designs. That’s  where c-Tiles16 comes in to help out. There are two parts:

1.  A build script named `ctiles16`, that is a fork of [Base16](https://github.com/chriskempson/base16-builder), and can be executed from the terminal/commandline, and generates preprocessor variables to be used by Sass, Less, or Stylus

2. A [colorscheming test playground](http://atelierbram.github.io/c-tiles16/colorscheming) that is assembled to have the best colorscheming tools, alongside colorscheme-tiles **on one webpage**-test-playground, making it convenient to create your own colorscheme, with sixteen variables

## Getting started
A possible way to make this tool, or rather collection-of-tools, your own can be:

* download the [zip-file](https://github.com/atelierbram/c-tiles16/archive/master.zip), or clone the [the repo](https://github.com/atelierbram/c-tiles16) to your own computer
* when using Sass, open `assets/sass/ctiles16-custom.scss` (which is a copy of `ctiles16-ctiles.scss`) in a text-editor. Don’t rename it just yet, but:
* (this works best full screen) start editing the values of the variables with the text-editor on one side, and the browser-window with the test colorscheming playground (`colorscheming/index.html`) on the other side of your screen
* play with the hsl-picker to help you get along
* try some live editing with the hidden styles at the top
* from the dropdown-menu you can pick and see how other colorschemes look.
* there’s a button for toggling the page background-color, but you can also hover with your mouse over the colortiles
* refresh the colorschemer-webpage after each time you edit your `ctiles16-custom.scss`-colorscheme-variables file (or use something like LiveReload)
* refresh the page after each edit (or use something like LiveReload)
* When following the workflow above, you have been using [c-Tiles16](http//atelierbram.github.io/c-tiles16) to make a colorscheme made out of sixteen colors</li>

## Development

* Now put the colorscheme you just made as one of the first partial files to import in the `_base-partial` file (the one that is included throughout the whole project)
* Keep using the colorschermer any time you like to generate color-values during the design phase of the website
* One can make it a personal challenge to only use the colorscheme values, or variations of those with Sass color-functions
* BTW: You can als try to make a pull request on Github in order to submit your colorscheme to this collection here on c-Tiles16

## Usage of buildtool

Since c-Tiles16 is a fork of Base16-builder, you can [look it up on Github](https://github.com/chriskempson/base16-builder) for more information.

Easily build color variations of Base16 with YAML scheme definitions and ERB templates.
Requires Ruby 1.9 or greater.

go in the terminal to `c-tiles/schemes/`
```bash
cd  c-tiles/schemes/
```

To build all schemes:
```bash
../ctiles16
```
Build only the ‘default’ theme
```bash
    > ../ctiles16 default.yml
```

Build a scheme stored on some webspace.
```bash
./ctiles16 https://awesome-schemes.com/my-scheme.yml
```

## Credits

* [Base16 Builder](https://github.com/chriskempson/base16-builder) by [Chris Kempson](http://chriskempson.com/)
* [HSL Color Picker](http://hslpicker.com/) by [Brandon Mathis](http://brandonmathis.com)
* [SassMe](http://sassme.arc90.com/) by [Arc90](http://arc90.com)

## Resources

* [Prism](http://prismjs.com/) by [Lea Verou](http://lea.verou.me)
* [Sass Prism](https://github.com/MoOx/sass-prism-theme-base) base theme by [Maxime Thirouin](http://moox.io/)
* [Formalize](http://formalize.me/) by [Nathan Smith](http://sonspring.com/)
* [long dropdown menu](http://codepen.io/larrygeams/pen/feoDc) by [Chris Coyier](http://css-tricks.com/long-dropdowns-solution/) and [Geams](http://larrygeams.comze.com/)
* [lightweight accordion](http://wordimpress.com/super-lightweight-jquery-website-accordions-without-a-plugin/) by [Devin Walker](http://wordimpress.com/author/wordimpressadmin/)

### License

Copyright (c) 2013 [Bram de Haan](http://atelierbramdehaan.nl/)

Released under [MIT Licence](http://atelierbram.mit-license.org)




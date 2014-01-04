# Require any additional compass plugins here.

# https://github.com/ai/autoprefixer
require 'autoprefixer-rails'
require 'csso'

on_stylesheet_saved do |file|
  css = File.read(file)
  File.open(file, 'w') do |io|
     io << Csso.optimize( AutoprefixerRails.compile(css) )
  end
end

# Set this to the root of your project when deployed:
http_path = "/"
css_dir = "assets/css"
sass_dir = "assets/sass"
images_dir = "assets/img"
javascripts_dir = "assets/js"
fonts_dir = "type"

# output_style = :expanded

# To enable relative paths to assets via compass helper functions. Uncomment:
# relative_assets = true

# To disable debugging comments that display the original location of your selectors. Uncomment:
# line_comments = false
# color_output = false


# If you prefer the indented syntax, you might want to regenerate this
# project again passing --syntax sass, or you can uncomment this:
# preferred_syntax = :sass
# and then run:
# sass-convert -R --from scss --to sass css scss && rm -rf sass && mv scss sass

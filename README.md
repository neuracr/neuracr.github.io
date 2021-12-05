# Development setup installation
To develop new features, it's nice to work on a local devserver. This project uses jekyll to generate the static webpages and npm/TS/rollup to bundle the Javascript. If you just want to work on the HTML/CSS/jekyll part of the project, you just need to install jekyll. If you want to also work on the scripts, you will also need to install npm and the dependencies.

## Ubuntu and co.

### Jekyll
Follow https://en.terminalroot.com.br/how-to-properly-install-ruby-bundler-and-jekyll-on-ubuntu-linux/ to install ruby and jekyll. You will need ruby 2.x.x for jekyll to work with github pages. That's why I recommend installing ruby through rvm (the ruby version manager) to easily switch between ruby versions.   

Once you have ruby installed, clone the repo, move to the `docs/` directory and run `bundle install`. bundle should detect that you are in a ruby directory and install the correct dependencies. Then test that jekyll is working with `bundle exec jekyll serve --config _config.yml,_config_dev.yml`. This should start the local dev server. Try to nagivate to the shown url to see the blog.

### Javascript
1. Install npm with you favourite tutorial.  
2. Move to `docs/ts/` and run `npm i` to install the node dependencies.
3. Test that everything works with `npm run buildnwatch`

## Windows

### Jekyll

Adapted from https://jekyllrb.com/docs/installation/windows/
1. Download ruby and devkit 2.x.x from https://rubyinstaller.org/downloads/. At the time of writing, this is Ruby+Devkit 2.7.5-1 (x64) 
2. Install it and keep the `ridk install` box ticked. When asked, install the #3 option in the prompt
3. clone the repo, move to the `docs/` directory and run `bundle install`. bundle should detect that you are in a ruby directory and install the correct dependencies. 
4. Test that jekyll is working with `bundle exec jekyll serve --config _config.yml,_config_dev.yml`. This should start the local dev server. Try to nagivate to the shown url to see the blog.

### Javascript

Same as for ubuntu (see above)

# Starting the dev servers

- Watch the ts code and rebundle when their is a change: `cd docs/ts && npm buildnwatch`
- Jekyll devserver in watch mode `cd docs && bundle exec jekyll serve --config _config.yml,_config_dev.yml`

With these 2 commands in parallel, you can work on the site and see your changes without manually running extra commands.  
The ts code is transpiled to js, bundled and minified but the sourcemap to the ts code is
served when using the development server.

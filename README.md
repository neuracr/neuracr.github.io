## Development

- Watch the ts code and rebundle when their is a change: `cd docs/ts && npm buildnwatch`
- Jekyll devserver in watch mode `cd docs && bundle exec jekyll serve --config config.yml,config_dev.yml`

With these 2 commands in parallel, you can work on the site and see your changes without manually running extra commands.  
The ts code is transpiled to js, bundled and minified but the sourcemap to the ts code is
served when using the development server.

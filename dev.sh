#!/bin/bash

# Watch and build the TS files in the backgound
cd docs/ts && npm run buildnwatch &

# Start the jekyll devserver
# The dev config overloads the prod config and makes jekyll serve the ts 
# source files for better debugging experience with the sourcemaps.
cd docs && bundle exec jekyll serve --config config.yml,config_dev.yml

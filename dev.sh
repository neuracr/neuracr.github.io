#!/bin/bash

# Watch and build the TS files in the backgound
cd ts && npm run build_dev &

# Start the jekyll devserver
cd docs && bundle exec jekyll serve 
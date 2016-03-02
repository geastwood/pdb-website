#!/usr/bin/env bash

cp semantic/dist/semantic.min.css public/stylesheets/
mkdir -p public/stylesheets/themes
cp -R semantic/dist/themes/* public/stylesheets/themes/
cp semantic/dist/semantic.min.js public/javascripts

#!/usr/bin/env /bin/bash
set -e # halt script on error

yarn build

rm -rf node_modules/gh-pages/.cache

.\\node_modules\\.bin\\gh-pages -d build
#!/bin/sh

./scripts/dr.sh

# =============================================
# Clear build directory
# =============================================

if [ ! -d build ];
then
   { echo "[INFO]   Cannot find build dir, continuing..."; }
else
   rm -rf build
   { echo "[INFO]   Deleted build dir, continuing..."; }
fi


# =============================================
# Start webpack
# =============================================
open -a "/Applications/Google Chrome.app" http://localhost:8080/webpack-dev-server

command -v webpack-dev-server >/dev/null 2>&1 || { echo >&2 "[ERROR]   webpack-dev-server required but not installed. Aborting."; exit 1; }
webpack-dev-server --content-base build/ --config build.webpack.js --progress

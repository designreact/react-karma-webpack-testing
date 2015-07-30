./scripts/capella.sh

# =============================================
# Clear build directory
# =============================================

if [ ! -d dist ];
then
   { echo "[INFO]   Cannot find dist dir, continuing..."; }
else
   rm -rf dist
   { echo "[INFO]   Deleted dist dir, continuing..."; }
fi

# =============================================
# Start webpack
# =============================================
command -v webpack >/dev/null 2>&1 || { echo >&2 "[ERROR]   webpack required but not installed. Aborting."; exit 1; }
NODE_ENV=production webpack --config build.webpack.js --progress -p
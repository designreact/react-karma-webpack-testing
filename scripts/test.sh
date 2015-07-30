./scripts/capella.sh

# =============================================
# Start karma
# =============================================
command -v karma >/dev/null 2>&1 || { echo >&2 "[ERROR]   karma required but not installed. Aborting."; exit 1; }
karma start
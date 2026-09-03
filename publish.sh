#!/bin/bash
# Run this after Claude tells you there are new changes to push.
set -e
git add -A
git commit -m "Update site $(date '+%Y-%m-%d %H:%M')" || echo "Nothing to commit."
git push origin main
echo "Pushed. Netlify will redeploy automatically."

mv dist/bundle.js dist/currentBundle.js
npm run build
diff --brief <(sort ./dist/bundle.js) <(sort ./dist/currentBundle.js) >/dev/null
comp_value=$?

if [ $comp_value -eq 1 ]
then
  echo "build not up to date or tampered with. please run \"npm run build\""
  exit 1
else
  echo "build ok"
  exit 0
fi

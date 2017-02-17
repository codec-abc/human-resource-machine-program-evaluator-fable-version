# HMRP Evaluator Fable

## Dependencies
NPM
Fable

## Install fable
```
npm install
```

## Compile And Run

### Compile

```bash
fable -s -o output hmrpEvaluator.fsproj
node ./node_modules/webpack/bin/webpack.js output/main.js output/bundle.js
```

### Run

Once compile open output/index.html

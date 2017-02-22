# HMRP Evaluator Fable

## Dependencies
* Nodejs and NPM
* Fable own dependencies (F# 4.0 and node 4.4) see Fable site for more information

## Install dependencies
```bash
npm install -g fable-compiler
npm install -g webpack
npm install
```

## Compile And Run

### Compile

```bash
fable
webpack
```

### Run

Once compiled open public/index.html

### To Auto Compile/WebPack/Reload on save

```
fable -w
webpack -w
live-server # (you need to run at least once: npm install -g live-server)
```
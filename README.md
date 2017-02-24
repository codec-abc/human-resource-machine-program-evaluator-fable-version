# HMRP Evaluator Fable

This repository contains all the code necessary to build a simple application based on web technologies to evaluate Human Resource Machine programs.

[Human Resource Machine](http://tomorrowcorporation.com/humanresourcemachine) is a fun game about assembly programming with a human taking the role of the CPU.

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
fable ./src/evaluator/hmrpEvaluator.fsx --outDir ./output && webpack --config webpack.config.webWorker.js
fable
webpack
```

### Run

Once compiled open public/index.html

### To Auto-Compile/WebPack/Reload on save

Run only the first time 
```bash
npm install -g live-server
```

Then in a different terminal for each command 

```
fable -w
webpack -w
live-server
```

## Useful links

* [Fable](https://github.com/fable-compiler/)
* [Fable-Arch](http://fable.io/fable-arch/#/sample/hello-world)

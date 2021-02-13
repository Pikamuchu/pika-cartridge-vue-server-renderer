# Cartridge lib vue-server-renderer

[![Version](https://img.shields.io/npm/v/cartridge_lib_vue-server-renderer.svg)](https://npmjs.org/package/cartridge_lib_vue-server-renderer)
[![Build Status](https://travis-ci.com/pikamachu/pika-cartridge-vue-server-renderer.svg?branch=main)](https://travis-ci.com/pikamachu/pika-cartridge-vue-server-renderer)
[![codecov](https://codecov.io/gh/pikamachu/pika-cartridge-vue-server-renderer/branch/main/graph/badge.svg)](https://codecov.io/gh/pikamachu/pika-cartridge-vue-server-renderer)

## Introduction

Cartridge library from [vue-server-renderer](https://www.npmjs.com/package/vue-server-renderer) npm  node module version 2.6.12

## Build with

* [vue](https://www.npmjs.com/package/vue)
* [vue-server-renderer](https://www.npmjs.com/package/vue-server-renderer)
* [Generator Cartridge Lib Module](https://www.npmjs.com/package/generator-cartridge-lib-module)

## Installation

### As standard SFCC cartridge

This library can be installed as a standard SFRA cartridge cloning the repository and running npm script uploadCartridge

````
$ git clone git@github.com:pikamachu/pika-cartridge-vue-server-renderer.git
$ cd pika-cartridge-vue-server-renderer
$ npm run uploadCartridge
````

### As npm library dependency on SFRA project

This library can be added to an existing SFRA project as npm library dependency using

````
$ npm i cartridge_lib_vue_server_renderer
````

This option is recommended for develop environments using [vscode](https://code.visualstudio.com/) + [Prophet Debugger](https://marketplace.visualstudio.com/items?itemName=SqrTT.prophet)

The Prophet Debugger Extension should be set with this configuration on user settings.json
````
"extension.prophet.upload.enabled": true,
"extension.prophet.ignore.list": ["\\.git", "\\.zip$"],
````

## Usage

This cartridge library is a babel transpilation to ES5 with some minor changes in order to be usable as a standard SFRA cartridge.

The vue-server-renderer module can be loaded using require cartridge as a standard SFRA script.

````
var vue-server-renderer = require('*/cartridge/scripts/lib/vue-server-renderer/index');
````

See [vue-server-renderer](https://www.npmjs.com/package/vue-server-renderer) documentation for module usage.

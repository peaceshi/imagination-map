<!--
 * LastEditors   peaceshi
 * LastEditTime  2020-11-10 19:22:08
 * @author       peaceshi <peaceshi@outlook.com>
 * @description
-->

# project initiation

## set your user name and email

You should use [koroFileHeader](https://marketplace.visualstudio.com/items?itemName=OBKoro1.korofileheader) and set `LastEditors` in your global settings.

```json
// your global settings file
"fileheader.customMade": {
    "LastEditors": "your name",
  }
```

## node environment

This project will always use latest node-lts.

## install dev dependencies

Please do not use yarn and make sure you have native c++ build system if you find any error.

<https://github.com/yarnpkg/yarn/pull/7533>

- npm

```npm
 npm i -D .......
```

- some plugin has bug make sure install `"eslint-plugin-react": "7.11.1"` with `--save-exact`

## install react (pika for vite support)

- About ESM support
  <https://github.com/facebook/react/issues/11503>

  <https://github.com/snowpackjs/react/blob/master/README.md>

```npm
 npm i -S @pika/react @pika/react-dom
 npm i -D @types/react @types/react-dom
```

## install vite and vite-plugin-react

```npm
 npm i -D vite vite-plugin-react
```

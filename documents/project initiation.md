# project initiation

## node environment

This project will always use latest node-lts. (now v14.15.1)

```sh
$ node -v
v14.15.1
```

## package manager

This project use **npm** as package manager for some reason.

## Commitlint

```js
[
  "build", // new release build
  "ci", // ci config/update/test
  "chore", // build tools/config change
  "docs", // documents change
  "feat", // new feature branch/code
  "fix", // fix code bug.
  "refactor", // rewrite **existed** feature
  "revert", // git revert
  "style", // lint style
  "test" // test cases
];
```

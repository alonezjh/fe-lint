# fe-lint

前端项目代码规范校验配置集，包含 `eslint` 、`stylelint` 、`prettier` 相关配置

> 该模块依赖于 [`@umijs/fabric `](https://github.com/umijs/fabric)

## Install

```bash
yarn add @iyuefe-lint -D
# or
npm install @iyuefe-lint --save-dev
```

## Useage

### `eslint` 配置

在项目根目录下创建 `.eslintrc.js` 文件

```bash
touch .eslintrc.js
```

写入内容

```js
module.exports = {
  extends: [require.resolve('@iyue/fe-lint/dist/eslint')]
};
```

### `stylelint` 配置

在项目根目录下创建 `.stylelintrc.js` 文件

```bash
touch .stylelintrc.js
```

写入内容

```js
module.exports = {
  extends: [require.resolve('@iyue/fe-lint/dist/stylelint')]
};
```

### `prettier` 配置

在项目根目录下创建 `.prettierrc.js` 文件

```bash
touch .prettierrc.js
```

写入内容

```js
const { prettier } = require('@iyue/fe-lint');

module.exports = {
  ...prettier,
};
```

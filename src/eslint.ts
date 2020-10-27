import * as path from 'path';
import * as fs from 'fs';

let parserOptions: {
  tsconfigRootDir?: string;
  project?: string;
  createDefaultProgram?: boolean;
} = {
  project: './tsconfig.json',
};

if (!fs.existsSync(path.join(process.env.PWD || '.', './tsconfig.json'))) {
  parserOptions = {
    tsconfigRootDir: __dirname,
    project: './tsconfig.json',
    createDefaultProgram: true,
  };
}

module.exports = {
  extends: [require.resolve('@umijs/fabric/dist/eslint')],
  env: {
    browser: true,
    node: true,
    es6: true,
    mocha: true,
    jest: true,
  },
  globals: {
    APP_ENV: true,
    API_BASE: true,
    SENTRY: true,
  },
  rules: {
    // 强制语句有分号结尾
    semi: [2, 'always'],
    // 强制使用单引号
    quotes: [2, 'single'],
    // jsx属性中强制使用双引号
    'jsx-quotes': [2, 'prefer-double'],
    // 允许使用console.log
    'no-console': 0,
    // 禁止在jsx对象引用括号里两边加空格
    'react/jsx-curly-spacing': [2, 'never'],
    // 操作符前后必须有空格
    'space-infix-ops': 2,
    // 对象字面量中冒号前面禁止有空格，后面必须有空格
    'key-spacing': 2,
    // 对象内首尾必须空格
    'object-curly-spacing': 2,
    // if, function 等的大括号之前必须要有空格
    'space-before-blocks': 2,
    // 箭头函数前后必须有空格
    'arrow-spacing': 2,
    // 禁止多余的空格
    'no-multi-spaces': 2,
    // 禁止代码行结束后面有多余空格
    'no-trailing-spaces': 2,
    // 禁止多余空行
    'no-multiple-empty-lines': 2,
    // 允许标识符中使用悬空下划线
    'no-underscore-dangle': 0,
    'consistent-return': 0,
    'import/no-extraneous-dependencies': 0,
    'no-unused-expressions': 0,
    'no-restricted-syntax': 0,
    'no-nested-ternary': 0,
    'no-shadow': 0,
    'no-param-reassign': 0,
    '@typescript-eslint/naming-convention': 0,
    '@typescript-eslint/no-unused-expressions': 0,
  },
  settings: {
    'import/resolver': { node: { extensions: ['.js', '.jsx', '.ts', '.tsx', '.d.ts'] } },
    polyfills: ['fetch', 'Promise', 'URL', 'object-assign'],
  },
  parserOptions,
};

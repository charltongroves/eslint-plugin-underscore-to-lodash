# eslint-plugin-underscore-to-lodash

Helps migrate a large codebase from underscore to lodash

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-underscore-to-lodash`:

```
$ npm install eslint-plugin-underscore-to-lodash --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-underscore-to-lodash` globally.

## Usage

Add `underscore-to-lodash` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "underscore-to-lodash"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "underscore-to-lodash/prefer-import-lodash": 2
    }
}
```

## Supported Rules

**prefer-import-lodash**
Lints when you have imported underscore instead of lodash.
This is very handy for a large codebase migration, as it means all new files will have to use lodash, and existing underscore ones can be slowly migrated over.







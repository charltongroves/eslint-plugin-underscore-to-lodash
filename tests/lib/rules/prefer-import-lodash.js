/**
 * @fileoverview Prefers the import of lodash rather than the import of underscore
 * @author Charlton Groves
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/prefer-import-lodash")

const RuleTester = require("eslint").RuleTester;

RuleTester.setDefaultConfig({
  parserOptions: {
    "sourceType": "module",
    ecmaVersion: 6,
    ecmaFeatures: {
      "modules": true
    }
  }
})

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------
const ERROR_MSG = "Underscore is being deprecated from this codebase, please use lodash"
var ruleTester = new RuleTester();

ruleTester.run("prefer-import-lodash", rule, {
    valid: [
      {
        code: 'import _ from "lodash"'
      },
      {
        code: 'import { noop } from "lodash"'
      },
    ],

    invalid: [
        {
            code: 'import _ from "underscore"',
            errors: [{
                message: ERROR_MSG,
                type: "Literal"
            }]
        },
        {
            code: 'import { noop } from "underscore"',
            errors: [{
                message: ERROR_MSG,
                type: "Literal"
            }]
        }
    ]
});

/**
 * @fileoverview Prefers the import of lodash rather than the import of underscore
 * @author Charlton Groves
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "Prefers the import of lodash rather than the import of underscore",
            category: "Fill me in",
            recommended: false
        },
        fixable: null,  // or "code" or "whitespace"
        schema: [
            // fill in your schema
        ]
    },

    create: function(context) {

        // variables should be defined here

        //----------------------------------------------------------------------
        // Helpers
        //----------------------------------------------------------------------

        // any helper functions should go here or else delete this section

        //----------------------------------------------------------------------
        // Public
        //----------------------------------------------------------------------

        return {
          ImportDeclaration(node) {
            const source = node.source
            if (node.source.value === "underscore") {
              context.report({
                node: source,
                message: 'Underscore is being deprecated from this codebase, please use lodash',
                type: "Literal",
              });
            }
          }
        }
    }
};

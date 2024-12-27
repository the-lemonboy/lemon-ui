import * as eslint from 'eslint';
import { Linter } from 'eslint';

declare const _default: {
    parserPlain: eslint.ESLint.ObjectMetaProperties & {
        parseForESLint(text: string, options?: any): Linter.ESLintParseResult;
    };
    rules: {
        prettier: {
            meta: {
                type: "layout";
                docs: {
                    description: string;
                    category: string;
                };
                fixable: "whitespace";
                schema: {
                    type: "object";
                    properties: {
                        parser: {
                            type: "string";
                            required: true;
                        };
                    };
                    additionalProperties: true;
                }[];
                messages: {
                    insert: string;
                    delete: string;
                    replace: string;
                };
            };
            create(context: eslint.Rule.RuleContext): {
                Program(): void;
            };
        };
        dprint: {
            meta: {
                type: "layout";
                docs: {
                    description: string;
                    category: string;
                };
                fixable: "whitespace";
                schema: {
                    type: "object";
                    properties: {
                        language: {
                            type: "string";
                            required: true;
                        };
                        languageOptions: {
                            type: "object";
                        };
                    };
                    additionalProperties: true;
                }[];
                messages: {
                    insert: string;
                    delete: string;
                    replace: string;
                };
            };
            create(context: eslint.Rule.RuleContext): {
                Program(): void;
            };
        };
    };
};

export { _default as default };

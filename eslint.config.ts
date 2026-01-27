import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import prettier from "eslint-plugin-prettier";

export default tseslint.config(js.configs.recommended, ...tseslint.configs.recommended, {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
    plugins: {
        prettier,
    },
    languageOptions: {
        globals: globals.browser,
    },
    rules: {
        "prettier/prettier": "error",
    },
});

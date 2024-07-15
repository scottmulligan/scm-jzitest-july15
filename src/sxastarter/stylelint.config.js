module.exports = {
  extends: ["stylelint-config-standard-scss"],
  plugins: ["stylelint-scss"],
  rules: {
    "no-descending-specificity": null,
    "no-empty-source": null,
    "no-invalid-position-at-import-rule": null,
    "scss/load-no-partial-leading-underscore": null,
    "scss/dollar-variable-pattern": null,
    "scss/at-extend-no-missing-placeholder": null,
    "scss/no-global-function-names": null,
    "selector-class-pattern": null,
    "property-no-vendor-prefix": null,
    "value-no-vendor-prefix": null,
    "media-feature-range-notation": null,
    "declaration-block-no-redundant-longhand-properties": null,
    "color-function-notation": null,
    "font-family-no-missing-generic-family-keyword": null,
    "length-zero-no-unit": null
  },
};

const config = require('@0x1461a0/cz-config')

const LINT_LEVEL = {
  DISABLED: 0,
  WARNING: 1,
  ERROR: 2,
}

const LINT_APPLICABLE = {
  ALWAYS: 'always',
  NEVER: 'never',
}

const types = config.$types
  .map(([icon, type]) => [type, `${icon}${type}`])
  .flat()


module.exports = {
  parserPreset: {
    parserOpts: {
      headerPattern: /^(?<type>((?::\w+:|(?:\ud83c[\udf00-\udfff])|(?:\ud83d[\udc00-\ude4f\ude80-\udeff])|[\u2600-\u2B55]))?\s?\w*)(?:\((?<scope>.*)\))?!?:\s(?<subject>(?:(?!#).)*(?:(?!\s).))(?:\s\(?(?<ticket>#\d*)\)?)?$/,
      headerCorrespondence: ['type', 'scope', 'subject', 'ticket'],
    }
  },
  rules: {
    'type-enum': [
      LINT_LEVEL.ERROR,
      LINT_APPLICABLE.ALWAYS,
      types
    ],
    'type-empty': [LINT_LEVEL.ERROR, LINT_APPLICABLE.NEVER]
  }
}
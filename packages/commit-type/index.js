
const typeTips = [
  ['✨', 'feat',     'A new feature'],
  ['🐛', 'fix',      'A bug Fix'],
  ['🩹', 'fix',      'Simple fix for a non-critical issue'],
  ['🔨', 'chore',    'some build or dependency update'],
  ['🎨', 'style',    'Improve structure / format of the code'],
  ['🎉', 'init',     'Begin a project'],
  ['✅', 'test',     'Add test'],
  ['📝', 'docs',     'Add or update documentation'],
  ['🙈', 'ignore',   'Add or update ignore file'],
  ['🗑️', 'remove',   'Remove code or files'],
  ['⚡️', 'improve',  'Improve performance'],
  ['♻️', 'refactor', 'Refactor code'],
]

module.exports = {
  $types: typeTips, // for commitlint
  types: typeTips.map(([icon, type, tip]) => ({
    value: `${icon}${type}`,
    name: `${icon}${type}: ${tip}`,
  })),
  scopes: [],
  allowCustomScopes: true,
  allowBreakingChanges: ['feat', 'fix'],
}


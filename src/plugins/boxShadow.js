import transformThemeValue from '../util/transformThemeValue'

let baseRules = {
  '--tw-ring-offset-shadow': '0 0 #0000',
  '--tw-ring-shadow': '0 0 #0000',
  '--tw-shadow': '0 0 #0000',
}

let transformValue = transformThemeValue('boxShadow')
let defaultBoxShadow = [
  `var(--tw-ring-offset-shadow, 0 0 #0000)`,
  `var(--tw-ring-shadow, 0 0 #0000)`,
  `var(--tw-shadow)`,
].join(', ')

export default function () {
  return function ({ config, matchUtilities, addUtilities, theme, variants }) {
    if (config('mode') !== 'jit') {
      addUtilities(
        {
          '*, ::before, ::after': {
            '--tw-shadow': '0 0 #0000',
          },
        },
        { respectImportant: false }
      )
    }

    matchUtilities(
      {
        shadow: (value, { includeBase }) => {
          if (config('mode') === 'jit') {
            includeBase(baseRules)
          }

          value = transformValue(value)

          return {
            '--tw-shadow': value === 'none' ? '0 0 #0000' : value,
            'box-shadow': defaultBoxShadow,
          }
        },
      },
      {
        values: theme('boxShadow'),
        variants: variants('boxShadow'),
        type: 'lookup',
      }
    )
  }
}

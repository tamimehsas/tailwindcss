import { baseRules } from './filter'

export default function () {
  return function ({ config, matchUtilities, theme, variants }) {
    if (config('mode') === 'jit') {
      matchUtilities(
        {
          sepia: (value, { includeBase }) => {
            includeBase(baseRules)

            return {
              '--tw-sepia': `sepia(${value})`,
              filter: 'var(--tw-filter)',
            }
          },
        },
        {
          values: theme('sepia'),
          variants: variants('sepia'),
          type: 'any',
        }
      )
    } else {
      matchUtilities(
        {
          sepia: (value) => {
            return {
              '--tw-sepia': `sepia(${value})`,
              ...(config('mode') === 'jit' ? { filter: 'var(--tw-filter)' } : {}),
            }
          },
        },
        { values: theme('sepia'), variants: variants('sepia'), type: 'any' }
      )
    }
  }
}

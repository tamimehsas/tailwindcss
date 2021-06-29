import { baseRules } from './filter'

export default function () {
  return function ({ config, matchUtilities, theme, variants }) {
    if (config('mode') === 'jit') {
      matchUtilities(
        {
          saturate: (value, { includeBase }) => {
            includeBase(baseRules)

            return {
              '--tw-saturate': `saturate(${value})`,
              filter: 'var(--tw-filter)',
            }
          },
        },
        {
          values: theme('saturate'),
          variants: variants('saturate'),
          type: 'any',
        }
      )
    } else {
      matchUtilities(
        {
          saturate: (value) => {
            return {
              '--tw-saturate': `saturate(${value})`,
              ...(config('mode') === 'jit' ? { filter: 'var(--tw-filter)' } : {}),
            }
          },
        },
        {
          values: theme('saturate'),
          variants: variants('saturate'),
          type: 'any',
        }
      )
    }
  }
}

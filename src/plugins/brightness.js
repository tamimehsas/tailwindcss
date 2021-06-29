import { baseRules } from './filter'

export default function () {
  return function ({ config, matchUtilities, theme, variants }) {
    if (config('mode') === 'jit') {
      matchUtilities(
        {
          brightness: (value, { includeBase }) => {
            includeBase(baseRules)

            return {
              '--tw-brightness': `brightness(${value})`,
              filter: 'var(--tw-filter)',
            }
          },
        },
        {
          values: theme('brightness'),
          variants: variants('brightness'),
          type: 'any',
        }
      )
    } else {
      matchUtilities(
        {
          brightness: (value) => {
            return {
              '--tw-brightness': `brightness(${value})`,
              ...(config('mode') === 'jit' ? { filter: 'var(--tw-filter)' } : {}),
            }
          },
        },
        {
          values: theme('brightness'),
          variants: variants('brightness'),
          type: 'any',
        }
      )
    }
  }
}

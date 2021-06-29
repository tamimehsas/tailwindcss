import { baseRules } from './filter'

export default function () {
  return function ({ config, matchUtilities, theme, variants }) {
    if (config('mode') === 'jit') {
      matchUtilities(
        {
          blur: (value, { includeBase }) => {
            includeBase(baseRules)

            return {
              '--tw-blur': `blur(${value})`,
              filter: 'var(--tw-filter)',
            }
          },
        },
        {
          values: theme('blur'),
          variants: variants('blur'),
          type: 'any',
        }
      )
    } else {
      matchUtilities(
        {
          blur: (value) => {
            return {
              '--tw-blur': `blur(${value})`,
              ...(config('mode') === 'jit' ? { filter: 'var(--tw-filter)' } : {}),
            }
          },
        },
        {
          values: theme('blur'),
          variants: variants('blur'),
          type: 'any',
        }
      )
    }
  }
}

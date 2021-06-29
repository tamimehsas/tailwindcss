import { baseRules } from './filter'

export default function () {
  return function ({ config, matchUtilities, theme, variants }) {
    if (config('mode') === 'jit') {
      matchUtilities(
        {
          contrast: (value, { includeBase }) => {
            includeBase(baseRules)

            return {
              '--tw-contrast': `contrast(${value})`,
              filter: 'var(--tw-filter)',
            }
          },
        },
        {
          values: theme('contrast'),
          variants: variants('contrast'),
          type: 'any',
        }
      )
    } else {
      matchUtilities(
        {
          contrast: (value) => {
            return {
              '--tw-contrast': `contrast(${value})`,
              ...(config('mode') === 'jit' ? { filter: 'var(--tw-filter)' } : {}),
            }
          },
        },
        {
          values: theme('contrast'),
          variants: variants('contrast'),
          type: 'any',
        }
      )
    }
  }
}

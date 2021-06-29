import { baseRules } from './filter'

export default function () {
  return function ({ config, matchUtilities, theme, variants }) {
    if (config('mode') === 'jit') {
      matchUtilities(
        {
          'hue-rotate': (value, { includeBase }) => {
            includeBase(baseRules)

            return {
              '--tw-hue-rotate': `hue-rotate(${value})`,
              filter: 'var(--tw-filter)',
            }
          },
        },
        {
          values: theme('hueRotate'),
          variants: variants('hueRotate'),
          type: 'any',
        }
      )
    } else {
      matchUtilities(
        {
          'hue-rotate': (value) => {
            return {
              '--tw-hue-rotate': `hue-rotate(${value})`,
              ...(config('mode') === 'jit' ? { filter: 'var(--tw-filter)' } : {}),
            }
          },
        },
        {
          values: theme('hueRotate'),
          variants: variants('hueRotate'),
          type: 'any',
        }
      )
    }
  }
}

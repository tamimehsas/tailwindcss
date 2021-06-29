import { baseRules } from './backdropFilter'

export default function () {
  return function ({ config, matchUtilities, theme, variants }) {
    matchUtilities(
      {
        'backdrop-brightness': (value, { includeBase }) => {
          if (config('mode') === 'jit') {
            includeBase(baseRules)
          }

          return {
            '--tw-backdrop-brightness': `brightness(${value})`,
            ...(config('mode') === 'jit' ? { 'backdrop-filter': 'var(--tw-backdrop-filter)' } : {}),
          }
        },
      },
      {
        values: theme('backdropBrightness'),
        variants: variants('backdropBrightness'),
        type: 'any',
      }
    )
  }
}

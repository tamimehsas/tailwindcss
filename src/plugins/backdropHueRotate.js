import { baseRules } from './backdropFilter'

export default function () {
  return function ({ config, matchUtilities, theme, variants }) {
    matchUtilities(
      {
        'backdrop-hue-rotate': (value, { includeBase }) => {
          if (config('mode') === 'jit') {
            includeBase(baseRules)
          }

          return {
            '--tw-backdrop-hue-rotate': `hue-rotate(${value})`,
            ...(config('mode') === 'jit' ? { 'backdrop-filter': 'var(--tw-backdrop-filter)' } : {}),
          }
        },
      },
      {
        values: theme('backdropHueRotate'),
        variants: variants('backdropHueRotate'),
        type: 'any',
      }
    )
  }
}

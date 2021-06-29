import { baseRules } from './backdropFilter'

export default function () {
  return function ({ config, matchUtilities, theme, variants }) {
    matchUtilities(
      {
        'backdrop-sepia': (value, { includeBase }) => {
          if (config('mode') === 'jit') {
            includeBase(baseRules)
          }

          return {
            '--tw-backdrop-sepia': `sepia(${value})`,
            ...(config('mode') === 'jit' ? { 'backdrop-filter': 'var(--tw-backdrop-filter)' } : {}),
          }
        },
      },
      {
        values: theme('backdropSepia'),
        variants: variants('backdropSepia'),
        type: 'any',
      }
    )
  }
}

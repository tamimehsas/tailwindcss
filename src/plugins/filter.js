export let baseRules = {
  '--tw-blur': 'var(--tw-empty,/*!*/ /*!*/)',
  '--tw-brightness': 'var(--tw-empty,/*!*/ /*!*/)',
  '--tw-contrast': 'var(--tw-empty,/*!*/ /*!*/)',
  '--tw-grayscale': 'var(--tw-empty,/*!*/ /*!*/)',
  '--tw-hue-rotate': 'var(--tw-empty,/*!*/ /*!*/)',
  '--tw-invert': 'var(--tw-empty,/*!*/ /*!*/)',
  '--tw-saturate': 'var(--tw-empty,/*!*/ /*!*/)',
  '--tw-sepia': 'var(--tw-empty,/*!*/ /*!*/)',
  '--tw-drop-shadow': 'var(--tw-empty,/*!*/ /*!*/)',
  '--tw-filter': [
    'var(--tw-blur)',
    'var(--tw-brightness)',
    'var(--tw-contrast)',
    'var(--tw-grayscale)',
    'var(--tw-hue-rotate)',
    'var(--tw-invert)',
    'var(--tw-saturate)',
    'var(--tw-sepia)',
    'var(--tw-drop-shadow)',
  ].join(' '),
}

export default function () {
  return function ({ config, matchUtilities, addUtilities, variants }) {
    if (config('mode') === 'jit') {
      matchUtilities(
        {
          filter: (value, { includeBase }) => {
            if (value !== 'none') {
              includeBase(baseRules)
            }

            return {
              filter: value,
            }
          },
        },
        {
          values: { DEFAULT: 'var(--tw-filter)', none: 'none' },
          variants: variants('filter'),
          type: 'any',
        }
      )
    } else {
      addUtilities(
        {
          '.filter': {
            '--tw-blur': 'var(--tw-empty,/*!*/ /*!*/)',
            '--tw-brightness': 'var(--tw-empty,/*!*/ /*!*/)',
            '--tw-contrast': 'var(--tw-empty,/*!*/ /*!*/)',
            '--tw-grayscale': 'var(--tw-empty,/*!*/ /*!*/)',
            '--tw-hue-rotate': 'var(--tw-empty,/*!*/ /*!*/)',
            '--tw-invert': 'var(--tw-empty,/*!*/ /*!*/)',
            '--tw-saturate': 'var(--tw-empty,/*!*/ /*!*/)',
            '--tw-sepia': 'var(--tw-empty,/*!*/ /*!*/)',
            '--tw-drop-shadow': 'var(--tw-empty,/*!*/ /*!*/)',
            filter: [
              'var(--tw-blur)',
              'var(--tw-brightness)',
              'var(--tw-contrast)',
              'var(--tw-grayscale)',
              'var(--tw-hue-rotate)',
              'var(--tw-invert)',
              'var(--tw-saturate)',
              'var(--tw-sepia)',
              'var(--tw-drop-shadow)',
            ].join(' '),
          },
          '.filter-none': { filter: 'none' },
        },
        variants('filter')
      )
    }
  }
}

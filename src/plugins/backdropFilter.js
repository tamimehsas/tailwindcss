export let baseRules = {
  '--tw-backdrop-blur': 'var(--tw-empty,/*!*/ /*!*/)',
  '--tw-backdrop-brightness': 'var(--tw-empty,/*!*/ /*!*/)',
  '--tw-backdrop-contrast': 'var(--tw-empty,/*!*/ /*!*/)',
  '--tw-backdrop-grayscale': 'var(--tw-empty,/*!*/ /*!*/)',
  '--tw-backdrop-hue-rotate': 'var(--tw-empty,/*!*/ /*!*/)',
  '--tw-backdrop-invert': 'var(--tw-empty,/*!*/ /*!*/)',
  '--tw-backdrop-opacity': 'var(--tw-empty,/*!*/ /*!*/)',
  '--tw-backdrop-saturate': 'var(--tw-empty,/*!*/ /*!*/)',
  '--tw-backdrop-sepia': 'var(--tw-empty,/*!*/ /*!*/)',
  '--tw-backdrop-filter': [
    'var(--tw-backdrop-blur)',
    'var(--tw-backdrop-brightness)',
    'var(--tw-backdrop-contrast)',
    'var(--tw-backdrop-grayscale)',
    'var(--tw-backdrop-hue-rotate)',
    'var(--tw-backdrop-invert)',
    'var(--tw-backdrop-opacity)',
    'var(--tw-backdrop-saturate)',
    'var(--tw-backdrop-sepia)',
  ].join(' '),
}

export default function () {
  return function ({ config, matchUtilities, addUtilities, variants }) {
    if (config('mode') === 'jit') {
      matchUtilities(
        {
          'backdrop-filter': (value, { includeBase }) => {
            if (value !== 'none') {
              includeBase(baseRules)
            }

            return {
              'backdrop-filter': value,
            }
          },
        },
        {
          values: { DEFAULT: 'var(--tw-backdrop-filter)', none: 'none' },
          variants: variants('backdropFilter'),
          type: 'any',
        }
      )
    } else {
      addUtilities(
        {
          '.backdrop-filter': {
            '--tw-backdrop-blur': 'var(--tw-empty,/*!*/ /*!*/)',
            '--tw-backdrop-brightness': 'var(--tw-empty,/*!*/ /*!*/)',
            '--tw-backdrop-contrast': 'var(--tw-empty,/*!*/ /*!*/)',
            '--tw-backdrop-grayscale': 'var(--tw-empty,/*!*/ /*!*/)',
            '--tw-backdrop-hue-rotate': 'var(--tw-empty,/*!*/ /*!*/)',
            '--tw-backdrop-invert': 'var(--tw-empty,/*!*/ /*!*/)',
            '--tw-backdrop-opacity': 'var(--tw-empty,/*!*/ /*!*/)',
            '--tw-backdrop-saturate': 'var(--tw-empty,/*!*/ /*!*/)',
            '--tw-backdrop-sepia': 'var(--tw-empty,/*!*/ /*!*/)',
            'backdrop-filter': [
              'var(--tw-backdrop-blur)',
              'var(--tw-backdrop-brightness)',
              'var(--tw-backdrop-contrast)',
              'var(--tw-backdrop-grayscale)',
              'var(--tw-backdrop-hue-rotate)',
              'var(--tw-backdrop-invert)',
              'var(--tw-backdrop-opacity)',
              'var(--tw-backdrop-saturate)',
              'var(--tw-backdrop-sepia)',
            ].join(' '),
          },
          '.backdrop-filter-none': { 'backdrop-filter': 'none' },
        },
        variants('backdropFilter')
      )
    }
  }
}

export let baseRules = {
  '--tw-translate-x': '0',
  '--tw-translate-y': '0',
  '--tw-rotate': '0',
  '--tw-skew-x': '0',
  '--tw-skew-y': '0',
  '--tw-scale-x': '1',
  '--tw-scale-y': '1',
  '--tw-transform': [
    'translateX(var(--tw-translate-x))',
    'translateY(var(--tw-translate-y))',
    'rotate(var(--tw-rotate))',
    'skewX(var(--tw-skew-x))',
    'skewY(var(--tw-skew-y))',
    'scaleX(var(--tw-scale-x))',
    'scaleY(var(--tw-scale-y))',
  ].join(' '),
}

export default function () {
  return function ({ config, matchUtilities, addUtilities, variants }) {
    if (config('mode') === 'jit') {
      matchUtilities(
        {
          transform: (value, { includeBase }) => {
            if (value !== 'none') {
              includeBase(baseRules)
            }

            return {
              transform: value,
            }
          },
        },
        {
          values: {
            DEFAULT: 'var(--tw-transform)',
            cpu: [
              'translateX(var(--tw-translate-x))',
              'translateY(var(--tw-translate-y))',
              'rotate(var(--tw-rotate))',
              'skewX(var(--tw-skew-x))',
              'skewY(var(--tw-skew-y))',
              'scaleX(var(--tw-scale-x))',
              'scaleY(var(--tw-scale-y))',
            ].join(' '),
            gpu: [
              'translate3d(var(--tw-translate-x), var(--tw-translate-y), 0)',
              'rotate(var(--tw-rotate))',
              'skewX(var(--tw-skew-x))',
              'skewY(var(--tw-skew-y))',
              'scaleX(var(--tw-scale-x))',
              'scaleY(var(--tw-scale-y))',
            ].join(' '),
            none: 'none',
          },
          variants: variants('transform'),
          type: 'any',
        }
      )
    } else {
      addUtilities(
        {
          '.transform': {
            '--tw-translate-x': '0',
            '--tw-translate-y': '0',
            '--tw-rotate': '0',
            '--tw-skew-x': '0',
            '--tw-skew-y': '0',
            '--tw-scale-x': '1',
            '--tw-scale-y': '1',
            transform: [
              'translateX(var(--tw-translate-x))',
              'translateY(var(--tw-translate-y))',
              'rotate(var(--tw-rotate))',
              'skewX(var(--tw-skew-x))',
              'skewY(var(--tw-skew-y))',
              'scaleX(var(--tw-scale-x))',
              'scaleY(var(--tw-scale-y))',
            ].join(' '),
          },
          '.transform-gpu': {
            '--tw-translate-x': '0',
            '--tw-translate-y': '0',
            '--tw-rotate': '0',
            '--tw-skew-x': '0',
            '--tw-skew-y': '0',
            '--tw-scale-x': '1',
            '--tw-scale-y': '1',
            transform: [
              'translate3d(var(--tw-translate-x), var(--tw-translate-y), 0)',
              'rotate(var(--tw-rotate))',
              'skewX(var(--tw-skew-x))',
              'skewY(var(--tw-skew-y))',
              'scaleX(var(--tw-scale-x))',
              'scaleY(var(--tw-scale-y))',
            ].join(' '),
          },
          '.transform-none': { transform: 'none' },
        },
        variants('transform')
      )
    }
  }
}

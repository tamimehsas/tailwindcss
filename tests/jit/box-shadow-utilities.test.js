import postcss from 'postcss'
import path from 'path'
import tailwind from '../../src/jit/index.js'

function run(input, config = {}) {
  const { currentTestName } = expect.getState()

  return postcss(tailwind(config)).process(input, {
    from: `${path.resolve(__filename)}?test=${currentTestName}`,
  })
}

test('basic ring width', async () => {
  let config = {
    mode: 'jit',
    purge: [
      {
        raw: '<div class="bad-variant:shadow shadow shadow-md shadow-lg lg:hover:shadow-xl focus:before:shadow-2xl"></div>',
      },
    ],
    corePlugins: ['boxShadow'],
    theme: {},
    plugins: [],
  }

  let css = `
    @tailwind base;
    /* --- */
    @tailwind utilities
  `

  return run(css, config).then((result) => {
    expect(result.css).toMatchFormattedCss(`
      .shadow,
      .shadow-md,
      .shadow-lg,
      .lg\\:hover\\:shadow-xl,
      .focus\\:before\\:shadow-2xl::before {
        --tw-ring-offset-shadow: 0 0 #0000;
        --tw-ring-shadow: 0 0 #0000;
        --tw-shadow: 0 0 #0000;
      }
      /* --- */
      .shadow {
        --tw-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
        box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000),
          var(--tw-shadow);
      }
      .shadow-md {
        --tw-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
        box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000),
          var(--tw-shadow);
      }
      .shadow-lg {
        --tw-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
        box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000),
          var(--tw-shadow);
      }
      .focus\\:before\\:shadow-2xl:focus::before {
        content: '';
        --tw-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000),
          var(--tw-shadow);
      }
      @media (min-width: 1024px) {
        .lg\\:hover\\:shadow-xl:hover {
          --tw-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
          box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000),
            var(--tw-shadow);
        }
      }
    `)
  })
})

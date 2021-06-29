import { baseRules } from './transform'
import createUtilityPlugin from '../util/createUtilityPlugin'

export default function () {
  return function ({ config, ...rest }) {
    if (config('mode') === 'jit') {
      return createUtilityPlugin(
        'translate',
        [
          [
            ['translate-x', ['--tw-translate-x', ['transform', 'var(--tw-transform)']]],
            ['translate-y', ['--tw-translate-y', ['transform', 'var(--tw-transform)']]],
          ],
        ],
        {
          lolback(_value, { includeBase }) {
            includeBase(baseRules)
          },
        }
      )({ config, ...rest })
    } else {
      return createUtilityPlugin('translate', [
        [
          ['translate-x', ['--tw-translate-x']],
          ['translate-y', ['--tw-translate-y']],
        ],
      ])({ config, ...rest })
    }
  }
}

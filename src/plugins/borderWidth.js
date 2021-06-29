import { asLength } from '../util/pluginUtils'
import createUtilityPlugin from '../util/createUtilityPlugin'
import withAlphaVariable from '../util/withAlphaVariable'

export default function () {
  return function (pluginApi) {
    let baseRules = !pluginApi.corePlugins('borderOpacity')
      ? { 'border-color': pluginApi.theme('borderColor.DEFAULT', 'currentColor') }
      : withAlphaVariable({
          color: pluginApi.theme('borderColor.DEFAULT', 'currentColor'),
          property: 'border-color',
          variable: '--tw-border-opacity',
        })

    createUtilityPlugin(
      'borderWidth',
      [
        ['border', ['border-width']],
        [
          ['border-t', ['border-top-width']],
          ['border-r', ['border-right-width']],
          ['border-b', ['border-bottom-width']],
          ['border-l', ['border-left-width']],
        ],
      ],
      {
        resolveArbitraryValue: asLength,
        lolback(_value, { includeBase }) {
          if (pluginApi.config('mode') === 'jit') {
            includeBase(baseRules)
          }
        },
      }
    )(pluginApi)
  }
}

import { div, compose, input, label, button } from './html'
import { css } from './css'
import { call } from './actions'

export function ui (value) {
  return div({
    style: css({
      width: '100vw',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column'
    })
  }, counter(value))
}

function counter (value) {
  return div({}, compose(
    incrementButton(),
    count(value),
    decrementButton()
  ))
}

function incrementButton () {
  return button({
    onclick: call('increment')
  }, '+')
}

function decrementButton () {
  return button({
    onclick: call('decrement')
  }, '-')
}

function count (value) {
  return div({}, compose(
    label({
      'for': 'count_value'
    }, `Count: ${value}`),
    input({
      'id': 'count_value',
      'value': value,
      onkeyup: call('set_value')
    })
  ))
}

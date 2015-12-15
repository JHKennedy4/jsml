import { div, compose, input, label } from './html'
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
  return div({
    onclick: call('increment')
  }, '+')
}

function decrementButton () {
  return div({
    onclick: call('decrement')
  }, '-')
}

function count (value) {
  return div({}, compose(
    label({
      'for': 'count_value'
    }, 'Count: '),
    input({
      'id': 'count_value',
      'value': value
    })
  ))
}

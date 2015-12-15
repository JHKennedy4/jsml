import _ from 'underscore'

function div (attributes, innerHTML) {
  return function () {
    const tag = 'div'
    return el(tag)(attributes, innerHTML)
  }
}

function el (tag) {
  return function (attributes, innerHTML) {
    return `<${tag} ${attributes}>${innerHTML}</${tag}>`
  }
}

function attr (object) {
  return Object.keys(object).map(function (key) {
    const val = object[key]
    if (key === 'cls') {
      key = 'class'
    }
    return `${key}='${val}'`
  }).join(' ')
}

function component (content) {
  return div(attr({
    cls: 'your mom',
    id: 'anId'
  }), on({
    click: raise('event_name', function () {
    })
  }), content)
}

/*
Every HTML element has a set of attributes that allow for the execution of JavaScript when certain events happen. These attributes are called event attributes and are the name of the event prefixed by "on". For example, to execute JavaScript when a user clicks on the element, put the JavaScript in the onclick attribute.

In the JavaScript code executed in response to the event, this is bound to the HTML element and the Event object can be reached using the event variable in the scope of the attribute.
*/
function on (object) {
  return Object.keys(object).map(function (key) {
    return `on${key}="raise('${object[key]}')"`
  }).join(' ')
}

function raise (event_id, callback) {
  switch (event_id) {
    case 'event_name':
      console.log('hi')
      break
    case 'fuck_it':
      console.log('hi again')
      break
  }
  callback()
}

var app = component('hi mom')

document.getElementById('root').innerHTML = app()

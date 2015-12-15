import { attr } from './attributes'

export function compose (...rest) {
  return rest.join('')
}

export function element (tag, attributes, content) {
  return `<${tag} ${attr(attributes)}>${content}</${tag}>`
}

/*
List:
https://developer.mozilla.org/en-US/docs/Glossary/Empty_element
*/
export function emptyElement (tag, attributes) {
  return `<${tag} ${attr(attributes)} />`
}

export function input (attributes) {
  return emptyElement('input', attributes)
}

export function div (attributes, content) {
  return element('div', attributes, content)
}

export function label (attributes, content) {
  return element('label', attributes, content)
}


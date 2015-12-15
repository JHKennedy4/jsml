import { attr } from './attributes'

export function compose (...rest) {
  return rest.join('')
}

export function element (tag, attributes, content) {
  return `<${tag} ${attr(attributes)}>${content}</${tag}>`
}

export function emptyElement (tag, attributes) {
  // List of Empty Elements:
  // - https://developer.mozilla.org/en-US/docs/Glossary/Empty_element
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

export function button (attributes, content) {
  return element('button', attributes, content)
}

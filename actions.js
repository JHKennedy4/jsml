/*
Every HTML element has a set of attributes that allow for the execution of JavaScript when certain events happen. These attributes are called event attributes and are the name of the event prefixed by "on". For example, to execute JavaScript when a user clicks on the element, put the JavaScript in the onclick attribute.

In the JavaScript code executed in response to the event, this is bound to the HTML element and the Event object can be reached using the event variable in the scope of the attribute.
*/

/*
  this function should return a
  global function invoking an event
  the event, element, and any bound data

  Look at redux
  but I just want to spit out a string

  allows the user to split out by data stores
  event selects the appropriate reducer for that data store

  nothing subscribes to changes to the store
  instead, the stores are passed directly to the root ui function?

  that seems messy
*/
export function call (action, data_func) {
  return `${action}`
}

/*
Every HTML element has a set of attributes that allow for the execution of JavaScript when certain events happen. These attributes are called event attributes and are the name of the event prefixed by "on". For example, to execute JavaScript when a user clicks on the element, put the JavaScript in the onclick attribute.

In the JavaScript code executed in response to the event, this is bound to the HTML element and the Event object can be reached using the event variable in the scope of the attribute.
*/

/*
 1. function that creates a new store
 2. store name serves as namespace for events bound to that store
 3. events trigger reducers (a la redux)
 4. when state is updated, re-render ui

 Qs:
 should I subscribe to changes to the store at the lowest level possible? or just re-render everything?

 Goal: this should be performant enough to do javascipt animations
*/
export function call (action, data_func) {
  return `${action}`
}

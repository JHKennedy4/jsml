/*
 event attributes are the name of the event prefixed by "on".

 `this` is bound to the HTML element
 the Event object can be reached using the event variable in the scope of the attribute.
*/

/*
 1. function that creates a new store
 2. store name serves as namespace for events bound to that store
 3. events trigger reducers (a la redux)
 4. when state is updated, patch ui

 Qs:
 should I subscribe to changes to the store at the lowest level possible? or just re-render everything?
*/
export function willcall (action, data_func) {
  return `function (${action}) { 

  }()`
}

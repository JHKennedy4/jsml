export function attr (object) {
  return Object.keys(object).map(function (key) {
    const val = object[key]
    if (key === 'cls') {
      key = 'class'
    }
    return `${key}='${val}'`
  }).join(' ')
}

var recipes = new Object()

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, { [key]: value })
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}
function deleteFromObjectByKey(object, key) {
  var newObject = Object.assign({}, object)
  delete newObject[ key ]
}
function deleteFromObjectByKey(object, key) {
  Object.assign({}, object, { key })
}
function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[ key ]
  return object
}

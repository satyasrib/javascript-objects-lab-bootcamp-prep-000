var recipes = new Object()

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, { [key]: value })
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}
function deleteFromObjectByKey(object, key) {
  var obj = { key }
  var newObj = Object.assign({}, obj)
  delete newObj.key
}
function deleteFromObjectByKey(object, key) {
  Object.assign({}, object, { key })
}
function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[ key ]
}

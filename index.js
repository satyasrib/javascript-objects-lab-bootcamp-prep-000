var recipes = new Object()

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, obj, { [key]: value })
}
function updateObjectWithKeyAndValue(object, key, value) {return Object.assign({}, obj, { [key]: value })
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  delete object[ key ]
}

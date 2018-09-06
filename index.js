var recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
    return Object.assign({}, object, {[key]: value})
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
      object[key] = value
      return object
}

function deleteFromObjectByKey(object, key) {
    delete obj.prop
    return obj
}

function destructivelyDeleteFromObjectByKey(object, key) {
      return obj
}

var obj = {prop: 1}
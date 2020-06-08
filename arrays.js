var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']
// chocolateBars.push("milky way")

function addElementToBeginningOfArray(array, element) {
  return [element, ...array]
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array = [element, ...array];
  return array;
}

function addElementToEndOfArray(array, element) {
  return [...array, element]
}

function destructivelyAddElementToEndOfArray(array, element) {
  array = [...array, element];
  return array
}

function accessElementInArray(array, index) {
  return array[index]
}
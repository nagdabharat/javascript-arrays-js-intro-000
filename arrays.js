var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']
// chocolateBars.push("milky way")
function addElementToBeginningOfArray(array, element) {
  return [element, ...array]
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array = [element,...array]
  return array
}

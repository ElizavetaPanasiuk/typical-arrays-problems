
exports.min = function min (array) {
  return array === undefined  || array.length === 0 ? 0 : array.reduce((maxElem, currentElem) => currentElem < maxElem ? currentElem : maxElem, array[0]);
}

exports.max = function max (array) {
  return array === undefined  || array.length === 0 ? 0 : array.reduce((maxElem, currentElem) => currentElem > maxElem ? currentElem : maxElem, array[0]);
}

exports.avg = function avg (array) {
  return array === undefined  || array.length === 0 ? 0 : array.reduce((sum, currentElem) => sum + currentElem, 0) / array.length;
}

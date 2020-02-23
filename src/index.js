
exports.min = function min(array = []) {
  return (array.length > 0) ? Math.min(...array) : 0;
}

exports.max = function max(array = []) {
  return (array.length > 0) ? Math.max(...array) : 0;
}

exports.avg = function avg(array = []) {
  const result = (array.length > 0) ?
    array.reduce((sum, cur) => (sum + cur), 0) / array.length
    : 0;

  return result.toFixed(2)
}

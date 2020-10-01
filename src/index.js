
exports.min = function min (array) {
  if(!array || array.length == 0){
    return 0;
  }
  let len = array.length;
  let min = Infinity;
  while (len--) {
      if (array[len] < min) {
          min = array[len];
      };
  };
  return min;
};

exports.max = function max (array) {
  if(!array || array.length == 0){
    return 0;
  }
  let len = array.length;
  let max = -Infinity;
  while (len--) {
      if (array[len] > max) {
          max = array[len];
      }
  }
  return max;
}

exports.avg = function avg (array) {
    let sum = 0;
    if(!array || array.length == 0){
    return 0;
  };

    for (let i = 0; i < array.length; i ++){
     sum = sum + array[i];
    }
  return sum/array.length;
}

//  Map function
const mapRe = ([head, ...tail], callback) => {
  return typeof head === "undefined"
    ? []
    : [callback(head), ...mapRe(tail, callback)];
};

console.log(mapRe([1, 2, 3, 4, 5], x => x ** 2));

// Reduce function
// - callback(previous, value) : newValue
// - array.reduce(callback, initialValue)

const reduceRe = ([head, ...tail], f, accumulator) => {
  if (typeof head === "undefined") {
    return accumulator;
  }

  return reduceRe(tail, f, f(accumulator, head));
};

const sum = (x, y) => x + y;
console.log(reduceRe([1, 2, 3], sum, 0));

// Filter function
const filterRe = ([head, ...tail], predicate) => {
  if (typeof head === "undefined") {
    return [];
  }

  if (predicate(head)) {
    return [head, ...filterRe(tail, predicate)];
  }

  return [...filterRe(tail, predicate)];
};

const predicate = x => x % 2 === 0;
console.log(filterRe([1, 2, 5, 6, 8], predicate));

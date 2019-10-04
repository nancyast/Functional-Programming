// Implement filter by reduce function
const filter = (array, filterFunction) => {
  const reducer = (accumulator, element) => {
    return filterFunction(element) ? [...accumulator, element] : accumulator;
  };

  return array.reduce(reducer, []);
};

console.log(filter([1, 2, 3, 4, 5, 6, 7, 8], x => x < 5));

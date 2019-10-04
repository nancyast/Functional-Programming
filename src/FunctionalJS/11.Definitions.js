// Function Arity
// Arity: the number of arguments of a function
// f(a): unary function (arity = 1)
// f(a, b): binary function (arity = 2)
// f(a, b, c): ternary function (ariry = 3)

// f.length equals the arity of f.
// Exceptions apply:
// - Rest parameters
// - Default arguments

console.log((a => a * 2).length); // arity of this function equal 1
const sum = (a, b) => a + b;
console.log("sum.length ", sum.length); // arity of this function equal 2

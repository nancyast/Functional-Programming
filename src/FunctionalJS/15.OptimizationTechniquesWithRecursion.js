// Mostly functional programming
// - Implement or use a side-effect free utility belt with imperative elements
// - Mix your utility belt into your code using:
//  + HOF
//  + Currying
// - Tail call optimization
// - Memoization

/*
Tail Call Optimization a Funnction
- At most one recursive call per execution sequence
- The recursive call has to stand as a return value
- The recursive call may only accept the arguments of the function
*/

/*
Memoization
- Deterministic functions: argument values determine the return value
- Build a lookup table:
  + key: argument list
  + value: return value
- If key is in the lookup table, return the corresponding value without executing the function
- Otherwise, execute the function
*/

const memo = f => {
  let memoMap = new Map();
  return args =>
    memoMap.has(args)
      ? memoMap.get(args)
      : memoMap.set(args, f(args)).get(args);
};

const factorial = n => {
  if (n <= 1) {
    return 1;
  }

  return n * factorial(n - 1);
};

const memoFactorial = memo(factorial);
console.log("memoFactorial ", memoFactorial(10));

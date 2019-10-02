/*
- Testability
- Easy maintenance
- Reusable building blocks
- Parallel execution
- Rigor vs understandability
- Use of a subset of Javascript
- Performance
  + Memoization
  + Tail call optimization
  + Lazy evaluation
*/

/*
Let's conclude this introductory section with some Benefits and Drawbacks of Functional Programming in JavaScript.
We will not only talk about the advantages and disadvantages of functional programming, but we will also introduce techniques to offset some of the drawbacks of writing programs in functional style.
We learned in the last video that the argument list of a function determines its return value, this is great news for testing functions, as we don't have to set up any external context. 
We don't have to restore the state of our application either, all we have to do is to verify that our function works properly, by creating a lookup table of inputs and expected return values, and comparing this lookup table to the values returned by the tested function. 
As a side note, we don't have to determine this lookup table randomly, input values can be grouped, based on a logic that verifies the specification. 
In order to avoid the randomness of testing, we mostly rely on boundary analysis, testing the boundary values of our state space. 
If our functions were impure, external context would influence the return value of our functions. 
As a consequence, we would have to set up the external state of our application, in order to test our logic under the desired conditions. 
Your code is not only easy to test but it is also easy to maintain. 
Functional code is often simple and straightforward to read and interpret, even without the help of comments.
Functional code is often more compact than object-oriented code, by focusing on what problem the code solves rather than how the solution is structured in terms of steps, we tend to think on a higher level. 
In other words, it is harder to get lost in the implementation details than writing programs in a functional style.
In functional programming, pure functions can often be reused in your application. 
It is a natural process to abstract pieces of functionality that you need in multiple modules of your code. 
When using pure functions, the order of their execution doesn't matter. 
As long as the arguments of the executable functions are available, they can be called in any order. 
In asynchronous programming, using pure functions results in less dependencies. 
There are no race conditions to take care of, as our application is stateless. 
You have seen in the previous section that it is hard to stick to a purely functional style in JavaScript, for instance, we often have to make deep copies of our objects in order to respect the principles of functional programming. 
You have also seen how easy it is to push an element to an array instead of assembling a new area with new elements from scratch. 
In this course, we'll make simplifications based on common sense, we will respect the principles of functional programming in theory, but we will enrich implementation with some imperative elements of JavaScript, in order to make our code more understandable. 
We may also combine elements of functional programming, object-oriented programming, or other imperative styles.
Remember, common sense always overrides rigor. 
The expressive power of JavaScript has increased throughout the years, up to a point where software developers can choose to write code in many different styles.
In functional programs, you have to avoid certain language constructs that are meant to cause side effects. 
When using functional programming in the wrong way, we may encounter performance problems. 
Recursion may eat up your stack. Immutability comes with the cost of creating new objects instead of modifying a field in an existing object. 
Pure functions, easy testability, and verifiable mathematical correctness come with a price. 
When using the right techniques, we can negate the performance drawback, in fact, functional code can be very efficient compared to other approaches. 
For instance, we can use memorization to save many recursive function calls. 
In functional programming, not only our building blocks are reusable, calling a pure function with the same arguments always returns the same result. 
If the computation of a return value is resource intensive, we can apply memorization to build a lookup table of input and output mappings. 
When calling a function, we can first track if our lookup table already contains the result, and simply return it instead of executing the resource-intensive function. 
In the latest version of JavaScript, we can use tail call optimization to avoid consuming the stack with recursive calls. 
Although tail call optimization is not available in all browsers yet, in the future, you will be able to rely on it, as tail call optimization will make it to more and more browsers. 
We can also use lazy evaluation to avoid the performance stacks of eagerly evaluating values that are later thrown away. 
Lazy evaluation works with data structures that are only evaluated once they are needed. 
For instance, if you need five elements from a lazy list, and the list contains a hundred elements, we don't even have to compute the last 95 elements of the lazy list to process the first 5 elements. 
In this way, we can even define infinitely long sequences. By processing a lazy list, we do something similar as breaking out from a for loop as soon as we have found an answer to our question. 
Testing web applications written in functional style, using lazy evaluation, and asynchronous programming are cool topics. 
As these are more advanced topics, you will find them in the second volume of this course. 
Although you have to wait a bit for advanced topics, the good news is that we have a lot to cover in this volume dedicated to learning the fundamentals of functional programming. 
We have had the opportunity to compare object-oriented code with functional code, you have learned the principles of functional code, the usage of pure functions and immutable data structures, you also learned about the building blocks of your functional programming arsenal, higher-order functions, recursion, currying, and partial evaluation. 
In the next section, we will lay down the fundamentals and learn the subset of ES6 that support functional programming.
*/

const _ = require("lodash");
// Shallow copying only clones top-level references, and uses some parts of the original data structure to complete the new object.
// Generally, we gain performance in complex data structures.
// In exchange, it is easier to make mistakes.
// Deep cloning recursively copies all references and primitive values in a data structure, this may lead to a performance penalty.
// In exchange for this performance penalty, we don't have to worry about mutating the original object or array.
// In JavaScript, we often mix the functional paradigm with other styles.

// Shallow cloning in ES6
const array = [{ name: "Nhung" }];
const newArray = [...array];

const node = {
  child: [{ text: "Hi" }]
};

const newNode = Object.assign({}, node);
node.child[0].text = "hello";
console.log("newNode ", newNode);

// Deep cloning in ES6
const o = { o: {} };
const cloneObj = _.cloneDeep(o);
// JSON.parse(JSON.stringify(o)) can not clone a method object

// Should you implement your own cloning methods

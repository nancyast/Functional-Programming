// Object Oriented Partern
const elevator = {
  floor: 5,
  up: function() {
    this.floor += 1;
    return this;
  },
  down: function() {
    this.floor -= 1;
    return this;
  },
  value: function() {
    return this.floor;
  }
};

const newElevator = elevator
  .up()
  .up()
  .down()
  .up()
  .value();

// Functional example
const elevatorF = {
  floor: 5
};

const up = elevator => {
  return {
    floor: elevator.floor + 1
  };
};

const down = elevator => {
  return {
    floor: elevator.floor - 1
  };
};

const move = sequence(up, down);
const newElevatorF = move(elevator);
// console.log("newElevator ", newElevator.floor);

// Example
const sum = (a, b) => a + b;
const log = total => {
  console.log("total ", total);
  return total;
};
console.log(log(sum(2, 3)));

const calculator = sequence(sum, log);
console.log("calculator(4, 3); ", calculator(4, 3));

// Sequence and compose
function sequence(f1, f2) {
  return (...args) => f2(f1(...args));
}

function sequenceReduce(...functions) {
  functions.reduce((f1, f2) => {
    return x => f2(f1(x));
  });
}
function compose(f1, f2) {
  return x => f1(f2(x));
}

function composeReduce(...functions) {
  functions.reduce((f1, f2) => {
    return x => f1(f2(x));
  });
}

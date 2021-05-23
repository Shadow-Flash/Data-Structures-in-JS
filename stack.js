var Stack = function () {
  this.count = 0;
  this.storage = {};

  this.push = function (data) {
    this.storage[this.count] = data;
    this.count++;
  };

  this.pop = function () {
    if (this.count === 0) return undefined;
    this.count--;
    let result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  };

  this.peek = function () {
    return this.storage[this.count - 1];
  };

  this.size = function () {
    return this.count;
  };
};

const newStack = new Stack();
newStack.push(1);
newStack.push(2);
newStack.push(3);
console.log(newStack.size());
console.log(newStack.pop());
console.log(newStack.peek());
console.log(newStack.storage);

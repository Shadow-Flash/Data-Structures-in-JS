const Sets = function () {
  this.collection = [];

  this.has = function (element) {
    return this.collection.indexOf(element) !== -1;
  };

  this.values = function () {
    return this.collection;
  };

  this.add = function (element) {
    if (!this.has(element)) {
      this.collection.push(element);
      return true;
    }
    return false;
  };

  this.remove = function (element) {
    if (this.has(element)) {
      const index = this.collection.indexOf(element);
      this.collection.splice(index, 1);
      return true;
    }
    return false;
  };

  this.size = function () {
    return this.collection.length;
  };

  this.union = function (otherSet) {
    var unionSet = new Sets();
    var firstSet = this.values();
    var secondSet = otherSet.values();
    firstSet.forEach(function (val) {
      unionSet.add(val);
    });
    secondSet.forEach(function (val) {
      unionSet.add(val);
    });
    return unionSet;
  };

  this.intersection = function (otherSet) {
    var intersectSet = new Sets();
    var firstSet = this.values();
    firstSet.forEach(function (value) {
      if (otherSet.has(value)) intersectSet.add(value);
    });
    return intersectSet;
  };

  this.difference = function (otherSet) {
    var differenceSet = new Sets();
    var firstSet = this.values();
    firstSet.forEach(function (value) {
      if (!otherSet.has(value)) differenceSet.add(value);
    });
    return differenceSet;
  };

  this.subSet = function (otherSet) {
    var firstSet = this.values();
    return firstSet.every(function (value) {
      return otherSet.has(value);
    });
  };
};

const setA = new Sets();
const setB = new Sets();
setA.add('a');
setA.add('c');
setA.add('d');
setB.add('c');
setB.add('b');
setA.size();
setB.size();
console.log(setB.subSet(setA));
const newUnion = setA.difference(setB);
console.log(newUnion.values());
setA.intersection(setB)
setA.difference(setB)
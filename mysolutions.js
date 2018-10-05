function upperCaser (input) {
  return input.toUpperCase();
}

function repeat (operation, num) {
  let execution = 0;
  
  while (execution !== num) {
    operation();
    execution++;
  }
}

function doubleAll (numbers) {
  return numbers.map(number => number * 2);
}

function getShortMessages (messages) {
  return messages.filter(obj => obj.message.length < 50).
    map(obj => obj.message);
}

function checkUsersValid (goodUsers) {
  return function allUsersValid (submittedUsers) {
    return submittedUsers.every(u => goodUsers.some(user => user.id === u.id));
  };
}

function countWords (inputWords) {
  return inputWords.reduce((acum, word) => {
    acum[word] = ++acum[word] || 1;
    
    return acum;
  }, {});
}

function reduce (arr, fn, initial) {
  let acum = initial;
  arr.forEach((elem, i) => {
    acum = fn(acum, elem, i, arr);
  });
  
  return acum;
}

function duckCount () {
  return Object.values(arguments).
    filter(elem => Object.prototype.hasOwnProperty.call(elem, 'quack')).length;
}

var slice = Array.prototype.slice;

function logger (namespace) {
  return function () {
    console.log.apply(console, [namespace].concat(slice.call(arguments)));
  };
}

function bindLogger (namespace) {
  return console.log.bind(console, namespace);
};

function arrayMap(arr, fn, thisArg) {
  return arr.reduce(function(acc, item, index, arr) {
    acc.push(fn.call(thisArg, item, index, arr))
    return acc
  }, [])
}

function Spy(target, method) {
  var originalFunction = target[method]
  
  // use an object so we can pass by reference, not value
  // i.e. we can return result, but update count from this scope
  var result = {
    count: 0
  }
  
  // replace method with spy method
  target[method] = function() {
    result.count++ // track function was called
    return originalFunction.apply(this, arguments) // invoke original function
  }
  
  return result
}



module.exports = upperCaser;


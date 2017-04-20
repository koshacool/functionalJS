module.exports = function arrayMap(arr, fn, thisArg) {
    return arr.reduce(function (acc, item, index, arr) {
        acc.push(fn.call(thisArg, item, index, arr))
        return acc
    }, [])
}

//--------------------------------------------------------

module.exports = function Spy(target, method) {
    var originalFunction = target[method];
    var result = {count: 0};

    // replace method with spy method
    target[method] = function () {
        result.count++; // track function was called
        return originalFunction.apply(this, arguments); // invoke original function
    }
    return result;
}

//--------------------------------------------------------

function repeat(operation, num) {
    // modify this so it can be interrupted
    if (num <= 0) return

    operation()

    // release control every 10 or so
    // iterations.
    // 10 is arbitrary.
    if (num % 10 === 0) {
        setTimeout(function () {
            repeat(operation, --num)
        })
    } else {
        repeat(operation, --num)
    }
}

//--------------------------------------------------------

function repeat(operation, num) {
    return function () {
        if (num <= 0) return
        operation()
        return repeat(operation, --num)
    }
}

function trampoline(fn) {
    while (fn && typeof fn === 'function') {
        fn = fn()
    }
}

module.exports = function (operation, num) {
    trampoline(function () {
        return repeat(operation, num)
    })
}

//--------------------------------------------------------

function loadUsers(userIds, load, done) {
    var users = [];

    userIds.forEach(function (id, index, arr) {
        load(userIds[index], (user) => {
            users[index] = user;
            if (users.length == userIds.length) return done(users);
        })
    });
};

//--------------------------------------------------------
function curryN(fn, n) {
    n = n || fn.length;
    return function curriedN(arg) {
        if (n <= 1) return fn(arg);
        return curryN(fn.bind(this, arg), n - 1)
    }
}

//--------------------------------------------------------
function getDependencies(mod, result) {
    result = result || [];
    var dependencies = mod && mod.dependencies || [];
    Object.keys(dependencies).forEach(function (obj) {
        var key = obj + '@' + dependencies[obj].version;
        if (result.indexOf(key) === -1) result.push(key);
        getDependencies(dependencies[obj], result);
    });
    return result.sort();
}
//--------------------------------------------------------
// Explained:
// The value of `this` in Function.call is the function
// that will be executed.
//
// Bind returns a new function with the value of `this` fixed
// to whatever was passed as its first argument.
//
// Every function 'inherits' from Function.prototype,
// thus every function, including call, apply and bind
// have the methods call apply and bind.
//
// Function.prototype.call === Function.call

Function.call.bind(Array.prototype.slice)



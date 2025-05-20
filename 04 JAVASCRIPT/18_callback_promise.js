function getVar() {
    var x;
    setTimeout(function() {
        x = 10;
        console.log(x);
    }, 3000);
    return x;
}

function anotherFunction() {
    console.log("This is another function.");
}

var value = getVar();
console.log("The value is: " + value);
anotherFunction();


// callback

function getVar2(callback) {
    var x;
    setTimeout(function() {
        x = 10;
        console.log(x);
        callback();
    }, 3000);
    return x;
}

function anotherFunction2() {
    console.log("This is another function.");
}

var value = getVar2(anotherFunction2);
console.log("The value is: " + value);



// promise
const aPromise = (control) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (control) {
                resolve("Success");
            } else {
                reject("Failure");
            }
        }, 3000);
    });
}

aPromise(true).then(() => {
    console.log("Promise resolved Successfully");
})
.catch(() => {
    console.log("Promise rejected");
});

const aPromiseWithData = (control) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (control) {
                resolve({ name: "John", age: 30 });
            } else {
                reject("Failure");
            }
        }, 3000);
    });
}

aPromiseWithData(true).then((data) => {
    console.log("Promise resolved Successfully");
    console.log(data);
})
.catch((err) => {
    console.log("Promise rejected: " + err);
});


// multiple promises
const promise1 = (control) => { 
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (control) {
                resolve("Promise 1 resolved");
            } else {
                reject("Promise 1 rejected");
            }
        }, 1000);
    });
}

const promise2 = (control) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (control) {
                resolve("Promise 2 resolved");
            } else {
                reject("Promise 2 rejected");
            }
        }, 1000);
    });
}

Promise.all([promise1(true), promise2(true)]).then((results) => {
    console.log("All promises resolved");
    console.log(results);
})
.catch((err) => {
    console.log(err);
})



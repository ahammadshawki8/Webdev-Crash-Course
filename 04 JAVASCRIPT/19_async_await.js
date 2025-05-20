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

const promiseHandle = async () => {
    try {
        const result = await aPromise(true);
        console.log(result);
    } catch (err) {
        console.log(err);
    }
}

promiseHandle();



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

console.log("All Promise Returns: " + Promise.all([promise1(true), promise2(true)]));


const handleMultiplePromises = async () => {
    try {
        const result = await Promise.all([promise1(true), promise2(true)]);
        console.log(result);
    } catch (err) {
        console.log(err);
    }
}

handleMultiplePromises();

// another example
const getMyName = (control) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (control) {
                resolve("John");
            } else {
                reject("Failure");
            }
        }, 3000);
    });
}

const getMyAge = (name) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (name) {
                resolve(30);
            } else {
                reject("Failure");
            }
        }, 3000);
    });
}

getMyName(true).then((name) => {
    getMyAge(name).then((age) => {
        console.log(`Name: ${name}, Age: ${age}`);
    })
    .catch((err) => {
        console.log(err);
    });
}).catch((err) => {
    console.log(err);
});


// using async/await
const getMyDetails = async() => {
    try{
        const name = await getMyName(false);
        const age = await getMyAge(name);
        console.log(`Name: ${name}, Age: ${age}`);
    } catch(err) {
        console.log(err);
    }
}

getMyDetails();
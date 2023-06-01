const { task1, task2, task3, task4 } = require("./tasks");

const p1 = (input) => {
    console.log("Promise 1 is executing...")
    return new Promise ((resolve, reject) => {
        task1(input, (output) => {
            console.log("Promise 1 is executed")
            resolve(output)
        })
    })
}

const p2 = (input) => {
    console.log("Promise 2 is executing...")
    return new Promise ((resolve, reject) => {
        task2(input, (output) => {
            console.log("Promise 2 is executed")
            resolve(output)
        })
    })
}

const p3 = (input) => {
    console.log("Promise 3 is executing...")
    return new Promise ((resolve, reject) => {
        task3(input, (output) => {
            console.log("Promise 3 is executed")
            resolve(output)
        })
    })
}

const p4 = (input) => {
    console.log("Promise 4 is executing...")
    return new Promise ((resolve, reject) => {
        task4(input, (output) => {
            console.log("Promise 4 is executed")
            resolve(output)
        })
    })
}


const groupPromise1 = (number) => {
    console.log("Executing Task 1 + 2 , Promise 1 + 2");
    return new Promise((resolve, reject)=>{
        p1(number)
            .then((op1) => {
                return p2(op1)
            })
            .then((op2) => {
                console.log("Promise 1 and 2 Done")
                resolve(op2);
            })
    })
}

const groupPromise2 = (number) => {
    console.log("Executing Task 3 + 4 , Promise 3 + 4");
    return new Promise((resolve, reject)=>{
        p3(number)
            .then((op1) => {
                return p4(op1)
            })
            .then((op2) => {
                console.log("Promise 3 and 4 Done")
                resolve(op2);
            })
    })
}

const mainMixedPromise = (number) => {
    console.log("Starting the promise execution...")
    groupPromise1(number)
        .then((out1) => {
            return groupPromise2(out1)
        })
}

mainMixedPromise(100);

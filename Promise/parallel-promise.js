const { task1, task2, task3, task4 } = require("./tasks");

//using promise.all

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



const parallelPromise = (number) => {
    
    return Promise.all([p1(number), p2(number), p3(number), p4(number)])
    
}

parallelPromise(100);
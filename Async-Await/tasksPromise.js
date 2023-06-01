const {task1, task2, task3, task4} = require('./tasks');
const date = new Date();
const p1 = (input) => {
    console.log(date,"Promise 1 is executing...")
    return new Promise ((resolve, reject) => {
        task1(input, (output) => {
            console.log(date,"Promise 1 is executed")
            resolve(output)
        })
    })
}

const p2 = (input) => {
    console.log(date,"Promise 2 is executing...")
    return new Promise ((resolve, reject) => {
        task2(input, (output) => {
            console.log(date, "Promise 2 is executed")
            resolve(output)
        })
    })
}

const p3 = (input) => {
    console.log(date,"Promise 3 is executing...")
    return new Promise ((resolve, reject) => {
        task3(input, (output) => {
            console.log(date, "Promise 3 is executed")
            resolve(output)
        })
    })
}

const p4 = (input) => {
    console.log(date,"Promise 4 is executing...")
    return new Promise ((resolve, reject) => {
        task4(input, (output) => {
            console.log(date, "Promise 4 is executed")
            resolve(output)
        })
    })
}

module.exports = {
    p1,
    p2,
    p3,
    p4
}
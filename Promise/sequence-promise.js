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



const mainSeqPromise = (number) => {
    console.log(new Date(), "The start of seq of promises");
    p1(number)
        .then((out1) => p2(out1) )
        .then((out2) => p3(out2))
        .then((out3) => p4(out3))
        .then((out4) => console.log(new Date(), "All promises is executed"))
}

mainSeqPromise(100);
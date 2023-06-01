const {task1,task2,task3,task4} = require('./tasks');

//sequnce using callback

const sequnceCallback = (number) => {
    task1(number, (output1) => {
        task2(output1, (output2) => {
            task3(output2, (output3) => {
                task4(output3, (output4) => {
                    console.log("All tasks is done")
                })
            })
        })
    })
}

sequnceCallback(100);
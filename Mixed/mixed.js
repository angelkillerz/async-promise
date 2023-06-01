
const { task1, task2, task3, task4 } = require('./tasks');

const promise1 = (task1, task2) => {
    console.log("Executing task1 + task2");
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            let finalOutput;
            task1(1, (output1) => {
                task2(output1, (output2) => {
                    finalOutput = output2;
                    resolve(output2)
                })
            }, 10000)
            
            
        })
    })
}

const promise2 = (task3, task4) => {
    console.log("Executing task3 + task4");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let finalOutput;
            task3(3, (output3) => {
                task4(output3, (output4) => {
                    resolve(output4)
                })
            })
        }, 10000)

        
        
    })
}


const callAsync = async () => {
    try {

        const result1 = await promise1(task1, task2);
        console.log("task1 + task2 = ", result1)
        const result2 = await promise2(task3, task4);
        console.log(`Task3 + Task4 = ${result2}`)


    } catch(err){
        console.log(err)
    }
}

callAsync();
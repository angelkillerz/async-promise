

const task1 = (in1, callback) => {
    console.log(new Date(), "Task 1 is executing");
    setTimeout(()=> {
        //console.log(in1);
        const output = in1 + 1
        console.log(new Date(),"Output: ",in1 , "Task 1 is done")
        callback(output);
    }, 3000)
}

const task2 = (in2, callback) => {
    console.log(new Date(), "Task 2 is executing");
    setTimeout(() => {
        //console.log(in2);
        const output = in2 + 1
        console.log(new Date(),"Output: ",in2 , "Task 2 is done")
        callback(output);
    }, 2000)
}

const task3 = (in3, callback) => {
    console.log(new Date(), "Task 3 is executing");
    
    setTimeout(() => {
        //console.log(in3);
        const output = in3 + 1;
        console.log(new Date(),"Output: ",in3 , 'Task 3 is done')
        callback(output);
    }, 5000)
}

const task4 = (in4, callback) => {
    console.log(new Date(), "Task 4 is executing");
    setTimeout(() => {
        //console.log(in4);
        const output = in4 + 1;
        console.log(new Date(), "Output: ",in4 , 'Task 4 is done')
        callback(output);
    }, 1000)
}
module.exports = 
 { task1, task2, task3, task4 };
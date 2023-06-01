const {task1, task2, task3, task4} = require('./tasks');

const groupTask1 = (number, callback) => {
    let taskCount = 0;
    let total = 0;
   setTimeout(() => {
    
    task1(1, (number) => {
        total += number;
        taskCount += 1;
        if (taskCount >= 2) {
            callback(total);
        }
    });
    task2(2, (number) => {
        total += number;
        taskCount += 1;
        if (taskCount >= 2) {
            callback(total);
        }
    } )
    //console.log("task count = ",taskCount)
    
    
    
   },2000)
}

const groupTask2 = (op, callback) => {
    let taskCount = 0;
    setTimeout(() => {
        
        let total = 0;
        task3(3, (op) => {
            total += op;
            taskCount += 1;
            if (taskCount === 2) {
            
                callback(total);
                
            }
        });
        task4(4, (op) => {
            total += op;
            taskCount += 1;
            if (taskCount === 2) {
            
                callback(total);
                
            }
        } )
        
       },4000)
}


const mixedCallback = (number) => {
    
    groupTask1(number, (op1) => {
        console.log(new Date() ,"Task 1 and Task 2 are done")
        groupTask2(op1, (op2) => {
            console.log(new Date() , "Task 3 and Task 4 are done")
            console.log(new Date() ,op2 ,"All tasks are done")
        });
        
    });
}


mixedCallback(100);
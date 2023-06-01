const {task1,task2,task3,task4} = require('./tasks');


//parallel using callback
const parallelCallback = (number,finalcallback) => {
  
    task1(1,(number) => {
      console.log("Task 1 output:", number);
      
    });
  
    task2(2,(number) => {
      console.log("Task 2 output:", number);
     
    });
  
    task3(3,(number) => {
      console.log("Task 3 output:", number);
      
    });
  
    task4(4,(number) => {
      console.log("Task 4 output:", number);
      
    });
    
    finalcallback();
  };


//O/P
parallelCallback(10, () => {
    console.log("All tasks are done");
  }); 
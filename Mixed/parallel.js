const { task1, task2, task3, task4 } = require("./tasks");
//Runnin in parallel

//Calling all function in parallel

const mainCallingParallel = () => {
    task1(5),
    task2(6),
    task3(7),
    task4(10)
}

mainCallingParallel();
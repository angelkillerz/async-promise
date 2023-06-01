const {p1, p2, p3, p4,} = require('./tasksPromise');

const mainAsync = async (number) => {

    try {
        //chaining await
        const op1 = await p1(number);
        const op2 = await p2(op1);
        const op3 = await p3(op2);
        const op4 = await p4(op3);

    } catch(err) {
        console.log(err)
    }
    

    
    
}


mainAsync(100);
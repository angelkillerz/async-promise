const {p1, p2, p3, p4,} = require('./tasksPromise');

const mainAsync = async (number) => {
    try {
        
        const op1 = await p1;
        const op2 = await p2;
        const op3 = await p3;
        const op4 = await p4;
        console.log(new Date(), op1(number))
        console.log(new Date(), op2(number))
        console.log(new Date(), op3(number))
        console.log(new Date(), op4(number))

    } catch (error) {
        console.log(error)
    }
}

mainAsync(100);
const {p1, p2, p3, p4,} = require('./tasksPromise');


const group1 = async (number) => {
    try {
        const op1 = await p1;
        const op2 = await p2;
        const result1 = op2(op1(number));
        return result1;
        
    } catch (err) {
        console.log(err);
    }
}

const group2 = async (number) => {
    try {
        const op3 = await p3;
        const op4 = await p4;
        const result2 = op4(op3(number))
        return result2;
    } catch (err) {
        console.log(err);
    }
}

const mainAsync = async (number) => {
    try {

        const op1 = await group1(number)
        console.log("Group 1 is done executing")
        const op2 = await group2(op1)
        console.log("Group 2 is done executing")
        return op2;
    } catch (err) {

    }
}

mainAsync(100)
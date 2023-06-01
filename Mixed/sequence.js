const { task1, task2, task3, task4 } = require("./tasks");
const callingSequencePromise = () => {
    console.log("Start the sequence ...")
    //using chaining callbakc func
    task1(1, (output1) => {
        task2(output1, (output2) => {
            task3(output2, (output3) => {
                task4(output3, (output4) => {
                    console.log("Final output")
                } )
            })
        })
    })
}

//calling in sequence
callingSequencePromise();

console.log("start operation");

function sleep(milliseconds)
{
    let startTime=new Date().getTime();
    console.log("operation is running");
    while(new Date.getTime()<startTime+milliseconds)
    {
        console.log("In Progress");

    }
    console.log("operation is done");
}
sleep(1000);

console.log("do something else");

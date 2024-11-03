//const x="1";
//const y="2";

//console.log(x,y);
//console.clear();

//const function1 =() =>console.trace();
//const function2= () =>function1();

//function2();
 
const chalkk= require("chalk");
const progressBar= require("progress");
const bar =new progressBar("downloading [:bar] :rate/bps :parcent :etas",{
    total:20
}

);
const timer =setInterval(()=>
{bar.tick()
    if(bar.complete)
    {
        clear();
    }
},100
);
console.log(chalkk.green("this is node js tutorual"));

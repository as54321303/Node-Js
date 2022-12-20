let a=10;
let b=20;

let waitingData=new Promise((resolve,reject)=>{
    setTimeout(()=>{
       resolve(40)
    },5000)
})


waitingData.then((data)=>{
    console.log(a+data)
})
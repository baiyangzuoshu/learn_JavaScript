let promise=new Promise((resolve,reject)=>{
    //resolve();
    reject();
})

promise
    .then(()=>console.log("then"))
    .catch(()=>console.log("catch"));

console.log(fetch("www.baidu.com"));
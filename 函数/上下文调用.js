let name='全局';

function    getMethod(message){
    console.log(this.name,message);
}

let o1={name:'lisi'};
let o2={name:'zhangsan'};

getMethod();
getMethod.apply(o1,['111']);
getMethod.call(o2,'222');
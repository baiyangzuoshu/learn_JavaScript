function* fun(){
    yield;
}

let fuc=fun();
console.log(fun(),fun,fuc,fuc.next());

function    fix(max){
    let a=0,b=1,arr=[0,1];
    while(arr.length<max){
        [a,b]=[b,a+b];
        arr.push(b);
    }
    return arr;
}
console.log(fix(5));

function*   fix2(max){
    let a=0,b=1,n=0;
    while(n<max){
        yield   a;
        [a,b]=[b,a+b];
        n++;
    }
    return;
}

let f=fix2(10);
console.log(f.next().value);
console.log(f.next().value);
console.log(fix2(10).next().value);
console.log(fix2(10).next().value);

for(let x of fix2(5)){
    console.log(x);
}

function    nameIterator(nameArr){
    let index=0;
    return {
        next:function(){
            return  index<nameArr.length?{value:nameArr[index++],done:false}:
                {value:undefined,done:true}
        }
    }
}

let nameArr=['muxin','taoyuanming','nicai'];
let ni=nameIterator(nameArr);
console.log(ni.next());
console.log(ni.next());
console.log(ni.next());
console.log(ni.next());

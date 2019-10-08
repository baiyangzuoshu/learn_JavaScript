
test2()
function    test2(){
    let m=new Map();
    let o={p:'smfkdsjf'};
    m.set(o,'content');
    console.log(m.get(o));
    console.log(m.has(o),m.delete(o),m.has(o));
}

function    test1(){
    let s=new Set();
    [1,2,3,4,2,2,2,3].forEach(x=>s.add(x));
    for(let i of s){
        console.log(i,s);
    }
}
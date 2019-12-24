let func=new Function('a','b','return a*b');
console.log(func(10,10));

function    sum(){
    let args=arguments;
    let sum=0;
    for(let i=0;i<args.length;i++){
        sum+=args[i];
    }
    return sum;
}

let sumc=new Function(
    'let args=arguments;'+
    'let sum=0;'+
    'for(let i=0;i<args.length;i++){'+
    '    sum+=args[i];'+
    '}'+
    'return sum;'
);

console.log(`sum:${sumc(1,2,3,4,5,6,7,8,9)}`);
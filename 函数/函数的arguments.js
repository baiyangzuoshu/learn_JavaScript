function    foo(a){
    console.log(`arguments:${JSON.stringify(arguments)}`)
    console.log(`length:${foo.length}`)
}

foo(1,2,3);

function    max(){
    console.log(`length:${foo.length}`)
    console.log(`arguments:${JSON.stringify(arguments)}`)

    let args=arguments;
    let maxNum=args[0];
    for(let i=1;i<args.length;i++){
        if(args[i]>maxNum){
            maxNum=args[i];
        }
    }

    return maxNum;
}
console.log(`max:${max(2,5,1,19,20)}`);

function    css(){
    let args=arguments;

    if(args.length===3){
        //设置
    }else if(args.length==2){
        //获取
        return  args[0].style[args[1]];
    }
}

array_test()
function    array_test(){
    console.log(add(...[1,2,3,4,5,6,7,8,9]));
}

function    push(array,...items){
    array.push(...items);
}

function    add(x,y){
    return x+y;
}

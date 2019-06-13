
test5();
function    test5(){
    let arr=[12,32,4,5,12,13,43,55];

    console.log(arr.reduce(function(prev,cur,index,array){
        //console.log(prev,cur,index,array);
        return prev+cur;
    }));
    console.log(arr.reduceRight(function(prev,cur,index,array){
        console.log(prev,cur,index,array);
        return prev+cur;
    }));
    return;
    console.log(arr.every(function(item,index,array){
        console.log(item,index,array);
        return (item>5);
    }));

    console.log(arr.some(function(item,index,array){
        console.log(item,index,array);
        return (item>5);
    }));

    console.log(arr.filter(function(item,index,array){
        console.log(item,index,array);
        return (item>5);
    }))

    console.log(arr.map(function(item,index,array){
        console.log(item,index,array);
        return (item*2);
    }));
}

function    test4(){
    let arr=[1,34,5,61,2];
    let newArr=arr.concat([32,9,0,1]);
    console.log("newArr:",newArr);
    let arr1=arr.slice(1);
    let arr2=arr.slice(2,4);
    console.log(arr1,arr2);
}

function    test3(){
    let arr=[1,32,2,9,76,9,0,4];
    let count=arr.push(100);
    console.log("count:",count);
    let data=arr.pop();
    console.log("data:",data);
}

function    test(){
    let arr=[1,19,0,9,8,45,2];
    arr.length=arr.length+1;
    arr.sort(function(a,b){
        return a-b;
    });
    console.log(arr);
    console.log(Array.isArray(arr));
    console.log(arr.toString());
}

function    test2(){
    let arr=['red','green','blue'];
    console.log(arr.join());
    console.log(arr.join(","));
    console.log(arr.join("|"));
}
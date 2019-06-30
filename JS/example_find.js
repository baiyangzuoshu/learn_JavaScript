
test()
function    test(){
    let arr=[10,2,8,19,5,3,9,5,4,100,98,96,95,45];
    arr.sort(function(a,b){
        return a-b;
    });
    let index=InsertionSearch(arr,4,0,arr.length-1);
    console.log("found index:",index);
}

function    InsertionSearch(arr,value,min,max){
    console.log(arr,value,min,max);
    let index=min+Math.floor((value-arr[min])/(arr[max]-arr[min])*(max-min));
    console.log(value-arr[min],arr[max]-arr[min],max-min,index);
    if(value==arr[index])
        return index;
    else if(value<arr[index])
        return InsertionSearch(arr,value,min,index-1);
    else if(value>arr[index])
        return  InsertionSearch(arr,value,index+1,max);
    return  -1;
}

//O(n)
function    SequenceSearch(arr,value){
    for(let i=0;i<arr.length;i++){
        if(value==arr[i]){
            return i;
        }
    }
    return -1;
}

//连续，升序O(log2^n)
function    binarySearch(arr,value){
    let min=0;
    let max=arr.length-1;//1
    while(min<max){
        console.log(min,max);
        let index=Math.floor((min+max)/2);//min+(max-min)/2
        if(arr[index]==value){
            return index;
        }
        else if(arr[index]>value){
            max=index-1;
        }
        else{
            min=index+1;
        }
    }

    return -1;
}

function    binarySearch2(arr,value,min,max){
    console.log(arr,value,min,max);
    let index=Math.floor((min+max)/2);
    if(value==arr[index])
        return index;
    else if(value>arr[index])
        return binarySearch2(arr,value,index+1,max);
    else if(value<arr[index]){
        return binarySearch2(arr,value,min,index-1);
    }
    return -1;
}
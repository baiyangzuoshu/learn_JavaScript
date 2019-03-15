var obj={}
console.log('obj');

function    handler(a,b,type){
    if(typeof(a)=='number'&&typeof(b)=='number'){
        switch(type){
            case 'add':
                return a+b;
            case 'miut':
                return a-b;
            case 'divide':
                return a/b;
            default:
                return a+b;
        }
    }
    else
        console.log('a,b not is number');
}

var val=handler(10,20,'add');
var val2=handler(10,20,'divide');
console.log('val:'+val+',val2:'+val2);

function    sort(data){
    for(var i=0;i<data.length;i++){
        for(var j=i+1;j<data.length;j++){
            if(data[i]<data[j]){
                var keyV=data[i];
                data[i]=data[j];
                data[j]=keyV;
            }
        }
    }
}


var array=[1,5,6,3,8,1,9];
if(Array.isArray(array)){
    console.log('array:'+array);
}
sort(array);
console.log('array:'+array);
array.push("jwj");
array.push("maomao");
sort(array);
console.log('array:'+array);

var now=new Date();
console.log("now:"+now.toTimeString());
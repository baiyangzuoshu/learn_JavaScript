function    factorial(num){
    if(num<=1)
        return 1;
    else
        return num*factorial(num-1);
}

alert('factorial(10)='+factorial(10));

function    factorial2(num){
    if(num<=1)
        return 1;
    else
        return num*arguments.callee(num-1);
}

alert('factorial2(10)='+factorial2(10));

var  factorial3=(function f(num){
    if(num<=1)
        return 1;
    else
        return num*f(num-1);
}
);

alert('factorial3(10)='+factorial3(10));

function    createFunctions(){
    var result=new Array();

    for(var i=0;i<10;i++){
        result[i]=function(){
            return i;
        };
    }

    return result;
}

var result=createFunctions();
for(var i=0;i<10;i++)
{
    alert('createFunctions()=i:'+i+':'+result[i]());
}


function    createFunctions2(){
    var result=new Array();

    for(var i=0;i<10;i++){
        result[i]=function(num){
            return function(){
                return num;
            };
        }(i);
    }

    return result;
}

result=createFunctions2();
for(var i=0;i<10;i++)
{
    alert('createFunctions()=i:'+i+':'+result[i]);
}
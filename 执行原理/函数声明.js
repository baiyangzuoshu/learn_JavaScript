
function    foo(){}

if(0){
    function foo2(){}
}

//foo2();

if(1){
    function foo(){
        console.log("true")
    }
}
else{
    function foo(){
        console.log("false");
    }
}

foo();

//f()
{
    function f(){console.log("f");}
}



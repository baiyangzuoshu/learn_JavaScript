let length=10;

function    foo(){
    console.log(length);
}

let o={
    length:5,
    method:function(f){
        f();
    }
}

o.method(foo);
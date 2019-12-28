
function    test3(){
    let x=1;
    function    foo(x,y=x){
        console.log(y);
    }

    foo(2);

    function    foo2(y=x){
        let x=3;
        console.log(y);
    }
    foo2(2);
}

function    test1(){
    let x=99;
    function    foo(p=x+1){
        console.log(p);
    }
    
    foo();
    
    x=100;
    foo();//函数参数默认值，非直接传值操作
}

function    test2(){
    function    m1({x=0,y=0}={}){
        console.log(x,y);
    }
    
    function    m2({x,y}={x:0,y:0}){
        console.log(x,y);
    }
    
    m1();
    m2();
    
    m1({x:1,y:1});
    m2({x:1,y:1});
    
    m1({x:1});
    m2({x:1});
    
    m1({y:1});
    m2({y:1});
}

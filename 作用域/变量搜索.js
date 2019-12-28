var num=123;//0级作用域
function    foo(){
    var num=456;//1级作用域
    function    foo1(){
        var num=789;//2级作用域
        console.log(num);
    }
    foo1();
}

//foo();

function    zoo(){
    console.log(num);
}

function    func(){
    var num=456;
    zoo();//zoo的父级作用域不是func的作用域，他们是同等级的作用域
}

func();
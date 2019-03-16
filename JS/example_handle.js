/*
预编译
1.检查通篇的语法错误
2.预编译的过程
3.解释一行，执行一行
console.log(a);
console.log(a);
*/ 

/*
函数声明整体提升，变量只有声明提升，赋值是不提升的
console.log(a);
var a=10;
*/

function test(){
    return a;
    a=1;
    function    a(){}
    var a=2;
}
/*
AO={a:undefined->function a(){}}
*/
console.log(test());

function    test2(){
    a=1;
    function    a(){}
    var a=2;
    return a;
}
/*
AO={
    a:undefined->function a(){}->1->2
}
*/
console.log(test2());
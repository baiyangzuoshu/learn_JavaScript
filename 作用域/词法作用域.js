
{
    let aaa=123;
    var bbb=456;
    const eee=9999;
}
console.log(bbb);
//console.log(eee);
//console.log(aaa);
//只有函数能限定变量的作用域,访问变量的作用域往上(从函数内部->函数外部)进行查找。
function    foo(){
    let s=123;
    var c=456;
    console.log(ddd);//先声明，后赋值
    console.log(ccc);
}
foo();
let ccc=789;
var ddd=111;
//console.log(s,c);
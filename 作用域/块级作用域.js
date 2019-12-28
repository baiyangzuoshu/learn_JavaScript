//从变量定义，到变量所在的语句结束，在这个范围可以被使用
let num=123;
console.log(num);
num=456;
console.log(num);

let name="maomao";
console.log(age);
{
    console.log(name);
    let age=20;
}
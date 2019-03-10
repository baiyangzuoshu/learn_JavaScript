if(true){
    var value=10;
}
alert("value="+value);

for(var i=0;i<10;i++)
{
    i+=2;
}
alert("i="+i);
//由于javascript没有块级作用域，局部变量会放入执行环境中。

var myColor="blue";
function    getColor()
{
    alert('color'+myColor);
}

getColor();

var person={
    age:26,
    sex:'man'
};
alert('age:'+person.age+',sex:'+person.sex);
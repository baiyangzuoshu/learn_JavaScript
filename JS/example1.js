var  data=undefined;//data不赋值编译器自动会给与undefined
alert(typeof(data));
var data2=null;//空对象指针
alert(typeof(data2));
var data3=1000;
alert(typeof(data3));
var data4=function test(){
    print("hello");
}
alert(typeof(data4));
var data5="I am maomao";
alert(typeof(data5)+data5.length);

alert(typeof maomao)
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
GO={
    test2:function test2(){}
}
AO={
    a:undefined->function a(){}->1->2
}
*/

//函数被定义的时候，[[scope]]已经形成了；函数被调用的时候，AO生成
console.log(test2());
//////////////////////////////////////////////////////////////////////////////
function    SuperRunable(name){
    this.name=name;
}
SuperRunable.prototype.run=function(){
    console.log('run:'+this.name);
}
SuperRunable.prototype.clear=function(){
    console.log('clear:'+this.name);
}

function    TheardRun(){}
TheardRun.prototype.runList=new Array();
TheardRun.prototype.addRunable=function(run){
    this.runList.push(run);
}
TheardRun.prototype.handler=function(){
    if(this.runList.length>0){
        console.log(this.runList[0])
        this.runList[0].run();
        this.runList[0].clear();
        this.runList.shift();
    }
}

var myTheard=new TheardRun();
var run1=new SuperRunable('run1');
var run2=new SuperRunable('run2');
myTheard.addRunable(run1);
myTheard.addRunable(run2);
myTheard.handler();
myTheard.handler();


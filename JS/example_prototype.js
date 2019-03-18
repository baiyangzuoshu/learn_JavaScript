//prototype是属于实例化对象，并不是构造函数。__proto__=prototype
function    handphone(){
    this.color='red';
    this.brand='xiaomi';
}
console.log(handphone.prototype);
/** 
 * handphone.prototype.ram='6G'; 
handphone.prototype.rom='64G';
handphone.prototype.screen='18:9';
handphone.prototype.system='Android';
 */

 handphone.prototype={
     ram:'6G',
     rom:'64G',
     screen:'18:9',
     system:'Android'
 }
var hand1=new handphone();
console.log(hand1);

function    Test(){}
Test.prototype.name='proto';

var test1=new Test();
test1.num=1;
console.log(test1);
var test2=new Test();
console.log(test2);

function    Telphone(){}
handphone.prototype.constructor=Telphone;
var iPhone={
    name:'iPhone'
}
hand1.__proto__=iPhone;
function    SuperType(name)
{
    this.name=name;
    this.colors=['red','green','blue'];
}

SuperType.prototype.sayName=function(){
    alert('name:'+this.name);
}

function    SubType(name,age){
    SuperType.call(this,name);
    this.age=age;
}
//1
//SubType.prototype=new SuperType();
//SubType.prototype.constructor=SubType;


///////////////////////////////////////////////寄生组合式继承
function    object(o){
    function F(){}
    F.prototype=o;
    return new F();
}

function    inheritPrototype(obj1,obj2){
    var prototype=object(obj2.prototype);
    prototype.constructor=obj1;
    obj1.prototype=prototype;
}
//2,将1换成2，便是寄生组合式继承
inheritPrototype(SubType,SuperType);
//test
SubType.prototype.sayAge=function(){
    alert('age:'+this.age);
}
var instance1=new SubType('maomao',26);
instance1.sayAge();
instance1.sayName();
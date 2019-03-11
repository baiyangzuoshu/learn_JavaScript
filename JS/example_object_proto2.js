function    SuperType(name){
    this.name=name;
    this.colors=['blue','red','greed'];
}

SuperType.prototype.sayName=function(){
    alert('name:'+this.name);
}

function    SubType(name,age){
    SuperType.call(this,name);
    this.age=age;
}

SubType.prototype=new SuperType();
SubType.prototype.constructor=SubType;
SubType.prototype.sayAge=function(){
    alert('age:'+this.age);
}
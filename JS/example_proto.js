function    Person(){
}

Person.prototype.name='maomao';
Person.prototype.age=26;
Person.prototype.sex='man';
Person.prototype.sayName=function(){
    alert('name:'+this.name);
}

var person1=new Person();
var person2=new Person();
person1.name='jwj';
alert('name' in person1);
alert('jwj is '+person1.hasOwnProperty('name'));
person2.name='jwj';
delete person2.name;//person2.name=null;
alert('maomao is '+person2.hasOwnProperty('name'));

person1.sayName();
person2.sayName();

function    hasPrototypeProperty(object,name){
    return object.hasOwnProperty(name)&&(name in object);
}

var keys=Object.keys(Person.prototype);
alert(keys);
function    Person(name,age,sex)
{
    this.name=name;
    this.age=age;
    this.sex=sex;

    this.sayName=function(){
        alert('name:'+this.name);
    }
}

var person1=new Person('maomao',26,'man');
var person2=new Person('jwj',24,'woman');

person1.sayName();
person2.sayName();
alert(person1 instanceof Person);
alert(person2 instanceof Object);
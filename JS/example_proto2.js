function    Person(){}

var friend=new Person();

Person.prototype={
    name:'maomao',
    age:26,
    sex:'man',
    sayName:function(){
        alert('name:'+this.name);
    }
}

var p1=new Person();
alert(p1 instanceof Person);
alert(p1 instanceof Object); 
alert(p1.constructor==Person);
alert(p1.constructor==Object);
p1.sayName();
friend.sayName();//error
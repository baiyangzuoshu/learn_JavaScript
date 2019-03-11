function    Person(name,age,job){
    this.name=name;
    this.age=age;
    this.job=job;
}

Person.prototype={
    constructor:Person,
    sayName:function(){
        alert('name:'+this.name);
    }
}

var friend=new Person('maomao',26,'c/c++');
friend.sayName();

function    Student(name,age,addr){
    var s=new Object();
    s.name=name;
    s.age=age;
    s.addr=addr;
    s.sayName=function(){
        alert('name:'+this.name);
    }
    return s;
}

var student=new Student('jwj',24,'jiangxi');
student.sayName();


function    SuperType(){
    this.colors=['blue','red','black'];
}

function    SubType(){
    SuperType.call(this);
}

var instancel=new SubType();
instancel.colors.push("green");
alert(instancel.colors);

var instancel2=new SubType();
alert(instancel2.colors);
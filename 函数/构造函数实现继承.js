function    Person(name,age,gender){
    this.name=name,
    this.age=age;
    this.gender=gender;
}

function    Student(name,age,gender,chinese,math,english){
    Person.call(this,name,age,gender);
    this.chinese=chinese;
    this.math=math;
    this.english=english;
}

Student.prototype.sayHello=function(){
    console.log(this.name);
}

let s=new Student('maomao');
s.sayHello();
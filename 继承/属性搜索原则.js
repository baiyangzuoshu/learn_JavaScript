//对象是动态，当我们遍历对象的属性时，顺序是：当前对象->原型对象->原型对象链
function    Person(){
    this.name='maomao'
}

Person.prototype.name='junmao';
//读取
let p=new Person();
console.log(p.name);

//设置
Person.prototype.age=26;
p.age=27;
let p2=new Person();
console.log(p.age,p2.age);

/*
1.原型继承
2.混入继承
3.混合继承：1，2两种结合使用
*/
//1
function    Person(name){
    this.name=name;
}

Person.prototype.sayHello=function(){
    console.log(`I am ${this.name}`);
}

//2
function    extend(obj1,obj2){
    for(let i in obj2){
        console.log(`i:${i}`);
        obj1[i]=obj2[i];
    }
}

//3
function    Man(options){
    extend(this,options);
}

Man.prototype.extend=function(obj){
    extend(this,obj);
}

let p1=new Man({
    name:'maomao'
});

let p2=new Man();
p2.extend({
    name:'junmao'
});

console.log(p1.hasOwnProperty('name'));
console.log(p2.hasOwnProperty('name'));

let woMan={}
//error
let p3=new woMan();
console.log(p3);

function    Func(){}

let o1=new Func();

function    Foo(){}

Func.prototype=new Foo();

let o2=new Func();

console.log(o1 instanceof Func);
console.log(o1.__proto__,o2.__proto__);
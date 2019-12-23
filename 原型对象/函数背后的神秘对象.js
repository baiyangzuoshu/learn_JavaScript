
function    test3()
{
    let o1={
        name:'o1',
        age:26,
        sayHello:function(){
            console.log(`I am ${this.name},${this.age}`);
        }
    }

    let o2={
        name:'o2',
    }

    o2.age=o1.age;
    o2.sayHello=o1.sayHello;
    o2.sayHello();

    //extend/mix
    function    mix(obj1,obj2){
        for(let i in obj2){
            obj1[i]=obj2[i];
        }
    }
}

function    test1()
{
    function    foo(){}
    /*
    1.函数创建，伴随着一个神秘对象的创建，神秘对象的constructor属性指向函数
    2.函数作为构造函数创建出来的对象可以直接操作神秘对象的成员。
    */
    let p=new foo();
    console.log(p,p.constructor===foo);
}

function    test2(){
    let o={
        sayHello:function(){
            console.log(`我是sayHello`);
        }
    }

    let obj=Object.create(o);
    obj.sayHello();

    if(!Object.create){
        Object.create=function(o){
            function    F(){}
            F.prototype=o;
            return new F();
        }
    }
}
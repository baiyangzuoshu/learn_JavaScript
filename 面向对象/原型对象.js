

test4();
function    test4(){
    function    Veiche(){};
    let ve=new Veiche();
    console.log(ve instanceof Veiche);
    console.log(Veiche.prototype.isPrototypeOf(ve));
}

function    test3(){
    function P(){};
    console.log(P.prototype.constructor.name,P.prototype.constructor);

    let p=new P();
    console.log(p.constructor,P.constructor);
    console.log(p.constructor,P.prototype.constructor);
    console.log(p.constructor===P.constructor);
    console.log(p.constructor===P.prototype.constructor);

    function    Const(){};
    let cos=new Const();
    let sin=new cos.constructor();
    console.log(sin instanceof Const);
}

function    test2(){
    console.log(Object.prototype);
    console.log(Object.getPrototypeOf(Object.prototype));//null
    console.log(Object.getPrototypeOf(Array.prototype));//{}

    let MyArray=function(){}
    MyArray.prototype=new Array();
    MyArray.prototype.constructor=MyArray;

    let myarray=new MyArray();
    myarray.push(1,2,5,2);
    console.log(myarray,myarray.length);
    console.log(typeof myarray,myarray instanceof Array);
}

function    test1(){
    function    Animate(name){
        if(name){
            this.name=name;
        }
    }

    Animate.prototype.name='动物';
    Animate.prototype.build="体型";
    Animate.prototype.walk=function(){
        console.log(`${this.name} walking ${this.build}`);
    }

    let animate1=new Animate('大象');
    let animate2=new Animate();
    animate1.build="壮";
    console.log(animate1.name,animate2.name);
    console.log(animate1.build,animate2.build);
    animate1.walk();
    animate2.walk();
}
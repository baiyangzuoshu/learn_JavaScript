function    test1(){
    console.log(JSON.stringify('foo'));
    console.log(JSON.stringify(false));
    console.log(JSON.stringify('false'));
    console.log(JSON.stringify(function t(){}));
    console.log(JSON.stringify(/foo/));
    console.log(JSON.stringify({age:12,name:'zhangsan'}));
}

function    test2(){
    console.log(JSON.stringify(['a','b','c'],['a']));//只针对object
    console.log(JSON.stringify({'a':1,'b':2,'c':3},['a']));

    console.log(JSON.stringify({'a':1,'b':'b','c':3,'d':{'k':1}},f));
    
    function f(k,v){
        if(typeof v ==='number'){
            v=v*2;
        }
        if(typeof v==='string'){
            v=v+'1';
        }
        return  v;
    }
}

function    test3(){
    console.log(JSON.stringify({'a':1,'b':2,'c':'c'},null,'_'));
    console.log(JSON.stringify({'a':1,'b':2,'c':3},null,1));
}

function    test4(){
    let obj={
        firstname:'YOU',
        lastName:'JUNMAO',

        get:function(){
            return this.firstname+this.lastName;
        },
        toJSON:function(){
            return this.firstname+this.lastName;
        }
    }

    console.log(JSON.stringify(obj));
}
test4()
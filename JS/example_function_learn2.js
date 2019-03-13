var name='this is window';

var object={
    name:'this is object',
    getNameFunc:function(){
        return function(){
            return this.name;
        }
    }
};

alert('name:'+object.getNameFunc()());

var object2={
    name:'this is object',
    getNameFunc:function(){
        var that=this;
        return function(){
            return that.name;
        }
    }
}

alert('name:'+object2.getNameFunc()());

function    MyObject(){
    var privateVariable=10;

    function    privateFunction(){
        return false;
    }

    this.publicMethod=function(){
        privateVariable++;
        return privateFunction();
    }
}

var myO=new MyObject();
alert('privateVariable:'+myO.privateVariable);
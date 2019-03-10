function    addSum(num)
{
    return num+100;
}

function    addSum(num)
{
    return num+200;
}

alert("num="+addSum(100));

alert("sum="+getSum(addSum,100));
function    getSum(f_addSum,num)
{
    return f_addSum(num);
}

function    createObjectComparision(propertyName){
    return function(object1,object2){
        var property=object1[propertyName];
        var property2=object2[propertyName];
        if(property>property2)
            return 1;
        else if(property<property2)
            return -1;
        else
            return 0;
    }
}

var data=[{"name":'maomao','age':26,'sex':'man'},{'name':'jwj','age':24,'sex':'woman'}];
data.sort(createObjectComparision('name'));
alert(data[0].name);

function    getAllSum(num){
    if(num<=1)
        return 1;
    else
        return num*arguments.callee(num-1);
}

alert('getAllSum='+getAllSum(10));

window.color='red';
var o={'color':'blue'};

function    sayColor(){
    alert(this.color);
}

sayColor.call(window);
sayColor.call(this);
sayColor.call(o);
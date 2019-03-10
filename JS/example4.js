var person=new Object();
person.name="maomao";
alert('person.name='+person.name);

var man=person;
man.name="I am Man";
alert("man.name="+man.name+',person.name='+person.name);

function  setName(obj)
{
    obj.name="maomao";
    obj=new Object();
    obj.name="Man";
}

var woman=new Object();
setName(woman);
alert(woman instanceof Object);
alert("woman,name="+woman.name);
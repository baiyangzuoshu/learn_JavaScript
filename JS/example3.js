var i=0;
do{
    i=i+2;
}while(i<10)
alert("i="+i);

var j=0;
while(j<10)
{
    j=j+3;
}
alert('j='+j);

j=0;
start:for(var m=0;m<10;m++)
{
    for(var p=0;p<10;p++)
    {
        if(5==m&&5==p)
        {
            break start;
        }
        j++;
    }
}
alert("start="+j);

function    printName(name){
    for(var i=0;i<arguments.length;i++)
    {
        alert('i='+i+',name='+arguments[i]);
    }
}

printName("maomao")
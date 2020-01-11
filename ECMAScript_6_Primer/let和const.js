var a=[];
for(var i=0;i<10;i++){
    a[i]=function(){
        console.log(i);
    }
}

a[6]();

let b=[];
for(let j=0;j<10;j++){
    b[j]=function(){
        console.log(j);
    }
}

b[6]();

for(let j=0;j<3;j++){
    let j='aaa';
    console.log(j);
}
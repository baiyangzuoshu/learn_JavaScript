test4()

function    test4(){
    
}

function    test3(){
    let str="hello";
    for(let i of str){
        console.log(i,str[i]);
    }

    let text=String.fromCodePoint(0x20BB7);
    for(let i=0;i<text.length;i++){
        console.log(text[i]);
    }
    for(let i of text){
        console.log(i);
    }
}

function    test2(){
    console.log('\z'==="z");
    console.log('\172'==="z");
    console.log('\x7A'==="z");
    console.log('\u007A'=="z");
    console.log('\u{7A}'==="z");
}

function    test1(){
    let str="\u{20BB7}";
    console.log(str);

    let str1="\u{41}\u{42}\u{43}";
    console.log(str1,"\u0041");

    let hello=123;
    console.log(hell\u{6F},"\u{6F}");
}

function    test(){
    let str="\u0061";
    console.log(str);

    let str1="\uD842\uDFB7";
    console.log(str1);

    let str2="\u20BB7";
    console.log(str2);
}
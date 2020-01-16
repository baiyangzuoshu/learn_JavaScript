
test3()

function    test3(){
    let str="   a       ";
    console.log(str.trim());
    console.log(str.trimEnd());
    console.log(str.trimStart());
}

function    test2(){
    let v1='1';
    let v2='11';
    console.log(v1.padStart(2,'0'));
    console.log(v2.padStart(2,'0'));
    console.log(v1.padEnd(2,'0'));
    console.log(v2.padEnd(2,'0'));
}

function    test1(){
    let str="Hello world";
    console.log(str.startsWith('Hello',0));
    console.log(str.endsWith("world",5));
    console.log(str.includes("or"));
    console.log(str.repeat(3));

}

function    test(){
    console.log(String.fromCharCode(0x20BB7));
    console.log(String.fromCodePoint(0x20BB7));

    let str=String.fromCodePoint(0x20BB7);
    console.log(str.length,str.charAt(0),str.charAt(1));
    console.log(str.length,str.charCodeAt(0),str.charCodeAt(1));
}
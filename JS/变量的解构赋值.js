
test4()
function    test4(){
    let jsonData={
        kk:123,
        str:'str',
        data:[123,543,231]
    }

    let {data,kk,str}=jsonData;
    console.log(data,kk,str);
}

function    test3(){
    let x=3;
    let y=4;
    console.log(x,y);
    [x,y]=[y,x];
    console.log(x,y);

    function    explame(){
        return [1,2,3];
    }
    let [m,n,k]=explame();
    console.log(m,n,k);

    function    explame2(){
        return {
            'aaa':123,
            'bbb':123456
        }
    }
    let {aaa,bbb}=explame2();
    console.log(aaa,bbb);
}

function    test2(){
    let [foo,[[bar],baz]]=[1,[[2],3]];
    console.log(foo,bar,baz);
    let [x,,y]=[7,8,9];
    console.log(x,y);
    let [foot,...head]=[1,2,3,4,5,6];
    console.log(foot,head);
}

function    test1(){
    let a=1;
    let b=2;
    let c=3;

    let [e,f,m]=[4,5,6];
    console.log(a,b,c,e,f,m);
}
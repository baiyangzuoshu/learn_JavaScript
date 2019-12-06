//应用
Set_test9()
function    Set_test9(){
    let set=new Set([1,2,3]);
    let newSet=new Set([...set].map(val=>val*2));
    console.log(newSet);

    let OldSet=new Set(Array.from(set,val=>val*2));
    console.log(OldSet);
}

function    Set_test8(){
    let a=new Set([1,2,3]);
    let b=new Set([4,3,2]);

    let union=new Set([...a,...b]);
    console.log(union);

    let intersect=new Set([...a].filter(x=>b.has(x)));
    console.log(intersect);

    let difference=new Set([...a].filter(x=>!b.has(x)));
    console.log(difference);
}

function    Set_test7(){
    let set=new Set([1,2,3,4]);
    console.log([...set]);

    let newSet=new Set([...set].map(x=>x*2));
    console.log([...newSet]);

    let OldSet=new Set([...set].filter(x=>(x%2)==0));
    console.log([...OldSet]);
}

//遍历
function    Set_test6(){
    let s=new Set([1,3,4,7,5,4,{'YJM':5}]);
    for(let item of s.keys()){
        console.log(item);
    }
    //Set键名和键值一样
    for(let item of s.values()){
        console.log(item);
    }

    for(let item of s.entries()){
        console.log(item);
    }
}

function    Set_test5(){
    console.log(dedupe([1,2,3,5,5,5,'5','6','5']));
}

function    dedupe(array){
    return  Array.from(new Set(array));
}

function    Set_test4(){
    let properties={
        width:1,
        height:1
    }

    if(properties['someName']){
        console.log('someName');
    }

    let properties2=new Set();
    properties2.add('width');
    properties2.add('height');
    if(properties2.has('width')){
        console.log('width');
    }
}

function    Set_test3(){
    let s=new Set();
    s.add(1).add(2).add(2);
    console.log(`size:${s.size}`)
    console.log(`s.has(1):${s.has(1)}`);
    console.log(`s.has(2):${s.has(2)}`);
    console.log(`s.has(4):${s.has(4)}`);
    s.delete(2)
    console.log(`s.has(2):${s.has(2)}`);
}

function    Set_test2(){
    let set=new Set();
    let a=NaN;
    let b=NaN;
    set.add(a);
    set.add(b);
    console.log(set,[...set]);

    let set2=new Set();
    set2.add({});
    console.log(`size:${set2.size}`);
    set2.add({});
    console.log(`size:${set2.size}`);
}

function    Set_test(){
    let s=new Set();
    [2,3,4,5,2,2].forEach(x=>s.add(x));

    for(let i of s){
        console.log(i);
    }
    //不可重复的数组
    let set=new Set([1,2,3,4,5,2,2,3]);
    console.log([...set],set.size)
    console.log([...new Set('abcabsd')].join(''))
}


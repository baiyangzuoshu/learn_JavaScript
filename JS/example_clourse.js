function    test(){
    var num=1;
    function    add(){
        num++;
        console.log('num:'+num);
    }

    function    reduce(){
        num--;
        console.log('num:'+num);
    }

    return  [add,reduce];
}

var myTest=test();
myTest[0]();
myTest[1]();
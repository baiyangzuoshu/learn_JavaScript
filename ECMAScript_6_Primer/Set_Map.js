
function    WeakSet1(){
    const   ws=new  WeakSet();
   // ws.add(1);//error 只能是对象
   // ws.add(Symbol());//error
    ws.add([1,2,3,4]);
}

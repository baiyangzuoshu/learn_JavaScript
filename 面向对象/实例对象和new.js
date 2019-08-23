
test1()
function    test1(){
    function Vectrion(){
        'use strict';
        this.argv1='1';
        this.argv2='2';
    }

    function    Sub(argv1,argv2){
        if(!(this instanceof Sub)){
            return new  Sub(argv1,argv2);
        }
        this.argv1=argv1;
        this.argv2=argv2;
    }

    console.log(Sub(1,2).argv2);
}
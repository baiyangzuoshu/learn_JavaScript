
function test1(){
    class   Point{
        constructor(x,y){
            this.x=x;
            this.y=y;
        }
    
        setX(x){
            this.x=x;
        }
    
        setY(y){
            this.y=y;
        }
    
        printXAndY(){
            console.log('x:'+this.x+',y:'+this.y);
        }
    }
    let p=new Point(1,2);
    p.printXAndY();
    
}

function    test2(){
    class Person{
        constructor(name,sex){
            this.name=name;
            this.sex=sex;
        }
    
        printInfo(){
            console.log('name:'+this.name+',sex:'+this.sex);
        }
    }
    
    class Man extends Person{
        constructor(name,sex,job){
            super(name,sex);
            this.name=name;
            this.sex=sex;
            this.job=job;
        }

        printInfo(){
            console.log('name:'+this.name+',sex:'+this.sex+',job='+this.job);
        }
    }

    let man=new Man('maomao','man','it');
    man.printInfo();
}

test2();


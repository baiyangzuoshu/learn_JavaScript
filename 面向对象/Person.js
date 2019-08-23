class   Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
}

class   Man extends Person{
    constructor(name,age){
        super(name,age);
    }

    print(){
        console.log(`name:${this.name},age:${this.age}`);
    }
}

module.exprots={
    Man
}
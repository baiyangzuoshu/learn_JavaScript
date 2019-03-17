function    toUpperCase(str){
    return str.toUpperCase();
}

function    exclaim(str){
    return str+'!';
}

function    compose(f,g){
    return function(x){
        return f(g(x));//左倾
    }
}

var f=compose(exclaim,toUpperCase);
console.log(f('hello'));
//(?:x)：匹配x但不记住，称为非捕获括号，因为分组只有9个
console.log(('hello hello world').match(/(hello){1,2}/));
console.log(('hello hello world').match(/(?:hello){1,2}/));
//(?=x)
console.log(('hello helloworld').match(/hello(?=world)/));
//(?!x)
console.log(('hello helloworld').match(/hello(?!world)/));

//(y|x)
console.log(('hello hellx').match(/hell(o|x)/));

//[]:
console.log(('hello hellp').match(/hell[opl]/g));
console.log(('hello hellp').match(/hell[^abc]/g));

console.log(('278kfjsk38932dkf 28392sdkjfks').match(/[0-9]+[a-z]+/g));
console.log(('278kfjsk38932dkf 28392sdkjfks').match(/[0-9a-zA-Z]+/g));
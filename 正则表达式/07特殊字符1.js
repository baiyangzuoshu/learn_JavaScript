//\b：单词边界
console.log(('hello world helloworld worldhello').match(/hello\b/ig));
console.log(('hello world helloworld worldhello').match(/\bhello\b/ig));
console.log(('hello world helloworld worldhello').match(/\bhello/ig));
console.log(('hello world helloworld worldhello').match(/\Bhello/ig));
//
console.log(('a* absdfj a**').match(/a\*+/g));

console.log(('123sfjdsj 12jdjs8nk u8usdfjsk 88').match(/\d+/g));
console.log(('123sfjdsj 12jdjs8nk u8usdfjsk 88').match(/\D+/g));

console.log(('djfsd  sjdkj skdfks  skdfk    sd   dsf').match(/d\s/g));

console.log(('sfjos 77sjdfjs_ sjdfj` dklfksl6^').match(/\w+/g));
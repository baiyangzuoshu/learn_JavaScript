let str='abcba abcbcdc dddhhh kkkbbb lll';
console.log(str.match(/ab*/g));

//let reg=new RegExp('ab*c');
let reg=new RegExp('ab*c','g');
console.log(reg.exec(str));
console.log(reg.exec(str));
console.log(reg.exec(str));
//*:0个或者多个
let reg2=new RegExp('a(b*)c');
console.log(reg2.exec('abbca abcd djkfj nabc'));

//reg.test
let reg3=new RegExp('(\\w+)(\\d+)');
console.log(reg3.test('fjsif 232 sffd'));
//reg.search
console.log(('dfjisjfi 123fjidf789').search(/i*df/));
//reg.replace
console.log(('aabbcc jjaabbkk aabbcj').replace(/aabbc*/g,'mmnn'));
//reg.split，+:一个或者多个
console.log(('aabbcc jjjaa kkaa ,mmaa').split(/aab+/g));
console.log(('aabbcc  jjjaa kkaa ,mmaa').split(/\s+/g));
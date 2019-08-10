//验证手机号
let reg=/1[34578]\d{9}/;
console.log(reg.test('1833395634'));

//把手机号替换为****
console.log(("我是茂茂，手机号是：18331956340").replace(reg,'***'));

//网页标签匹配
let reg2=/<(.+)>(.+)<\/\1>/;
console.log(('fsdhfsj<div>baiyangzuoshu@163.com</div>').match(reg2));

//网页找手机号码

//敏感词替换
let str='   wjeofjs sjfj wkwofkw      ';
console.log(str,str.replace(/^\s+|\s+$/g,''));

//千位分割
console.log(('379274298329493').replace(/(\d)(?=(?:\d{3})+$)/g,'$1,'));
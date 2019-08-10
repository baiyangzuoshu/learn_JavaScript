//():捕获括号，匹配并记住
console.log(('fred fred').match(/(fred)+/));
console.log(('fred d fred d').match(/(fred) (d) (fred) (d)/));
console.log(('fred d fred d').match(/(fred) (d) \1\2/));
console.log(('fred d fred d').match(/(fred) (d) \1 \2/));

console.log(('abcabc').match(/(.)b(.)/));
console.log(('abcabc').match(/(.)b(.)(.)b(.)/));
console.log(('abcabc').match(/(.)b(.)\1b\2/));

console.log(('hello world').replace(/(\w+) (\w+)/,'$2 $1'));

console.log(new RegExp('(e)','g').exec('hello world'));
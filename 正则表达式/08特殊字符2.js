//^:匹配一行的开始;$:匹配一行的结束
console.log(('aabb djfsk sjdkab ab').match(/^a/ig));
console.log(('aabb djfsk sjdkab ab').match(/b$/ig));
//.:匹配换行字符以外的字符
console.log(('ahdhf sjdkjs aabb aabc').match(/aab./ig));
//i忽略大小写，m多行模式,g全局搜索
console.log(('aabb AABB ccAaBb').match(/a+b+/ig));
//次数,+：一个或者多个；*：0个或者多个；{n}：n个;{n,m}:n到m区域次数;?:匹配0次或者多次
console.log(('aAabb sjdkfj aaaa bbb').match(/a{3}b+/ig));
console.log(('aabbb aabb aabbbbb').match(/a{2}b{2,5}/ig));

console.log(('aaabbb aaaabb aabbb bbbaa').match(/aa*/ig));
console.log(('aaabbb aaaabb aabbb bbbaa').match(/aa?/ig));
console.log(('aaabbb aaaabb aabbb bbbaa').match(/aa*?/ig));
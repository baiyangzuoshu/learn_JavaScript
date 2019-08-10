let str='jsf899djs111nk3jk3223004r3n1';
let arrResult=[];
let strTmp='';
for(let i in str){
    if(str.charAt(i)>='0'&&str.charAt(i)<='9'){
        strTmp+=str.charAt(i);
    }
    else{
        if(strTmp!==''){
            arrResult.push(strTmp);
            strTmp='';
        }
    }
}

if(strTmp!==''){
    arrResult.push(strTmp);
    strTmp='';
}

console.log(`arrResult:${arrResult}`);
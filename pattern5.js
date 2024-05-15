console.log("*******");
let rows=7; 
let pattern="";
for(let n=1;n<=rows;n++){
    for(let space=0;space<=rows-1;space++){
        pattern +=" ";
    }
    for(let num=1;num<=1;num++){
        pattern +="*";
    }
    pattern +="\n";
}
console.log(pattern);
let rows=5;
let pattern="";

for(let n=1;n<=rows;n++){
    for(let space=0;space<rows-n;space++){
        pattern +=" ";
    }
    for(let num=0;num<n;num++){
        pattern +="*";
    }
    pattern +="\n";
} 
for(let n=1;n<=rows-1;n++){
    for(let space=0;space<n;space++){
        pattern +=" ";
    }
    for(let num=0;num<rows-n;num++){
        pattern +="*";
    }
    pattern +="\n";
}
console.log(pattern);
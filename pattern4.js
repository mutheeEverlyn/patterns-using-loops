let rows=5;
let pattern="";
//upside pyramid
for(let n=1;n<=rows;n++){
    for(let space=rows;space>n;space--){
      pattern +=" ";
    }
    for(let num=0;num<n*2-1;num++){
        pattern +="*";
    }
    pattern +="\n";
}
//downside pyramid
for(let n=1;n<rows;n++){
    for(let space=0;space<n;space ++){
        pattern +=" ";
    }
    for(let num=0;num<2*(rows-n)-1;num++){
        pattern +="*";
    }
    pattern +="\n";
}
 console.log(pattern);
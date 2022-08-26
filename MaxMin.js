let max=100;
let min=99;

function generateRandom(){
    return Math.round(Math.random() * 98 +100);
}

for(let i=1;i<=5;i++){
    let num=generateRandom();
    console.log("number " + i +  " " +num);
    if(num<min)
    min=num;
    if(num>max)
    max=num;
}

console.log("max " + max);
console.log("min " +min);
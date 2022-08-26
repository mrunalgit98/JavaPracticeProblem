const prompt = require('prompt-sync')();

let date = prompt("Enter day  ");
let month = prompt("Enter Month ");
let year = prompt("Enter Year : ");
console.log("Date : " + date + "/" + month + "/" + year);


if (month<3 || month>6) 
	console.log("False"); 
else if((date<20 && month==3) || (date>20 && month==6)) 
	console.log("False");
else
    console.log("True");
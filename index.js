const opt= document.getElementById("otp");
const num1= document.getElementById("num1");
const num2= document.getElementById("num2");
const num3= document.getElementById("num3");
const num4= document.getElementById("num4");
const min=0;
const max= 9;
let randomNum1;
let randomNum2;
let randomNum3;
let randomNum4;

otp.onclick = function (){
    randomNum1 = Math.floor(Math.random()*max)+min;
    randomNum2 = Math.floor(Math.random()*max)+min;
    randomNum3 = Math.floor(Math.random()*max)+min;
    randomNum4 = Math.floor(Math.random()*max)+min;
    num1.textContent = randomNum1;
    num2.textContent = randomNum2;
    num3.textContent = randomNum3;
    num4.textContent = randomNum4;

}

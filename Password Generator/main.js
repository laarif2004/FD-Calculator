const lowercaseLetters="abcdefghijklmnopqrstuvwxyz";
const uppercaseLetters="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers="0123456789";
const symbols="#$%&!()*[_]";

const lengthe1=document.getElementById("length");
const lower=document.getElementById("lowercase");
const upper=document.getElementById("uppercase");
const nb=document.getElementById("numbers");
const syb=document.getElementById("symbols");
const btn=document.getElementById("generate");
const passw=document.getElementById("password");
let s=0;
btn.addEventListener("click",function(){
    s++;
    const leng=lengthe1.value;
    let charc="";
    let password="";
    if(lower.checked){
        charc+=lowercaseLetters;
    }
    if(upper.checked){
        charc+=uppercaseLetters;
    }
    if(nb.checked){
        charc+=numbers;
    }
    if(syb.checked){
        charc+=symbols;
    }
    for (let i=0 ;i<leng ;i++){
        password+=charc.charAt(Math.floor(Math.floor(Math.random()*charc.length)));
    }
    passw.value=password;
})
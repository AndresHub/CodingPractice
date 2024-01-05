const num1 = Math.ceil(Math.random()*10);
const num2 = Math.ceil(Math.random()*10);
const scoreEl =document.getElementById("score");
let score= JSON.parse(localStorage.getItem("score"));
if(!score){
    score = 0;
}
scoreEl.innerText = `score: ${score}`;
const questionEl = document.getElementById("question");
const formEl = document.getElementById("form");

questionEl.innerText = `What is ${num1} multiply by ${num2}?`;

const correctAns = num1 * num2;
const inputEl = document.getElementById("input");

formEl.addEventListener("submit", ()=>{
    const usrAns = +inputEl.value
    if (usrAns === correctAns){
        score++
        localStr()
        
    }else{
        score--
        localStr()
        
    }

});

function localStr(){
    localStorage.setItem("score", JSON.stringify(score))
}
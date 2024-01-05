const textareaEl = document.getElementById("textarea")
const totalcounterEl = document.getElementById("totalcounter");
const remainingcounterEl = document.getElementById("remainingcounter");

textareaEl.addEventListener("keyup", ()=>{
    updateCounter()
});

updateCounter()

function updateCounter(){
    totalcounterEl.innerText = textareaEl.value.length
    remainingcounterEl.innerText = textareaEl.getAttribute("maxLength") - textareaEl.value.length
}


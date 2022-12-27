
const textareaEl = document.getElementById("textarea");

const toltalCounterEL = document.getElementById("total-counter");

const remainingCounterEl = document.getElementById("remaining-counter");

textareaEl.addEventListener("keyup", ()=>{
    updateCounter();
});

updateCounter()

function updateCounter(){
    toltalCounterEL.innerText = textareaEl.value.length;
    remainingCounterEl.innerText = textareaEl.getAttribute("maxLength") - textareaEl.value.length;
}
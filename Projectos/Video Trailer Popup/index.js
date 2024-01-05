const btnEl = document.querySelector(".btn");
const closeIconEl = document.querySelector(".close-icon");
const trailerConstainerEl = document.querySelector(".trailer-container");
const videoEl = document.querySelector("video");
btnEl.addEventListener("click", ()=>{
    trailerConstainerEl.classList.remove("active");

})

closeIconEl.addEventListener("click", ()=>{
    trailerConstainerEl.classList.add("active");
    videoEl.pause();
    videoEl.currentTime = 0;
})
const containerEl = document.querySelector(".container");
const careers = ["Hello, I am Yoo.", "Who are You?", "I am Me, Who are You!?"]

let careersIndex = 0;

let characterIndex = 0;

updateText();

function updateText(){
    characterIndex++;
    containerEl.innerHTML = `<h1>${careers[careersIndex].slice(0,characterIndex)}</h1>`;
    
    if(characterIndex === careers[careersIndex].length){
        careersIndex++;
        characterIndex = 0;
    }
    if(careersIndex === careers.length){
        careersIndex = 0;
    }
    setTimeout(updateText, 400);
};


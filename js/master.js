const userInput = document.querySelector(".input");
const btn = document.querySelector(".btn");
const dismissBtn = document.querySelector(".dismiss-btn");
const errParagraph = document.querySelector(".erorr-msg");
const template = document.querySelector(".template");
const confirm = document.querySelector(".confirm");

btn.addEventListener("click", (e) => {
    if (valiaEmail(userInput)) {
        console.log("Validate");
        template.style.cssText = "display:none";
        confirm.style.cssText = "display:flex";
    }
    else {
        console.log("Not Validate");
        errParagraph.style.cssText = "display:flex";
        userInput.style = "border: 3px solid rgb(245, 182, 182) ; background - color: rgb(245, 182, 182)";
    }
});

dismissBtn.addEventListener("click", (e) => {
    template.style.cssText = "display:flex";
    confirm.style.cssText = "display:none";
});

function valiaEmail(userInput) {
    var validReg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (userInput.value.match(validReg)) {
        return true;
    }
    else {
        return false;
    }

}

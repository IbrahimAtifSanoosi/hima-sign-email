let userInput = document.querySelector(".input");
let btn = document.querySelector(".btn");
let dismissBtn = document.querySelector(".dismiss-btn");
let errParagraph = document.querySelector(".erorr-msg");
let errInput = document.querySelector(".erorr-input");
let template = document.querySelector(".template");
let confirm = document.querySelector(".confirm");

btn.addEventListener("click", (e) => {
    valiaEmail();
});

dismissBtn.addEventListener("click", (e) => {
    template.style.cssText = "display:flex";
    confirm.style.cssText = "display:none";
});

function valiaEmail() {
    var validReg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    console.log(userInput.value.match(validReg));


    if (userInput.value.match(validReg) || errInput.value.match(validReg)) {
        template.style.cssText = "display:none";
        confirm.style.cssText = "display:flex";
    }
    else {
        userInput.style.cssText = "display:none";
        errParagraph.style.cssText = "display:flex";
        // errInput.value = userInput.value;
        errInput.style.cssText = "display:flex";
    }

}

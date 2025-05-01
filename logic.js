let openEnve = document.querySelector(".open_enve");
let letter = document.querySelector(".letter");
let withLetter = document.querySelector(".con2");

openEnve.addEventListener("click", ()=> {
    openEnve.style.display="none";
    withLetter.style.display="block";

    setTimeout(() => {
        letter.classList.add("pop");
    }, 300);
})
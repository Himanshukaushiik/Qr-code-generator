let btn = document.querySelector(".btn");
let img = document.querySelector(".qrBox img");
let box = document.querySelector(".qrBox");
let input = document.querySelector("input");

btn.addEventListener("click", () => {

    let text = input.value;

    if(text === "") return;

    img.src = "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=" + text;

    box.style.display = "block"; 
});
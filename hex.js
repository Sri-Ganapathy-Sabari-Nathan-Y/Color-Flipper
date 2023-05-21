const Hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");
const body = document.body;

const getRandomNumber = ()=>{
    return Math.floor(Math.random()*Hex.length);
}

btn.addEventListener("click", (event) => {
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
        hexColor+=Hex[getRandomNumber()];
    }
    let background = hexColor;
    body.style.backgroundColor = background;
    color.textContent = background;
})
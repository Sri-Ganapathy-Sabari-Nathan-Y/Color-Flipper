const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");
const body = document.body;

const getRandomNumber = ()=>{
    return Math.floor(Math.random()*colors.length);
}

btn.addEventListener("click", (event) => {
    let randomNumber = getRandomNumber();
    let background = colors[randomNumber];
    body.style.backgroundColor = background;
    color.textContent = background;
})
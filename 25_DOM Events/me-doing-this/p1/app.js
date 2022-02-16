const btn = document.querySelector("#color-changer");
const text = document.querySelector("h1");

btn.addEventListener('click', () => {
    let newColor = generateRandomColor();
    document.body.style.backgroundColor = newColor;
    text.innerHTML = newColor;
})

const generateRandomColor = () => {
    let r = Math.floor((Math.random() * 256));
    let g = Math.floor((Math.random() * 256));
    let b = Math.floor((Math.random() * 256));
    return `rgb( ${r}, ${g}, ${b})`;
}
const generateRandomColor = () => {
    let r = Math.floor((Math.random() * 256));
    let g = Math.floor((Math.random() * 256));
    let b = Math.floor((Math.random() * 256));
    return `rgb( ${r}, ${g}, ${b})`;
}

// If you need to use keyword "this", you need to use them in normal functions and not in function expressions.
function colorize(){
    this.style.backgroundColor = generateRandomColor();
    this.style.color = generateRandomColor();
}

const buttons = document.querySelectorAll("button");

buttons.forEach(btn => {
    btn.addEventListener('click', colorize);
});
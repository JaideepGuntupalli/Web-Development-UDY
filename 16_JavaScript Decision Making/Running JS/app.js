function isEven(num) {
    if (num % 2 === 0) {
        alert("The number is even");
    } else if (num % 2 === 1) {
        alert("The number is odd");
    } else {
        alert("The number is invalid");
    }
}
let cnt = 1;
while (cnt < 2) {
    let num = prompt("Enter a number");
    if (num === "") {
        break;
    }
    isEven(num);
    cnt++;
}

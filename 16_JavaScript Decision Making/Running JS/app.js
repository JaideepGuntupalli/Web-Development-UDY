function isEven(num) {
    //WRITE YOUR CODE BETWEEN THIS LINE: ↓ ↓ ↓ ↓
    if (num % 2 === 0) {
        console.log("even");
    } else if (num % 2 === 1) {
        console.log("odd");
    } else {
        console.log("invalid");
    }
    //AND THIS LINE ↑↑↑↑↑
}
let num = prompt("Enter a number: ");
num = parseInt(num);
isEven(num);

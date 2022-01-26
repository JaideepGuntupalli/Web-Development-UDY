// const myMath = {
//     PI: 3.1415,
//     square: function(num){
//         return num*num;
//     },
//     cube: function(num){
//         return num*num*num;
//     }
// }

//Alternative/ Short hand method
const myMath = {
    PI: 3.1415,
    square(num){
        return num*num;
    },
    cube(num){
        return num*num*num;
    }
}

console.log(myMath.PI);
console.log(myMath.square(2));
console.log(myMath.cube(2));
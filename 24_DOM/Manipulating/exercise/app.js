// WRITE YOUR CODE IN HERE:
function newbuttons(){
    let newB = document.createElement('button');
    newB.innerText = "Jaideep";
    return newB;
}

const container = document.querySelector('#container')
for(let i = 0; i<100; i++){
    container.appendChild(newbuttons());
}
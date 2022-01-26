function rollDie(sideNo) {
    return Math.floor(Math.random() * sideNo) + 1;
}

for(let i = 0; i<=10; i++){
    console.log(rollDie(100));
}
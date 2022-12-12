function randomNumber(min, max){
    return Math.floor(Math.random() * (max - min) + min);
}

console.log(randomNumber(0, 4))
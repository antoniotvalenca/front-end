function contagemRegressiva(seconds){
    let counter = seconds;

    let interval = setInterval(()=>{
        console.log(counter);
        counter--;}, 1000);

    function pararHora(){
        clearInterval(interval);
    };

    setTimeout(pararHora, 1000*seconds);

}


contagemRegressiva(10);

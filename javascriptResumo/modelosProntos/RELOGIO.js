function funcaoHora(){
    const data = new Date();

    return data.toLocaleTimeString('pt-BR',{
        hour12: false
    });
}

function printaHora(){
    console.log(funcaoHora());
}

const x = setInterval(printaHora, 1000);

function paraHora(){
    clearInterval(x);
}

setTimeout(paraHora, 3000);
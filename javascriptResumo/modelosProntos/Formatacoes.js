//FORMATAÇOES//
_______________________________________

//DATA//
const data = new Date(eiojforif);

const formatDate = (data) => {
    return ((data.getDate() )) + "/" + ((data.getMonth() + 1)) + "/" + data.getFullYear();
}

_______________________________________

//FORMATAR DINHEIRO//

const formatPrice = price => {
    return price.toLocaleString('pt-BR', {
    style: 'currency', currency: 'BRL'})
};

//pro formato R$40,00
_______________________________________

//FORMATAR SEARCH//


const formatSearch = search => {
    const searchFormated = search.toLowerCase().replace(/(?:^|\s)\S/g, firstLetter => {
        return firstLetter.toUpperCase();
    });

    return searchFormated;
};

//vai desonsiderar maiuscula/minuscula etc
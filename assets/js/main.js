// Aqui veremos em qual página o cliente está navegando
window.onload = function () {
    // todo: sempre criar variavel com nome minusculo
    var url = window.location.href;

    // todo: remover todos console.log que não esteja utilizando    
    
    if  (url.indexOf('checkout') != -1 ) {

        // todo: criar uma variavel para os elementos, para não ficar repetindo código
        var elementHeineken = document.getElementsByClassName('heineken'); 
        var heineken = getElementValue(elementHeineken);    
        var elementCoruja = document.getElementsByClassName('coruja');
        var coruja = getElementValue(elementCoruja);     
        var elementQuilmes = document.getElementsByClassName('quilmes');
        var quilmes = getElementValue(elementQuilmes);        
        var elementDeus = document.getElementsByClassName('deus');
        var deus = getElementValue(elementDeus); 
        
        totalPedido = (heineken + coruja + quilmes + deus)          

        // Segue codigo que ira mostrar no console os inputs
        // todo: utilizar a função printData....

        setBlurEventById('nome');                   // conteuno de nome      
        setBlurEventByClassName('sobrenome', 0);    // conteudo de sobrenome
        setBlurEventByTagName('input', 2);          // conteudo de CPF
        setBlurEventByName('email', 0);             // conteudo de email
        setBlurEventByTagName('input', 4);          // conteudo de telefone
        setBlurEventByName('celular', 0);           // conteudo de celular
        setBlurEventById('cep')                     // conteudo de cep
        setBlurEventByClassName('rua', 0)           // conteudo de rua
        document.getElementsByTagName('input')[8].addEventListener('blur', printData);        // conteudo de bairro
        document.getElementsByName('cidade')[0].addEventListener('blur', printData);          // conteudo de cidade
        document.getElementsByTagName('input')[10].addEventListener('blur', printData);       // conteudo de estado
        document.getElementsByName('pais')[0].addEventListener('blur', printData);            // conteudo de pais

        // Altera Valor Total com formatação pt-BR:        
        document.getElementsByTagName('span')[8].innerHTML = totalPedido.toLocaleString('pt-BR', {style:'currency', 'currency': 'BRL'});

        // Aiciona link no botão "Finalizar compra"
        document.getElementsByClassName('main-btn standard-one')[0].href = "./confirmation.html";

    } else if (url.indexOf('confirmation.html') != -1){

        // Adiciona numero de pedido ao console
        console.log("numero do " + (document.getElementsByClassName('header-title')[0].textContent).toLocaleLowerCase())        
    }   
} 

function setBlurEventById(id) {
    document.getElementById(id).addEventListener('blur', printData);    
}

function setBlurEventByClassName(classe, position) {
    document.getElementsByClassName(classe)[position].addEventListener('blur', printData);
}

function setBlurEventByTagName(tagName, position) {
    document.getElementsByTagName(tagName)[position].addEventListener('blur', printData);    
}

function setBlurEventByName (name, position) {
    document.getElementsByName(name)[position].addEventListener('blur', printData);
}

function printData(event) {
    console.log(event.target.parentElement.parentElement.children[0].innerText + ': ' + event.target.value);
}

function getElementValue(element) {
    return parseFloat(element[1].innerHTML.replace('R$ ','')) * parseFloat(element[0].children[0].innerHTML);
}
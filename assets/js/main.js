// Aqui veremos em qual página o cliente está navegando
window.onload = function () {
    // todo: sempre criar variavel com nome minusculo
    var url = window.location.href;

    // todo: remover todos console.log que não esteja utilizando        
    if  (url.indexOf('checkout') != -1 ) {

        // todo: criar uma variavel para os elementos, para não ficar repetindo código
        var elementHeineken = document.getElementsByClassName('heineken'); 
        var elementCoruja = document.getElementsByClassName('coruja');
        var elementQuilmes = document.getElementsByClassName('quilmes');
        var elementDeus = document.getElementsByClassName('deus');
        
        // Segue codigo que ira mostrar no console os inputs
        // todo: utilizar a função printData....
        setBlurEventById('nome');                   // conteudo de nome      
        setBlurEventByClassName('sobrenome');    // conteudo de sobrenome
        setBlurEventByTagName('input', 2);          // conteudo de CPF
        setBlurEventByName('email');             // conteudo de email
        setBlurEventByTagName('input', 4);          // conteudo de telefone
        setBlurEventByName('celular');           // conteudo de celular
        setBlurEventById('cep');                    // conteudo de cep
        setBlurEventByClassName('rua');          // conteudo de rua
        setBlurEventByTagName('input', 8);          // conteudo de bairro
        setBlurEventByName('cidade');            // conteudo de cidade
        setBlurEventByTagName('input', 10);         // conteudo de estado
        setBlurEventByName('pais');              // conteudo de pais
        
        var heineken = getElementValue(elementHeineken);    
        var coruja = getElementValue(elementCoruja);     
        var quilmes = getElementValue(elementQuilmes);        
        var deus = getElementValue(elementDeus); 
        
        totalPedido = (heineken + coruja + quilmes + deus).toLocaleString('pt-BR', {style:'currency', 'currency': 'BRL'});

        // Altera Valor Total com formatação pt-BR:        
        document.querySelector('.total').innerHTML = totalPedido;

        // Aiciona link no botão "Finalizar compra"
        document.getElementsByClassName('main-btn standard-one')[0].href = "./confirmation.html";

    } else if (url.indexOf('confirmation.html') != -1){

        // Adiciona numero de pedido ao console
        console.log("numero do " + (document.getElementsByClassName('header-title')[0].textContent).toLocaleLowerCase());     
    }   
} 

function setBlurEventById(id) {
    document.getElementById(id).addEventListener('blur', printData);    
}

function setBlurEventByClassName(classe) {
    document.getElementsByClassName(classe)[0].addEventListener('blur', printData);
}

function setBlurEventByTagName(tagName, position) {
    document.getElementsByTagName(tagName)[position].addEventListener('blur', printData);    
}

function setBlurEventByName (name) {
    document.getElementsByName(name)[0].addEventListener('blur', printData);
}

function printData(event) {
    console.log(event.target.parentElement.parentElement.children[0].innerText + ': ' + event.target.value);
}

function getElementValue(element) {
    return parseFloat(element[1].innerHTML.replace('R$ ','')) * parseFloat(element[0].children[0].innerHTML);
}
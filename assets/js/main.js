// Aqui veremos em qual página o cliente está navegando
window.onload = function () {
    // todo: sempre criar variavel com nome minusculo
    var url = window.location.href;

    // todo: remover todos console.log que não esteja utilizando    
    
    if  (url.indexOf('checkout') != -1 ) {
        
        // todo: criar uma variavel para os elementos, para não ficar repetindo código
        var elementHeineken = document.getElementsByClassName('heineken');
        var heineken = parseFloat(elementHeineken[1].innerHTML.replace('R$ ','')) * parseFloat(elementHeineken[0].children[0].innerHTML)       
        var elementCoruja = document.getElementsByClassName('coruja');
        var coruja = parseFloat(elementCoruja[1].innerHTML.replace('R$ ','')) * parseFloat(elementCoruja[0].children[0].innerHTML)        
        var elementQuilmes = document.getElementsByClassName('quilmes');
        var quilmes = parseFloat(elementQuilmes[1].innerHTML.replace('R$ ','')) * parseFloat(elementQuilmes[0].children[0].innerHTML)        
        var elementDeus = document.getElementsByClassName('deus');
        var deus = parseFloat(elementDeus[1].innerHTML.replace('R$ ','')) * parseFloat(elementDeus[0].children[0].innerHTML)
        
        totalPedido = (heineken + coruja + quilmes + deus)          

        // Segue codigo que ira mostrar no console os inputs
        // todo: utilizar a função printData....
        
        function printData(event) {
            console.log(event.target.parentElement.parentElement.children[0].innerText + ': ' + event.target.value);
        }
        document.getElementById('nome').addEventListener('blur', printData);                  // conteuno de nome      
        document.getElementsByClassName('sobrenome')[0].addEventListener('blur', printData);  // conteudo de sobrenome
        document.getElementsByTagName('input')[2].addEventListener('blur', printData);        // conteudo de CPF
        document.getElementsByName('email')[0].addEventListener('blur', printData);           // conteudo de email
        document.getElementsByTagName('input')[4].addEventListener('blur', printData);        // conteudo de telefone
        document.getElementsByName('celular')[0].addEventListener('blur', printData);         // conteudo de celular
        document.getElementById('cep').addEventListener('blur', printData);                   // conteudo de cep
        document.getElementsByClassName('rua')[0].addEventListener('blur', printData);        // conteudo de rua
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
 

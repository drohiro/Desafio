// Aqui veremos em qual página o cliente está navegando
window.onload = function () {
    // todo: sempre criar variavel com nome minusculo
    var URL = window.location.href;
    console.log('checkout = '+ URL.indexOf('checkout.html') + 
    " <==============> confirmation = " + URL.indexOf('confirmation') );
    
    
    if  (URL.indexOf('checkout') != -1 ) {
        console.log (" Você está em: " + URL);
        
        var heineken = parseFloat(document.getElementsByClassName('heineken')[1].innerHTML.replace('R$ ','')) * parseFloat(document.getElementsByClassName('heineken')[0].children[0].innerHTML)
        var coruja = parseFloat(document.getElementsByClassName('coruja')[1].innerHTML.replace('R$ ','')) * parseFloat(document.getElementsByClassName('coruja')[0].children[0].innerHTML)
        var quilmes = parseFloat(document.getElementsByClassName('quilmes')[1].innerHTML.replace('R$ ','')) * parseFloat(document.getElementsByClassName('quilmes')[0].children[0].innerHTML)
        var deus = parseFloat(document.getElementsByClassName('deus')[1].innerHTML.replace('R$ ','')) * parseFloat(document.getElementsByClassName('deus')[0].children[0].innerHTML)
        
        totalPedido = (heineken + coruja + quilmes + deus)

        
        function total (h1,h2,c1,c2,q1,q2,d1,d2) {
           return (h1*h2)+(c1+c2)+(q1+q2)+(d1+d2);
        }

        
        
        // Segue codigo que ira mostrar no console os inputs
        // conteuno de nome
        document.getElementById('nome').addEventListener('blur', function(event) {
            console.log(event.target.parentElement.parentElement.children[0].innerText + ': ' + event.target.value);
        });
        // conteudo de sobrenome
        document.getElementsByClassName('cpf')[0].addEventListener('blur', function(event) {
            console.log(event.target.parentElement.parentElement.children[0].innerText + ': ' + event.target.value);
        })
        // conteudo de CPF
        document.getElementsByTagName('input')[2].addEventListener('blur', function(event) {
            console.log(event.target.parentElement.parentElement.children[0].innerText + ': ' + event.target.value);
        })
         // conteudo de email
        document.getElementsByName('email')[0].addEventListener('blur', function(event) {
            console.log(event.target.parentElement.parentElement.children[0].innerText + ': ' + event.target.value);
        })
         // conteudo de telefone
        document.getElementsByTagName('input')[4].addEventListener('blur', function(event) {
            console.log(event.target.parentElement.parentElement.children[0].innerText + ': ' + event.target.value);
        })
         // conteudo de celular 
        document.getElementsByName('celular')[0].addEventListener('blur', function(event) {
            console.log(event.target.parentElement.parentElement.children[0].innerText + ': ' + event.target.value);
        })
         // conteudo de cep
        document.getElementById('cep').addEventListener('blur', function(event) {
            console.log(event.target.parentElement.parentElement.children[0].innerText + ': ' + event.target.value);
        })
         // conteudo de rua
        document.getElementsByClassName('rua')[0].addEventListener('blur', function(event) {
            console.log(event.target.parentElement.parentElement.children[0].innerText + ': ' + event.target.value);
        })
         // conteudo de bairro
        document.getElementsByTagName('input')[8].addEventListener('blur', function(event) {
            console.log(event.target.parentElement.parentElement.children[0].innerText + ': ' + event.target.value);
        })
         // conteudo de cidade
        document.getElementsByName('cidade')[0].addEventListener('blur', function(event) {
            console.log(event.target.parentElement.parentElement.children[0].innerText + ': ' + event.target.value);
        })
         // conteudo de estado
        document.getElementsByTagName('input')[10].addEventListener('blur', function(event) {
            console.log(event.target.parentElement.parentElement.children[0].innerText + ': ' + event.target.value);
        })
         // conteudo de pais
        document.getElementsByName('pais')[0].addEventListener('blur', function(event) {
            console.log(event.target.parentElement.parentElement.children[0].innerText + ': ' + event.target.value);
        })
    

        // Altera Valor Total com formatação pt-BR:        
        document.getElementsByTagName('span')[8].innerHTML = totalPedido.toLocaleString('pt-BR', {style:'currency', 'currency': 'BRL'}); 

        // Aiciona link no botão "Finalizar compra"
        document.getElementsByClassName('main-btn standard-one')[0].href = "./confirmation.html";         


    } else if (URL.indexOf('confirmation.html') != -1){
        console.log (" Você está em: " + URL);


        // Adiciona numero de pedido ao console
        console.log("numero do " + (document.getElementsByClassName('header-title')[0].textContent).toLocaleLowerCase())
        
    }   
} 
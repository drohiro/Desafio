// Aqui veremos em qual página o cliente está navegando
window.onload = function () {
    var URL = window.location.href;
    console.log('checkout = '+ URL.indexOf('checkout.html') + 
    " <==============> confirmation = " + URL.indexOf('confirmation') );
    
    
    if  (URL.indexOf('checkout') != -1 ) {
        console.log (" Você está em: " + URL);
        var valorTotal = 200;
        
        document.getElementById('nome').addEventListener('blur', function(event) {
            console.log(event.target.parentElement.parentElement.children[0].innerText + ': ' + event.target.value);
        });



        // Altera Valor Total com formatação pt-BR:
        document.getElementsByTagName('span')[8].innerHTML = valorTotal.toLocaleString('pt-BR', {style:'currency', 'currency': 'BRL'}); 

        // Aiciona link no botão "Finalizar compra"
        document.getElementsByClassName('main-btn standard-one')[0].href = "./confirmation.html";         


    } else if (URL.indexOf('confirmation.html') != -1){
        console.log (" Você está em: " + URL);


        // Adiciona numero de pedido ao console
        console.log("Numero do " + (document.getElementsByClassName('header-title')[0].
        textContent).toLocaleLowerCase())
    }   
} 
// Aqui veremos em qual página o cliente está navegando
window.onload = function () {
    var URL = window.location.href;
    var provaUrlCheckout = URL.indexOf('checkout.html');
    var provaUrlConfirmation = URL.indexOf('confirmation');
    console.log(`checkout = ${provaUrlCheckout} =========== e confirmation = ${provaUrlConfirmation}`);
    
    if  (URL.indexOf('checkout') != -1 ) {
        console.log (" Você está no Checkout pela URL = " + URL);









        document.getElementsByClassName('main-btn standard-one').innerHTML
   


    } else if (URL.indexOf('confirmation.html') != -1){
        console.log (" Você está na Confirmação pela URL = " + URL);

    } else { 
        console.log('url invalida');
    }

}

// redireciona para confirmation



// Aqui começa o script de Checkout




// Aqui começa o script de confirmation
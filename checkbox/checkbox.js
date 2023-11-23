const button = document.getElementById('btn')

button.onclick = function () {
    
    const subscribe = document.getElementById('subscribeBtn');
    const visa = document.getElementById('visaCard');
    const master = document.getElementById('masterCard');
    const paypal = document.getElementById('payPal');

    let result = document.getElementById('result');

    let card = document.getElementById('card');


    if (subscribe.checked) {
        console.log('Thanks for subscribing to our channel');

        result.innerHTML = 'Your subscriptions as been sent' + ' 🤝';
        result.style.padding = '10px'
    }
    else {
        result.innerHTML = 'You need to subscribe to this Newsletter';
        result.style.padding = '10px'
        console.log("oops looks like you haven't subscribe");
    }

    if (visa.checked) {
        console.log('you are paying with Visa card');

        card.innerHTML = 'you payment method is' +  " visa Card";
        card.style.padding = '10px';
    }
    else if (master.checked) {
        console.log('you are paying with Master Card');


        card.innerHTML = 'you payment method is' +  " Master Card";
        card.style.padding = '10px';
        
    }
    else if (paypal.checked) {
        console.log('you are paying with Paypal');

        card.innerHTML = 'you payment method is' +  " Paypal";
        card.style.padding = '10px';

    }
    else {
        console.log('choose a payment method to continue');
        // document.getElementById('not').innerHTML = 

        card.innerHTML = "You need to choose a payment method"
        card.style.padding = '10px';
    }
}
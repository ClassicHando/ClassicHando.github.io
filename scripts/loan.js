var savedPrincipal = 0;
var savedRate = 0;
var savedTerm = 0;

function testClick() {
    var principal = parseFloat(document.getElementById('inputPrincipal').value);
    var rate = parseFloat(document.getElementById('inputRate').value);
    var term = parseInt(document.getElementById('inputTerm').value);

    if (isNaN(principal)) { principal = 0; }
    if (isNaN(rate)) { rate = 0; }
    if (isNaN(term)) { term = 0; }

    document.getElementById('inputPrincipal').value = principal.toFixed(2);
    document.getElementById('inputRate').value = rate.toFixed(2);
    document.getElementById('inputTerm').value = term;

    savedPrincipal = principal;
    savedRate = rate;
    savedTerm = term;

    if (principal === 0 || rate === 0 || term === 0) {
        let children = document.getElementsByClassName('vision');

        for (var i = 0; i < children.length; i++) {
            children[i].hidden = true;
        }
    }
    else {
        let children = document.getElementsByClassName('vision');

        for (var i = 0; i < children.length; i++) {
            children[i].hidden = false;
        }  

        document.getElementById('newPayment').value = 0;
        
        minPaymentFinder(principal, rate, term);
    }
}

function minPaymentFinder(principal, rate, term) {
    var r = (rate / 100) / 12;
    var interestPaid = 0;
    var counter = 0;
    var temp = 0;
    var minPay = (principal * r) / (1 - Math.pow((1 + r), 0 - term));

    minPay = Math.ceil(minPay * 100) / 100;

    while (principal > 0) {
        temp = principal * r;

        temp = Math.ceil(temp * 100) / 100;

        interestPaid += temp;

        principal += temp;

        principal -= minPay;

        if (principal > 0) {
            counter++;
        }

        if (principal <= 0 || counter > term) {
            break;
        }
    }

    let element = document.getElementById('minPay');
    element.value = minPay.toFixed(2);

    element = document.getElementById('minInt');
    element.value = interestPaid.toFixed(2);

    element = document.getElementById('minTerm');
    element.value = term.toFixed(0);

    calcNewPayment();
}

function calcNewPayment() {    
    var principal = parseFloat(document.getElementById('inputPrincipal').value);
    var rate = parseFloat(document.getElementById('inputRate').value);
    var term = parseInt(document.getElementById('inputTerm').value);

    var newPay = parseFloat(document.getElementById('newPayment').value);
    if (isNaN(newPay)) { newPay = 0; }
    document.getElementById('newPayment').value = newPay.toFixed(2);
    let element = null;

    if (newPay >= parseFloat(document.getElementById('minPay').value)){

        element = document.getElementById('calcPay');
        element.hidden = false;

        element = document.getElementById('calcInt');
        element.hidden = false;

        element = document.getElementById('calcTerm');
        element.hidden = false;

        element = document.getElementById('calcPayLabel')
        element.hidden = false;

        element = document.getElementById('calcIntLabel')
        element.hidden = false;

        element = document.getElementById('calcTermLabel')
        element.hidden = false;


        var r = (rate / 100) / 12;
        var interestPaid = 0;
        var counter = 0;
        var temp = 0;

        while (principal > 0) {
            temp = principal * r;
    
            temp = Math.ceil(temp * 100) / 100;
    
            interestPaid += temp;
    
            principal += temp;
    
            principal -= newPay;
    
            if (principal > 0) {
                counter++;
            }
        }

        element = document.getElementById('calcPay');
        element.value = newPay.toFixed(2);

        element = document.getElementById('calcInt');
        element.value = interestPaid.toFixed(2);

        element = document.getElementById('calcTerm');
        element.value = counter.toFixed(0);
    }    

    else {
        let element = document.getElementById('calcPay');
        element.hidden = true;

        element = document.getElementById('calcInt');
        element.hidden = true;

        element = document.getElementById('calcTerm');
        element.hidden = true;

        element = document.getElementById('calcPayLabel')
        element.hidden = true;

        element = document.getElementById('calcIntLabel')
        element.hidden = true;

        element = document.getElementById('calcTermLabel')
        element.hidden = true;


    }
}

function inputZero() {
    var changed = false;

    var principal = parseFloat(document.getElementById('inputPrincipal').value);
    var rate = parseFloat(document.getElementById('inputRate').value);
    var term = parseInt(document.getElementById('inputTerm').value);

    if (isNaN(principal)) { principal = 0; }
    if (isNaN(rate)) { rate = 0; }
    if (isNaN(term)) { term = 0; }

    if (savedPrincipal !== principal) { changed = true; }
    if (savedRate !== rate) { changed = true; }
    if (savedTerm !== term) { changed = true; }
    if (principal === 0 || rate === 0 || term === 0) { changed = true; }


    document.getElementById('inputPrincipal').value = principal.toFixed(2);
    document.getElementById('inputRate').value = rate.toFixed(2);
    document.getElementById('inputTerm').value = term;

    if (changed) {
        let children = document.getElementsByClassName('vision');

        for (var i = 0; i < children.length; i++) {
            children[i].hidden = true;
        }
    }
}


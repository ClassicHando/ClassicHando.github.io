function calculate() {
    var input = 0;
    var total = 0;
    let amounts = document.getElementsByClassName('amount');

    for (var i = 0; i < amounts.length; i++) {
        input = parseFloat(amounts[i].value);
        if (isNaN(input)) { input = 0; }
        amounts[i].value = input.toFixed(2);

        total += parseFloat(amounts[i].value);     
    }

    input = parseFloat(document.getElementById('income').value);
    if (isNaN(input)) { input = 0; }
    document.getElementById('income').value = input.toFixed(2);

    document.getElementById('expenses').value = total.toFixed(2);

    document.getElementById('remainder').value = (input - document.getElementById('expenses').value).toFixed(2);

    if (document.getElementById('remainder').value <= 0) {
        amounts = document.getElementsByClassName('visible');

        for (var i = 0; i < amounts.length; i++) {
            amounts[i].hidden = true;
        }
    }
    else {
        amounts = document.getElementsByClassName('visible');

        for (var i = 0; i < amounts.length; i++) {
            amounts[i].hidden = false;
        }

        calculateRemainder();
    }
}

function calculateRemainder() {
    let percents = document.getElementsByClassName('perc');
    let results = document.getElementsByClassName('total');
    var input = 0;
    var total = 0;
    var remainder = parseFloat(document.getElementById('remainder').value);

    for (var i = 0; i < percents.length; i++) {
        input = parseInt(percents[i].value);
        if (isNaN(input)) { input = 0; }
        percents[i].value = input.toFixed(0);

        input = parseInt(percents[i].value);

        total += input;
    }

    if (total > 100) {
        for (var i = 0; i < results.length; i++) {
            results[i].value = "N/A";
        }
    }

    else {
        for (var i = 0; i < results.length; i++) {

            if (parseFloat(percents[i].value) != 0) {
                results[i].value = (remainder * (parseFloat(percents[i].value) / 100)).toFixed(2);
            }
            else {
                results[i].value = "N/A";
            }
        }
    }
}
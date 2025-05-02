function initializer() {
    let allFields = document.getElementsByClassName('all');
    let visibleFields = null;

    for (var i = 0; i < allFields.length; i++) {
        allFields[i].hidden = true;
    }

    checkBoxChanged();
}

function updater() {
    var rate = 0;
    var hours = 0;
    var tax = 0;
    var addPercent = 0;
    var addFlat = 0;
    var temp = 0;
    var total = 0;

    var yearlyGross = 0;
    var yearlyTake = 0;

    if (document.getElementById('hourlyRadio').checked) {
        rate = parseFloat(document.getElementById('januaryInput').value);
        if (isNaN(rate)) { rate = 0; }
        document.getElementById('januaryInput').value = rate.toFixed(2);
        rate = parseFloat(document.getElementById('januaryInput').value);

        hours = parseFloat(document.getElementById('julyInput').value);
        if (isNaN(hours)) { hours = 0; }
        document.getElementById('julyInput').value = hours.toFixed(2);
        hours = parseFloat(document.getElementById('julyInput').value);

        tax = parseFloat(document.getElementById('februaryInput').value);
        if (isNaN(tax)) { tax = 0; }
        document.getElementById('februaryInput').value = tax.toFixed(2);
        tax = document.getElementById('februaryInput').value;

        addPercent = parseFloat(document.getElementById('mayInput').value);
        if (isNaN(addPercent)) { addPercent = 0; }
        document.getElementById('mayInput').value = addPercent.toFixed(2);
        addPercent = document.getElementById('mayInput').value;

        addFlat = parseFloat(document.getElementById('novemberInput').value);
        if (isNaN(addFlat)) { addFlat = 0; }
        document.getElementById('novemberInput').value = addFlat.toFixed(2);
        addFlat = document.getElementById('novemberInput').value;

        temp = 0;

        if (hours > 40) {
            temp = hours - 40;
            hours = 40;
        }

        yearlyGross = ((rate * hours) + (temp * rate * 1.5)) * 52;

        document.getElementById('yearlyGross').value = yearlyGross.toFixed(2);
        document.getElementById('monthlyGross').value = (document.getElementById('yearlyGross').value / 12).toFixed(2);

        yearlyTake = (yearlyGross * ((100 - tax - addPercent) / 100)) - (addFlat * 12);

        document.getElementById('yearlyTake').value = yearlyTake.toFixed(2);
        document.getElementById('monthlyTake').value = (document.getElementById('yearlyTake').value / 12).toFixed(2);
    }

    else if (document.getElementById('salaryRadio').checked) {
        rate = parseFloat(document.getElementById('januaryInput').value);
        if (isNaN(rate)) { rate = 0; }
        document.getElementById('januaryInput').value = rate.toFixed(2);
        rate = parseFloat(document.getElementById('januaryInput').value);

        tax = parseFloat(document.getElementById('februaryInput').value);
        if (isNaN(tax)) { tax = 0; }
        document.getElementById('februaryInput').value = tax.toFixed(2);
        tax = document.getElementById('februaryInput').value;

        addPercent = parseFloat(document.getElementById('mayInput').value);
        if (isNaN(addPercent)) { addPercent = 0; }
        document.getElementById('mayInput').value = addPercent.toFixed(2);
        addPercent = document.getElementById('mayInput').value;

        addFlat = parseFloat(document.getElementById('novemberInput').value);
        if (isNaN(addFlat)) { addFlat = 0; }
        document.getElementById('novemberInput').value = addFlat.toFixed(2);
        addFlat = document.getElementById('novemberInput').value;


        yearlyGross = parseFloat(document.getElementById('januaryInput').value);

        document.getElementById('yearlyGross').value = yearlyGross.toFixed(2);
        document.getElementById('monthlyGross').value = (document.getElementById('yearlyGross').value / 12).toFixed(2);

        yearlyTake = (yearlyGross * ((100 - tax - addPercent) / 100)) - (addFlat * 12);

        document.getElementById('yearlyTake').value = yearlyTake.toFixed(2);
        document.getElementById('monthlyTake').value = (document.getElementById('yearlyTake').value / 12).toFixed(2);
    } 

    else if (document.getElementById('quarterlyRadio').checked) {
        total = 0;

        rate = parseFloat(document.getElementById('januaryInput').value);
        if (isNaN(rate)) { rate = 0; }
        document.getElementById('januaryInput').value = rate.toFixed(2);
        temp = parseFloat(document.getElementById('januaryInput').value);

        total += temp;

        tax = parseFloat(document.getElementById('februaryInput').value);
        if (isNaN(tax)) { tax = 0; }
        document.getElementById('februaryInput').value = tax.toFixed(2);
        temp = parseFloat(document.getElementById('februaryInput').value);

        total += temp;

        addPercent = parseFloat(document.getElementById('julyInput').value);
        if (isNaN(addPercent)) { addPercent = 0; }
        document.getElementById('julyInput').value = addPercent.toFixed(2);
        temp = parseFloat(document.getElementById('julyInput').value);

        total += temp;

        addFlat = parseFloat(document.getElementById('augustInput').value);
        if (isNaN(addFlat)) { addFlat = 0; }
        document.getElementById('augustInput').value = addFlat.toFixed(2);
        temp = parseFloat(document.getElementById('augustInput').value);

        total += temp;

        document.getElementById('yearlyTake').value = total.toFixed(2);
        document.getElementById('monthlyTake').value = (total / 12).toFixed(2);
    } 

    else if (document.getElementById('monthlyRadio').checked) {
        total = 0;

        temp = parseFloat(document.getElementById('januaryInput').value);
        if (isNaN(temp)) { temp = 0; }
        document.getElementById('januaryInput').value = temp.toFixed(2);

        total += temp;

        temp = parseFloat(document.getElementById('februaryInput').value);
        if (isNaN(temp)) { temp = 0; }
        document.getElementById('februaryInput').value = temp.toFixed(2);

        total += temp;

        temp = parseFloat(document.getElementById('marchInput').value);
        if (isNaN(temp)) { temp = 0; }
        document.getElementById('marchInput').value = temp.toFixed(2);

        total += temp;

        temp = parseFloat(document.getElementById('aprilInput').value);
        if (isNaN(temp)) { temp = 0; }
        document.getElementById('aprilInput').value = temp.toFixed(2);

        total += temp;

        temp = parseFloat(document.getElementById('mayInput').value);
        if (isNaN(temp)) { temp = 0; }
        document.getElementById('mayInput').value = temp.toFixed(2);

        total += temp;

        temp = parseFloat(document.getElementById('juneInput').value);
        if (isNaN(temp)) { temp = 0; }
        document.getElementById('juneInput').value = temp.toFixed(2);

        total += temp;

        temp = parseFloat(document.getElementById('julyInput').value);
        if (isNaN(temp)) { temp = 0; }
        document.getElementById('julyInput').value = temp.toFixed(2);

        total += temp;

        temp = parseFloat(document.getElementById('augustInput').value);
        if (isNaN(temp)) { temp = 0; }
        document.getElementById('augustInput').value = temp.toFixed(2);

        total += temp;

        temp = parseFloat(document.getElementById('septemberInput').value);
        if (isNaN(temp)) { temp = 0; }
        document.getElementById('septemberInput').value = temp.toFixed(2);

        total += temp;

        temp = parseFloat(document.getElementById('octoberInput').value);
        if (isNaN(temp)) { temp = 0; }
        document.getElementById('octoberInput').value = temp.toFixed(2);

        total += temp;

        temp = parseFloat(document.getElementById('novemberInput').value);
        if (isNaN(temp)) { temp = 0; }
        document.getElementById('novemberInput').value = temp.toFixed(2);

        total += temp;

        temp = parseFloat(document.getElementById('decemberInput').value);
        if (isNaN(temp)) { temp = 0; }
        document.getElementById('decemberInput').value = temp.toFixed(2);

        total += temp;

        document.getElementById('yearlyTake').value = total.toFixed(2);
        document.getElementById('monthlyTake').value = (total / 12).toFixed(2);
    }
}

function checkBoxChanged() {
    let allFields = document.getElementsByClassName('all');
    let inputFields = document.getElementsByClassName('incomeInput');
    let grossFields = document.getElementsByClassName('gross');
    let visibleFields = null;

    for (var i = 0; i < allFields.length; i++) {
        allFields[i].hidden = true;
    }

    if (document.getElementById('hourlyRadio').checked) {
        visibleFields = document.getElementsByClassName('hourly');

        for (var i = 0; i < visibleFields.length; i++) {
            visibleFields[i].hidden = false;
        }

        document.getElementById('january').innerHTML = "Hourly Rate";
        document.getElementById('july').innerHTML = "Hours/Week";
        document.getElementById('february').innerHTML = "Estimated Tax";
        document.getElementById('april').innerHTML="Other Deductions<br>(Optional)";
        document.getElementById('may').innerHTML="Percent";
        document.getElementById('november').innerHTML = "Flat Amount (Monthly)";

        for (var i = 0; i < grossFields.length; i++) {
            grossFields[i].hidden = false;
        }
    }

    else if (document.getElementById('salaryRadio').checked) {
        visibleFields = document.getElementsByClassName('salary');

        for (var i = 0; i < visibleFields.length; i++) {
            visibleFields[i].hidden = false;
        }

        document.getElementById('january').innerHTML = "Yearly Salary";
        document.getElementById('february').innerHTML = "Estimated Tax";
        document.getElementById('april').innerHTML="Other Deductions<br>(Optional)";
        document.getElementById('may').innerHTML="Percent";
        document.getElementById('november').innerHTML = "Flat Amount (Monthly)";
        
        for (var i = 0; i < grossFields.length; i++) {
            grossFields[i].hidden = false;
        }
    }

    else if (document.getElementById('quarterlyRadio').checked) {
        visibleFields = document.getElementsByClassName('quarterly');

        for (var i = 0; i < visibleFields.length; i++) {
            visibleFields[i].hidden = false;
        }

        document.getElementById('january').innerHTML = "Quarter 1";
        document.getElementById('february').innerHTML = "Quarter 2";
        document.getElementById('july').innerHTML = "Quarter 3";
        document.getElementById('august').innerHTML = "Quarter 4";

        for (var i = 0; i < grossFields.length; i++) {
            grossFields[i].hidden = true;
        }
    }

    else {
        visibleFields = document.getElementsByClassName('all');

        for (var i = 0; i < visibleFields.length; i++) {
            visibleFields[i].hidden = false;
        }

        document.getElementById('january').innerHTML = "January";
        document.getElementById('february').innerHTML = "February";
        document.getElementById('march').innerHTML = "March";
        document.getElementById('april').innerHTML = "April";
        document.getElementById('may').innerHTML = "May";
        document.getElementById('june').innerHTML = "June";
        document.getElementById('july').innerHTML = "July";
        document.getElementById('august').innerHTML = "August";
        document.getElementById('september').innerHTML = "September";
        document.getElementById('october').innerHTML = "October";
        document.getElementById('november').innerHTML = "November";
        document.getElementById('december').innerHTML = "December";

        for (var i = 0; i < grossFields.length; i++) {
            grossFields[i].hidden = true;
        }
    }

    updater();
}
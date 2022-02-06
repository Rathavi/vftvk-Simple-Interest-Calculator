function compute()
{
    var principalDom = document.getElementById("principal");
    var principal = principalDom.value;

    // check for 0 or negative value
    if(!principal || principal < 1) {
        alert("Enter a positive number");   // show message
        principalDom.focus();                  // focus back to input
        return;
    }

    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var year = new Date().getFullYear()+parseInt(years);

    // calculate interest
    var interest = principal * years * rate /100;

    // show results
    var result = document.getElementById("result");
    result.innerHTML = "If you deposit <mark>"+principal+"</mark>,\<br\>at an interest rate of <mark>"+rate+"%</mark>\<br\>You will receive an amount of <mark>"+interest+"</mark>,\<br\>in the year <mark>"+year+"</mark>\<br\>";
}

function updateRate() 
{
    // update interest text
    var rateval = document.getElementById("rate").value + ' %';
    document.getElementById("rate_val").innerText=rateval;
}
var dollar = 104.80;
var riyal = 28;

var amount1 = +prompt("Enter quantity of dollar:");
var amount2 = +prompt("Enter quantity of riyal:");

var pkr1 = amount1 * dollar;
var pkr2 = amount2 * riyal;

var totalPkr = pkr1 + pkr2;

document.write("<h2>Currency in PKR</h2>");
document.write("Total Currency in PKR: " + totalPkr)
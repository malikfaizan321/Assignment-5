document.write("<h1>Shopping Cart:</h1>")

var price1= +prompt("Price of item 1:");
document.write("Price of item 1 is" +" "+ price1);
document.write("<br>");

var quantity1= +prompt("Quantity of item 1:");
document.write("Quantity of item 1 is" +" "+ quantity1);
document.write("<br>");

var price2=prompt("Price of item 2:");
document.write("Price of item 2 is" +" "+ price2);
document.write("<br>");

var quantity2=prompt("Quantity of item 2:");
 document.write("Quantity of item 2 is" +" "+ quantity2);
 document.write("<br>");

document.write("Shipping charges are 150");
document.write("<br>");


document.write("Total cost of your order is", + "  "+ (price1*quantity1)+(price2*quantity2)+150);
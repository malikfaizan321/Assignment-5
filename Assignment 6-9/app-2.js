var a = 2;
var b = 1;
var result;

//result = --a - --b + ++b + b--;
//document.write(result);
//ocument.write("<br>");

result = --a;
document.write(result);
document.write("<br>");

result = result - --b;
document.write(result);
document.write("<br>");

result = result + ++a;
document.write(result);
document.write("<br>");

result = result + b--;
document.write(result);
document.write("<br>");


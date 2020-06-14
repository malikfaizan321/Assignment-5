
document.write("<h1>Multiplication Table</h1>");

var table = +prompt("Please Enter a Number");
for(i=1; i<=table; i++)
{
    document.write(table + " " + "x" + " " + i + " " + "=" + " " + i*table);
    document.write("<br>");
}
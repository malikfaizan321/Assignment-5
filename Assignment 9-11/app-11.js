var firstNumber = +prompt("Enter the first number:");
var secondNumber=+prompt("Enter the second number:");
var operator = prompt("Enter the operator to perform:");

if(operator == "+")
{
    document.write("The sum of two numbers is. ", + firstNumber + secondNumber);
}

else if(operator == "-")
{
    document.write("The difference of two numbers is. ", + firstNumber - secondNumber);
}

else if(operator == "*")
{
    document.write("The product of two numbers is. ", + firstNumber * secondNumber);
}

else if(operator == "/")
{
    document.write("The division of two numbers is. ", + firstNumber / secondNumber);
}
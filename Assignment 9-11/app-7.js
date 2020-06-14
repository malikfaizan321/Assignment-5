var b = 5;
var a = +prompt("Guess the secret number:");
if(a == b)
{
    alert("Bingo!!! Correct answer...");
}
else if(a == ++b)
{
    alert("Close enough to the correct answer");
}
else
{
    alert("Oopss!!! Sorry try Again.....")
}
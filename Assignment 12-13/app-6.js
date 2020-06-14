function myFunction()
{
    var time = new Date().getHours();
    var greeting;
    var hour = 13;
    if (hour < 18) 
    {
    greeting = "Good day";
    }
    else
    {
    greeting = "Good evening";
    }
    
    document.getElementById("Day-Night").innerHTML = greeting;

}
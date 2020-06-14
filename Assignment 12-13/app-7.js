var time1 = prompt("Enter time like this 12:00 pm")

if (time1 >= 0000 && time1 <= 1200) {
    alert("Good Morning")
} else if (time1 >= 1200 && time1 <= 1700) {
    alert("Good Afternoon")
} else if (time1 >= 1700 && time1 <= 2100) {
    alert("Good Evening")
} else if (time1 >= 2100 && time1 <= 2359) {
    alert("Good Night")
}

//chapter 14-16
//question 8
var student = ["faizan", "farhan", "kamran"]

for (var i = 0; i < student.length; i++) {
    var studentMarks = [320, 420, 470]
    for (var j = 0; j < studentMarks.length; j++) {
        var percentage = studentMarks[i] * 100 / 500
    }
    document.write("Score of " + student[i] + " is " + studentMarks[i] + ". Percentage Is " + percentage + "% <br>")
}




//chapter 14-16
//question 9
var colors = ["Red", "White", "blue", "grey"]
console.log(colors)

// Section A


var add_Color_start = prompt("what color he/she wants to add to the beginning")
colors.unshift(add_Color_start)

// Section B


var add_Color_End = prompt("what color he/she wants to add to the End")
colors.push(add_Color_End)

// Section C


colors.push("Pink", "Black")
console.log(colors)

// Section D


colors.shift()

// Section E


colors.pop()

// Section F


var del_Color_start = prompt("what color he/she wants to delete to the beginning")
colors.shift(del_Color_start)

// Section G


var del_Color_End = prompt("what color he/she wants to delete to the End")
colors.pop(del_Color_End);

var arr = ["Apple","Samsung", "Motorola","Nokia","Sony","Haier"];
document.write("<select><option>"+arr[0]+"</option><option>"+arr[1]+"</option><option>"+arr[2]+"</option><option>"+arr[3]+"</option><option>"+arr[4]+"</option><option>"+arr[5]+"</option></select>");


//Question 13
var fifo = []
fifo.push("Keyboard")
fifo.push("Mouse")
fifo.push("Joystick")
fifo.push("C.P.U")
fifo.push("Speaker")

var fifo_end = []
fifo_end.unshift("Keyboard")
fifo_end.unshift("Mouse")
fifo_end.unshift("Joystick")
fifo_end.unshift("C.P.U")
fifo_end.unshift("Speaker")

//chapter 17-20
// question 1

var arr = [
    [],
    [],
    [],
    [],
    []
];

//question 2
var arr1 = [
    [0,1,2,3],
    [1,0,1,2],
    [2,1,0,1]
];

//question 3
for(var i=1; i<=10; i++)
{
    document.write(i + "<br>");
}

//question 4
var num1 = +prompt("Please enter number of table:");
var len = +prompt("Please enter length of table:");

for(var i=num1; i< len.length; i++)
{
    document.write(num1 + " X " + i + "=" + i*num1"<br>");
}
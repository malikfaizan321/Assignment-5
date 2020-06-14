// Question No: 1,2
var students_name = [];

// Question No: 3
var strings = ["faizan","farhan"];

// Question No: 4
var numbers = ["1","2"];

// Question No: 5
var boolean = [true , false];

// Question No: 6
var mix_array = ["name","123", true];

// Question No: 7
var qualifications = ["SSC", "HSC", "BCS","BS", "BCOM", "MS", "M. Phil."," PhD."];
document.write ("<h1>Qualifications</h1>");
document.write ("<h1> 1)"+ qualifications[0] +"</h1>");
document.write ("<h1> 2)"+ qualifications[1] +"</h1>");
document.write ("<h1> 3)"+ qualifications[2] +"</h1>");
document.write ("<h1> 4)"+ qualifications[3] +"</h1>");
document.write ("<h1> 5)"+ qualifications[4] +"</h1>");
document.write ("<h1> 6)"+ qualifications[5] +"</h1>");
document.write ("<h1> 7)"+ qualifications[6] +"</h1>");
document.write ("<h1> 8)"+ qualifications[7] +"</h1>");

// Question No: 8
var student = ["Micheal", "John", "Tony"]

for (var i = 0; i < student.length; i++) {
    var studentMarks = [320, 230, 480]
    for (var j = 0; j < studentMarks.length; j++) {
        var percentage = studentMarks[i] * 100 / 500
    }
    document.write("Score of " + student[i] + " is " + studentMarks[i] + ". Percentage Is " + percentage + "% <br>")
}

// Question No: 9
var colors = ["Red", "White", "blue", "grey"];
console.log(colors);

// Section A
var add_Color_start = prompt("what color he/she wants to add to the beginning");
colors.unshift(add_Color_start);

// Section B
var add_Color_End = prompt("what color he/she wants to add to the End");
colors.push(add_Color_End);

// Section C
colors.push("Pink", "Black");
console.log(colors);
// Section D
colors.shift();

// Section E
colors.pop();

// Section F
var del_Color_start = prompt("what color he/she wants to delete to the beginning");
colors.shift(del_Color_start);

// Section G
var del_Color_End = prompt("what color he/she wants to delete to the End");
colors.pop(del_Color_End);


// Question No: 10
var score = [320, 230, 420, 180]
document.write("Score of Students: " + score)
var ascending = score.sort()
document.write("Ordered Score of students: " + ascending)


// Question No: 11
var cities = ["Karachi" , "Lahore", "Islamabad", "Quetta","Peshawar"];
document.write("<h2>Listed cities</h2>"+cities + "<br/>");
var list = cities.slice(3);
document.write("<h2>Selected cities</h2>"+list);

// Question No: 12
var arr = ["This","is","my","cat"]
var st= arr.join(" ")
document.write("<h2>Array</h2>"+ arr + "<br/>")

document.write("<h2>String</h2>"+st)

// Question No: 13
var fifo = []
fifo.unshift("Keyboard")
fifo.unshift("Mouse")
fifo.unshift("printer")
fifo.unshift("monitor")
document.write("<h2>Devices</h2>"+ fifo+"</br>")
      
fifo.shift()
document.write("<h2>Method of FIFO</h2> <br/>")
document.write(fifo+ "<br/>")
fifo.shift()
document.write(fifo+ "<br/>")
fifo.shift()
document.write(fifo+ "<br/>")

// Question No: 14
var order = []
order.push("Keyboard")
order.push("Mouse")
order.push("printer")
order.push("monitor")
document.write("<h2>Devices</h2>"+ order+"</br>")
      
order.pop()
document.write("<h2>Method of order</h2> <br/>")
document.write(order+ "<br/>")
order.pop()
document.write(order+ "<br/>")
order.pop()
document.write(order+ "<br/>")


// Question No: 15
var arr = ["Apple","Samsung", "Motorola","Nokia","Sony","Haier"];
document.write("<select><option>"+arr[0]+"</option><option>"+arr[1]+"</option><option>"+arr[2]+"</option><option>"+arr[3]+"</option><option>"+arr[4]+"</option><option>"+arr[5]+"</option></select>");


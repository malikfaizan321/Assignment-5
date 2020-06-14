// Question No: 1
var arr = [
    [],
    [],
    [],
    [],
    []
];

// Question No: 2
var arr1 = [
    [0,1,2,3],
    [1,0,1,2],
    [2,1,0,1]
];

// Question No: 3
for(var i=1; i<=10; i++)
{
    document.write(i + "<br>");
}

// Question No: 4
var num1 = +prompt("Please enter number of table:");
var len = +prompt("Please enter length of table:");

for(var i=num1; i< len.length; i++)
{
    document.write(num1 + " X " + "<br>");
}

// Question No: 5
var fruits = ["apple", "banana", "mango", "orange", "strawberry"]

for (var i = 0; i < fruits.length; i++) {
    console.log(fruits[i])
}

for (var i = 0; i < fruits.length; i++) {
    console.log("Element at index " + i + " is " + fruits[i])
}

// Question No: 6
//a
for(var i = 1; i<= 15; i++)
{
    document.write(i, "<br>");
}
//b
for(var i = 10; i>= 10; i--)
{
    document.write(i, "<br>");
}
//c
for(var i = 0; i<= 20; i+2)
{
    document.write(i, "<br>");
}
//d
for(var i = 1; i<= 19; i+2)
{
    document.write(i, "<br>");
}
//b
for(var i = 0; i<= 20; i+2)
{
    document.write(i + "K" + "<br>");
}

// Question No: 7
alert("Welcome to our bakery")
var itemBakery = ["cake", "apple pie", "cookie", "chips", "patties"]
var inputCart = prompt("Welcom! What you want?")
var isFound = false

for (i = 0; i < itemBakery.length; i++) {
    if (inputCart === itemBakery[i]) {
        alert(inputCart + " is available at index " + i + " in our bakery")
        isFound = true
        break
    }
}
if (isFound === false) {
    alert("We are sorry. " + inputCart + " is not availabale")
}

// Question No: 8
var A = [24, 53, 78, 91, 12]

console.log("Array items: " + A)
A = A.sort()
console.log("The largest number is: " + A[A.length - 1])

// Question No: 9
var A = [24, 53, 78, 91, 12]

console.log("Array items: " + A)
A = A.sort.reverse()
console.log("The largest number is: " + A[A.length - 1])


// Question No: 10
for(var i=5; i<=100; i+5)
{
    document.write(i + "<br>");
}
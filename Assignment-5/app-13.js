var snack = prompt("What is your favorite Snack:")
var old = +prompt("What is your current age:")
var max = +prompt("Enter the maximum age:")
var amount = +prompt("How many snacks you take per day")

var totalSnacks = (max - old) * 365 * amount

document.write("<b> The Lifetime Supply Calculator </b><br>")
document.write("Favorite Snack:" + snack + "<br>")
document.write("Current age:" + old + "<br>")
document.write("Maximum age:" + max + "<br>")
document.write("Amount of snack per day:" + amount + "<br>")
document.write("" + "<br>")
document.write("You will need " + totalSnacks + snack + " to last you until the ripe old age of " + max + "<br>")
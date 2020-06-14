var a = "English";
var b = "Urdu";
var c = "Maths";
var total = 100;
var tot_marks = total + total + total
var obt1  = +prompt("write obtained marks of english");
var obt2  = +prompt("write obtained marks of urdu");
var obt3  = +prompt("write obtained marks of maths");
var tot_obt = obt1 + obt2 + obt3
var per1 = (obt1/total)*100;
var per2 = (obt2/total)*100;
var per3 = (obt3/total)*100;
var tot_per = (per1 + per2 + per3)/tot_marks *100

document.write("<table> <tr> <th>Subjects</th> <th>Total Marks</th> <th>Obtained marks</th> <th>Percentage</<th> </tr>  <tr><td>"+ a +"</td> <td>"+total+"</td> <td>"+obt1+"</td> <td>"+per1+"%"+"</td></tr> <tr><td>"+ b +"</td> <td>"+total+"</td> <td>"+obt2+"</td> <td>"+per2+"%"+"</td></tr> <tr><td>"+ c +"</td> <td>"+total+"</td> <td>"+obt3+"</td> <td>"+per3+"%"+"</td></tr> <tr><td></td> <td>"+tot_marks+"</td> <td>"+tot_obt+"</td> <td>"+tot_per+"%"+"</td></tr></table>")

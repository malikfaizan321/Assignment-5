
  var celsiusTemp = +prompt("Please Enter Celsius temperature:");
  var celToFahr = celsiusTemp * 9 / 5 + 32;
  var calculateTemp1 = celsiusTemp+'\xB0C is equal to ' + celToFahr+ ' \xB0F.';
    document.write(calculateTemp1);

  document.write("<br>");

  var fahrenheitTemp = +prompt("Plaes Enter Fahrenheit Temperature:");
  var fahrToCel = (fahrenheitTemp - 32) * 5 / 9;
  var calculateTemp2 = fahrenheitTemp+ '\xB0F is equal to ' + fahrToCel + '\xB0C.';
  document.write(calculateTemp2); 
 



var a = 1;
var b = 3;

// conditional (ternary) operator
var max = a > b ? a : b;
console.log(max);

// if, else, else if statements
var num = 3;
if (num >= 15) {
  alert("number is equal and more than 15, number is: " + num);
} else if (num >= 10) {
  alert("number is equal and more than 10, number is: " + num);
} else {
  alert("number is less than 10, number is: " + num);
}

// switch case statement
var day = 4;
switch (day) {
  case 1:
    document.write("Saturday");
    break;
  case 2:
    document.write("Sunday");
    break;
  case 3:
    document.write("Monday");
    break;
  case 4:
    document.write("Tuesday");
    break;
  case 5:
    document.write("Wednesday");
    break;
  case 6:
    document.write("Thursday");
    break;
  case 7:
    document.write("Friday");
    break;
  default:
    document.write("The number of the day is invalid");
}

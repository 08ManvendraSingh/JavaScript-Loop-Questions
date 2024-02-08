//1. print number from 1 to 10;
for (i = 1; i <= 10; i++) {
  document.write(i + ",");
}
document.write("<br>");

//2. Print natural number from 1 to user input.
var n = 12;
for (i = 1; i <= n; i++) {
  document.write(i + ",");
}
document.write("<br>");

//3.Print number from 10 to 1.
for (i = 10; i > 0; i--) {
  document.write(i + ",");
}
document.write("<br>");

//4.Print natural number in reverse order from user input to 1.
var n = 8;
for (i = n; i > 0; i--) {
  document.write(i + ",");
}
document.write("<br>");

//5.Print odd numbers from 1 to 10.
for (i = 1; i < 10; i = i + 2) {
  document.write(i + ",");
}
document.write("<br>");

//6.Print even number from 1 to 10.
for (i = 2; i <= 10; i = i + 2) {
  document.write(i + ",");
}
document.write("<br>");

//7.Print sum of number from 1 to 10.
var sum = 0;
for (i = 1; i <= 10; i++) {
  sum = +sum + i;
}
document.write(sum);
document.write("<br>");

//8.Print sum of number from 1 to user input.
var sum = 0;
var n = 8;
for (i = 1; i <= n; i++) {
  sum = +sum + i;
}
document.write(sum);
document.write("<br>");

//9.Print sum of square of number from 1 to 10.
var sum = 0;
for (i = 1; i <= 10; i++) {
  sum = +sum + i * i;
}
document.write(sum);
document.write("<br>");

//10.Print sum of even number from 1 to user input.
var sum = 0;
var n = 10;
for (i = 2; i <= n; i = i + 2) {
  sum = +sum + i;
}
document.write(sum);
document.write("<br>");

//11.Print sum of odd number from 1 to user input.
var sum = 0;
var n = 10;
for (i = 1; i < 10; i = i + 2) {
  sum = +sum + i;
}
document.write(sum);
document.write("<br>");

//12.Print sum of natural number from 1 to user input.
var sum = 0;
var n = 10;
for (i = 1; i <= n; i++) {
  sum = +sum + i;
}
document.write(sum);
document.write("<br>");

//13.Print sum of square of natural number from 1 to user input.
var sum = 0;
var n = 10;
for (i = 1; i <= n; i++) {
  sum = +sum + i * i;
}
document.write(sum);
document.write("<br>");

//14.Print sum of any digit.
var sum = 0;
var n = 123;
for (i = n; i > 0; i = c) {
  var a = i % 10;
  sum = +sum + a;
  var c = parseInt(i / 10);
}
document.write(sum);
document.write("<br>");

//15.Print sum of square of digit of given number.
var n = 123;
var sum = 0;
for (i = n; i > 0; i = c) {
  var a = i % 10;
  sum = +sum + a * a;
  var c = parseInt(i / 10);
}
document.write(sum);
document.write("<br>");

//16.Find product of any digit.
var n = 123;
var sum = 1;
for (i = n; i > 0; i = c) {
  var a = i % 10;
  sum = +sum * a;
  var c = parseInt(i / 10);
}
document.write(sum);
document.write("<br>");

//17.Find how many digit are there.
var n = 123;
var sum = 0;
for (i = n; i > 0; i = c) {
  var a = i % 10;
  sum = +sum + 1;
  var c = parseInt(i / 10);
}
document.write(sum);
document.write("<br>");

//18.Print any digit in reverse order
var n = 123;
var sum = "";
for (i = n; i > 0; i = c) {
  var a = i % 10;
  sum = sum + a;
  var c = parseInt(i / 10);
}
document.write(sum);
document.write("<br>");
// or
var n = 123;
var sum = [];
for (i = n; i > 0; i = c) {
  var a = i % 10;
  sum = sum + a;
  var c = parseInt(i / 10);
}
document.write(sum);
document.write("<br>");
// or
var n = 123;
var sum = 0;
for (i = n; i > 0; i = c) {
  var a = i % 10;
  sum = +sum * 10 + a;
  var c = parseInt(i / 10);
}
document.write(sum);
document.write("<br>");

//19.Find out factorial of a given number.
var n = 3;
var sum = 1;
for (i = n; i > 0; i--) {
  sum = sum * i;
}
document.write(sum);
document.write("<br>");

//20.To check whether a given number is armstrong or not (3 digit)
var n = 153;
var sum = 0;
for (i = n; i > 0; i = c) {
  var a = i % 10;
  sum = sum + a ** 3;
  var c = parseInt(i / 10);
}
if (sum == n) {
  document.write(sum + " is an armstrong number");
} else {
  document.write("not an armstrong number");
}
document.write("<br>");

//21.To check whether a given number is armstrong or not (any digit)
var n = 1634;
var sum = 0;
var sum2 = 0;
for (i = n; i > 0; i = c) {
  var a = i % 10;
  sum = +sum + 1;
  var c = parseInt(i / 10);
}
for (i = n; i > 0; i = c) {
  var a = i % 10;
  sum2 = sum2 + a ** sum;
  var c = parseInt(i / 10);
}
if (sum2 == n) {
  document.write(sum2 + " is an armstrong number");
} else {
  document.write("not an armstrong number");
}
document.write("<br>");

//22.To check whether a given number is palindrome or not.
var n = 1221;
var sum = "";
for (i = n; i > 0; i = c) {
  var a = i % 10;
  sum += a;
  var c = parseInt(i / 10);
}

if (sum == n) {
  document.write(sum + " is an palindrome number");
} else {
  document.write("not an palindrome number");
}
document.write("<br>");

//23.To check whether a given number is prime or not.
var n = 5;
var sum = 0;
for (i = 1; i <= n; i++) {
  var a = n % i;
  if (a == 0) {
    sum += 1;
  }
}
if (sum <= 2) {
  document.write(n + " is an prime number");
} else {
  document.write("not an prime number");
}
document.write("<br>");

//24.Print table of a given number.
var n = 2;
for (i = 1; i <= 10; i++) {
  document.write(n * i + ", ");
}
document.write("<br>");

//27.Print factors of a given number.
var n = 4;
var sum = [];
for (i = 1; i <= n; i++) {
  var a = n % i;
  if (a == 0) {
    // sum.push(i);
    sum += i + ", ";
  }
}
document.write(sum);
document.write("<br>");

//28.To check whether a given number is perfect or not.
var n = 28;
var sum = 0;
for (i = 1; i < n; i++) {
  var a = n % i;
  if (a == 0) {
    sum += i;
  }
}
if (sum == n) {
  document.write(sum + " is an perfect number");
} else {
  document.write("not an perfect number");
}
document.write("<br>");

//29.To count total number of factors of a given number.
var n = 3;
var sum = 0;
for (i = 1; i <= n; i++) {
  var a = n % i;
  if (a == 0) {
    // sum.push(i);
    sum += 1;
  }
}
document.write(sum);
document.write("<br>");

//30.To check whether a number is even or odd.
var n = 3;
if (n % 2 == 0) {
  document.write("even number");
} else {
  document.write("odd number");
}
document.write("<br>");

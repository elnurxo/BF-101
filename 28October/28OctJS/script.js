let num1 = -7;
let num2 = -3;
let num3 = 10;
let num4 = 2;
let sum = 0;
let count = 0;
let avg = 0;

if (num1 > 0)
{
    count++;
    sum += num1;
}
if (num2 > 0)
{
    count++;
    sum += num2;
}
if (num3 > 0)
{
    count++;
    sum += num3;
}
if (num4 > 0)
{
    count++;
    sum += num4;
}
if (num1<0 && num2 <0 && num3<0 && num4<0)
{
    console.log("cannot divide by zero, all the numbers are negative!");
}
else
{
    avg = sum / count;
    console.log(`Average of positive numbers are: ${avg}`);
    //shortcut for opening terminal - ctrl+backtick then run node script_filename.js
}
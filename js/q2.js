
alert("Please Enter Three Numbers !")
num1= prompt("Enter First Number:");
num2= prompt("Enter Second Number:");
num3= prompt("Enter Third Number:");



if(num1>=num2 && num1>=num3)
{
    console.log("Max number is "+num1)
    document.write("<h1>Max number is "+num1+"</h1>");
}
else if(num2>=num1 && num2>=num3)
{
    console.log("Max number is "+num2)
    document.write("<h1>Max number is "+num2+"</h1>");
}
else if(num3>=num1 && num3>=num2)
{
    console.log("Max number is "+num2)
    document.write("<h1>Max number is "+num3+"</h1>");
}
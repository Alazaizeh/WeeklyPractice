var sum=0;
for (var i = 1; i <=100; i++) {
    if(i%2==0)
    {
        sum+=i;
    }
}
console.log("The sum of even numbers = "+sum)
document.write("<h1>The sum of even numbers = "+sum+"</h1>");
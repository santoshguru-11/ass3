function isPossible(n)
{
    var fac = new Array(10);
    fac[0] = fac[1] = 1;
 
    for(var i = 2; i < 10; i++)
        fac[i] = fac[i - 1] * i;
    var sum = 0;
    var x = n;
    while (x != 0)
    {
        sum += fac[x % 10];
        x = parseInt(x / 10);
    }
    if (sum / n == 1)
        return true;
 
    return false;
}

var n = prompt('');;
     
if (isPossible(n))
    document.write("Special number");
else
    document.write("Not a special number");
var d2000,d500,d200,d100;
function initiate()
{
d2000=Number(prompt("TEll us how many 2000's going to fill: ",""))
d500=Number(prompt("TEll us how many 500's going to fill: ",""));
d200=Number(prompt("TEll us how many 200's going to fill: ",""));
d100=Number(prompt("TEll us how many 100's going to fill: ",""));
//var total=(d2000*2000)+(d500*500)+(d200*200)+(d100*100);
}
function draw()
{
//alert(cash+10);
while (d2000>0 || d500>0 || d200>0 || d100>0)
{
var cash=Number(prompt("Tell us amount you required:"));
var copy=cash;
var tmp;
var denom="";
if(cash>0)
{
tmp=Math.floor(cash/2000);
if(tmp<=d2000)
{
d2000-=tmp;
cash-=(tmp*2000);
denom+="2000X"+tmp+"\n";
}
else
{
cash-=(d2000*2000);
denom+="2000X"+d2000+"\n";
d2000=0;
}
}

if(cash>0&&cash%500==0)
{
tmp=Math.floor(cash/500);
if(tmp<=d500)
{
d500-=tmp;
cash-=(tmp*500);
denom+="500X"+tmp+"\n";
}
else
{
cash-=(d500*500);
denom+="500X"+d500+"\n";
d500=0;
}
}

if(cash>0&&cash%200==0)
{
tmp=Math.floor(cash/200);
if(tmp<=d200)
{
d200-=tmp;
cash-=(tmp*200);
denom+="200X"+tmp+"\n";
}
else
{
cash-=(d200*200);
denom+="200X"+d200+"\n";
d200=0;
}
}
if(cash>0&&cash%100==0)
{
tmp=Math.floor(cash/100);
if(tmp<=d100)
{
d100-=tmp;
cash-=(tmp*100);
denom+="100X"+tmp+"\n";
}
else
{
cash-=(d100*100);
denom+="100X"+d100+"\n";
d100=0;
}
}
if(cash>0)
{
alert("can't provide requested amount: "+copy);
}
else
{
alert("The following are the denomination: \n"+denom);
}
}
}
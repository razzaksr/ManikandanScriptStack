//alert('Welcome to external');
function career()
{
var wish=prompt("Are you intrested in Programming?(Yes/No)","");
if(wish=='Yes')
{
var app=prompt("What sort of application you wish to develop(Window,Web,Mobile, IoT,Data scientist)","");
var tech=""
switch(app)
{
case "Window":case "Mobile":
tech=prompt("Which language you wish to choose for Windoe/Mobile app","");break;
case "Web":
tech=prompt("Which language you wish to choose for Web app","");break;
case "AI":case "DataScientist":case "MachineLearning":
tech=prompt("Which language you wish to choose for ML,AI app","");break;
default:tech="";
}
if(tech=='Java'){alert('you can earn 7 to 9LPA');}
else if(tech=='Python'){alert('you can earn 8 to 11LPA');}
else if(tech=='Dotnet'){alert('you can earn 5 to 8LPA');}
}
else
{
alert("Try to be tester/ Support");
}
}


function loop()
{
var num=prompt("Tell us number to show series:");
for(var data=1;data<=10;data++)
{
alert(data*num);
}
}

function machine()
{
var amount=40000;
var trans=0;
while(amount>0)
{
var debit=prompt("Tell us required amount","");
if(debit%2000==0)
{
amount-=debit;
alert(debit+" withdrawn successfully");
trans++;
}
else
{
alert(debit+' required not match with available denomination');
}
}
alert('Total transaction:'+trans);
}


function check()
{
alert("booking started");
for(var seats=1;seats<=15;seats++)
{
if(seats==4||seats==8||seats==12||seats==10)
{
continue;
}
var amt=prompt("Enter the amount","");
if(amt>=120)
{
alert('Seat booked @'+seats);
}
else{
alert('Insufficient amount');
}
}
}
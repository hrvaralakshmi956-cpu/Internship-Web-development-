console.log("Hello World!");
console.log("Welcome to Js Classes!");

console.error("you have done an error!");

// alert("Warning Alert!");
// prompt("Do you want to exit ?");

//datatypes in Js
//var , let , const , boolean , number , string, null , undefined, char

var fullName="Vara";
var age=22;
var avg=87.9;
var isEligible=true;

//var datatype has a function scope

console.log("value in fullName Variable",fullName);

function GetData()
{
    var j=10;
    console.log("variable j",j);
}
GetData();

//let Datatype
// let has a block scope

let sgpa=9.8;
let grade="A";
let isAssigned=false;

function Sum()
{
    if(3>2)
    {
        var m=10;
    }
        console.log("value of M",m)
    
}
Sum();

//eg for let key word

for(var i=0;i<5;i++)
{
    console.log("i",i)
}
console.log("loop terminates at",i);














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

//const 
const pi=3.142;
console.log(pi);

//undefined
var fruitsList=0;
console.log("variable fruitslist",fruitsList);

//null

var scoredPoints=null;
console.log("scoredPoints",scoredPoints);

//hoisting in JS


console.log(spares);
var spares=10;

//internal flow of hoisting in js

// var spares;
// console.log(spares);
// spares=10;

// data structures

// arrays 

var myList=[1,1.24,true,false,'A',"Hello",null];
console.log("mylist",myList);

// insertion , deletion ,traversal , searching , sorting , push , pop

//splice();
//syntax
//splice (starting index , delet count, new value(s))

var habits=["drawing", "Swimming", "Dancing"];
habits.splice(1,0,"Cycling","OutDoor Games");
console.log("after insertion",habits);

//deletion

var myorders=[10,20,30,45];
myorders.splice(2,1,);
console.log("after deletion",myorders);

// traversal
// map();

// callback funcs
// if a accept or returns a function then its called as a callback function
// function getOrderrs()
// {
//     return function test(){}
// }

// map() is a callback func
// using this we can access the elements of an array or compute a new array from it

var myOrderHistory=[10,245,27,89];

myOrderHistory.map( (a)=>{ 
    console.log("map item",a);
} );

var computedArray=myOrderHistory.map((i)=>{
    return i-5;
} );

console.log("computed Array", computedArray);

//searching
//filter()

//filter() its a callback func

var canceledList=[1001,1010,1020];

var filteredArray=canceledList.filter((a)=>{
    return a>1005
});
console.log("filtered Array", filteredArray);

//sorting

//sort()
// its a callback func

var distance=[100,26,4,78,56];
             [4,26,56,78,100];

var sortedArray=distance.sort((a,b)=>{
    return a-b;

});

console.log("sorted Array", sortedArray);

//push
var transHistory=["Tr101","Tr102","Tr103"];
transHistory.push("Tr104");
console.log("after push",transHistory);
transHistory.pop();
console.log("after pop",transHistory);

// JSON (JavaScript Object Notation);

var myProfile={
    name:"Vara",
    role:"Web developer",
    exp:0,
    edu:"B.E"
};  
console.log("myprofile obj",myProfile);



























































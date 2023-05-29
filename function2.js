//this is a part which is used to carfull learn about function parameters

/**
 * 
 * 
 * 
 * 
 * recall we talked about the 
 * 
 * function parameters earlier and we said they are the variables within the curly brackets of a finction
 * 


 */


var paramet
function whta(parameter){

    parameter= 23
console.log(parameter)
}
whta()

/**
 * apart from the parameter having a value within the curly bracket of the function, they can also have their value asssigned immediatele the 
 * aare declared
 */


function rir(ameter='undefined means you have not given such varabe a value to use.'){
console.log(ameter)

}

rir()

/**
 * 
 * parameters and arguments shouldnt be used interchangeably ever again the data we specify during the function declaration.
 * 
 * the arguments are what we pass back into the the function when they are being called. and thus this is just serving like what we reupdate the function
 * 
 * 
 * 
 */



function add(x,y){
   return (x+y);
}

console.log(add(100,200))
console.log(add(1099,333))
//console.log(add)//this will just return the fuunctiion as an und

console.log(rir('the boy is good'))

/**you can see that there are loads of things to learn with the team,
 * 
 *
 * 
 * if we pass an argument while calling a function then the function doesnt need to have a value defined  ,
 */



//in the function, if the argument is not passed during the function call but we have a set parameter in the the function, the function will return work too.
function declan(dent="black"){
 dent
}
console.log(declan())//this will return black,,
/**it will still work if we have our paramaetes having a value and they are returned inn the { } of the functions... */

//thus know that the use variable inside 

function subtract(xx=55,yy=33)
{/*now you return what yiu want to do with the parameter*/

return xx-yy;

}

console.log(subtract());

//immediately invoking unction expression IIFE:-this is a javscript function that runs as sson as it is defined.. even when it has no name or it is stored in a variable
(function (){    console.log("this is an example of IIFE");
})();
//it can slos be named and also have an argument passed to it


//we can also have our IIFE functions named and also have parameters


(po = function(am){//you can seee that we didnt use a variable type here
    console.log(am="join the league")
})()


//though es6 block scope made things easy
//avoid using a global variable has parameters ..

var alma=222;


{

let alma=33;
console.log(alma)
}

//accesing a parameter outside a function is just calling
var outsideVariable = 10;

function myFunction() {
  var outsideVariable = 20; // Local variable shadowing the outer variable
  console.log(outsideVariable); // Access the local variable
}

myFunction();
console.log(outsideVariable); // Access the outer variable
//parameters are only made to be accesssed within a function not outside


function xen(a=33){console.log(a)} xen()
//and as such it is ot very palatable to define your global variables as functions too

//the paramters can also be arrays or functions to



function cask(er){
    console.log(er[2])
}

cask[1,2,3]
console.log(cask[1,2,3])
//using rest paraameter   to handle an array of parameters

/** parameters can also be fed with variable or arguments ... */

var numers=new Array()

function kek(){

    numers=[1,2,3,4,5]
    console.log(numers[0],numers[1])
}
kek(1,2)



console.log(numers[2])//undefined..because the paramweter is meant too only be used within the array..
//to however manipulate a variable u used inside the function outside, then only thing we need is to keep using it but it just must not be the parameter


//arrow functions


/**Arrow functions are a concise way of writing a function..they are more like a shorthand for writing out a function
 * 
 * 
 * all we just newed to do here is to remove the function keyword and replace it with a =>
 */
const asr= (a,d)=>{
    console.log(a+d)
}

asr()

//calllback functiions are argumnets that aree paseed insode a function as an argument and

/**
 * 
 * A callback function is a function that is passed as an argument to another function and is invoked by that function at a specific time or in response to a certain event.
The callback function is typically defined separately from the function it's passed to, allowing for reusability and customization of behavior.
 */

function greet(named='kkkkkkkkkkkk') {
    console.log(`Hello, ${named}!`);
  }
  
  function performGreeting(callback) {
    console.log('Preparing to greet...');
 callback();
    console.log('Greeting performed!');
  }
        
  performGreeting(greet);


  function mus(po){
    return 2*po
  }

  function final(mus)
  {
    console.log(mus(2222))
  }
  final(mus)//YOU CAN SEE HOW A CALLBACK WORKS BA..IT IS A KIND OF FUNCTION WHICH WILL ONLY BWW USED AS THE paramter to another function

  function domultiplca( income){
    income='2000000';
    console.log(income)



  }
   function geh(domultiplca){

   return   2*domultiplca()
   }

   geh(domultiplca)
function broke(money){
console.log(money)
}

function wealt(a,d,broke){
broke('doo')
console.log(a,d)//you can just return a ,d alobe self

    
}
wealt("2","3",broke)

//the main reason for functions callback is to LLOW THE control of function execution//
/**the functions wealt can sstill carry its own parametert too */

//exercise

/** write a function that returs aqaure of a number */


function square(a) {
    console.log(a*a)
}
square(33)

function area(length,breadth)
{console.log(2*(length+breadth))}
area(45,888)

function pop(n) {
    if (n <= 1) {
      return false;
    }
  
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        return false;
      }
    }
  
    return true;
  }
  
  function prime(n) {
    if (pop(n)) {
      console.log(n + " is a prime number.");
    } else {
      console.log(n + " is not a prime number.");
    }
  }
  
  prime();


var pot=34;
  let prom=new Promise(
    funct
  );
  function funct(myResolve,myReject){
    

    let lada=pot*45//this is the state

    if(lada %2 >0){
myResolve ("you can understand hereh")
    }
    else{myReject ('yeah lets go w')}
  }
  prom.then(
    function(value){console.log(value)},
  function(error){console.log(error)})





  function factorial(n){
    if(n==1 || n==0){
        return 1
    } else{ return n*factorial(n-1)}//you cant console.log here since you dont have a value yet 
  }
  
console.log(factorial(9))



function added(t){
    if(t ==1 ){ return 1}//the base condition is not for your executed code but for when to stop taking input from your arguments

    else if( t==0){return 0}
    else{return t + added(t-1)}
}

console.log(added(9))

function mult(mul){
    if(mul <=5){return 1}
    else{ return mul*mult(mul-1)}
}
mult(8)
console.log(mult(8))

//finding the sum of numbers between a number to 150
function up(g){
    if(g >=150){
        return 1
        
    }

    else{ return g + up(g+1)}
}
console.log(up(66))


function countDown(bivk){

if(bivk <=1){return 1}
  else{return countDown(bivk-1)}
}


console.log(countDown(5));

 function adee(a){

    if(a>=50){return a}
       else return a + adee(a+1)
    
 }
 console.log(adee(12))
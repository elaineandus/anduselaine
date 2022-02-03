/* variables (var, let and const)
- variables are used to assign a value
- in js, dynamically type ang mga variables, it means kapag siya ay number, hindi mo na need i-define kung float or int automatically number na siya

how to create a variable?
//var(declaration, initialization)

//var(global scope/can be accessed anywhere)
var num;
num=5;
num=20;
console.log(num);

var age=23;
age=60;
var newAge=age;
console.log(age);
var message= "newAge" + age;
console.log(message);

how to make it into block level scope
- iife immediately invoked function expressions
- para maprevent yung global scope, iwwrap niya sa isang function

(function(){
    var p=5;
})();

console.log(var); or windows.p sa console

-----------------------------------------------------------
//let and constant(block level scope/ more restrictive)
- most recommended variable to use

let num;
num = 5;

const num2 = 20;

*/

/* Two classifications of data types
1. primitive
-string
-number
-boolean
-null
-undefined

others
-function
-bigint

sa js kahit naka-enclose siya sa double quote or single quote, babasahin niya pa rin yung as string

*/

/* const name="Elaine";
const age=20;
const grade=90.7;
const isB=true; */
/* const nu=null */ /* absence of a value or entity */ 
/* const un=undefined */ /* given by default by the windows, means we haven't assign a value para siyang naka-hide; nag-assign ka ng value, nagcreate ka ng variable pero hindi mo pa siya in-assign */
/* console.log(typeof name, age, grade, isB, nu, un);  */
/* pag number, color blue */
/* typeof same lang ng output, ang diff -> yung typeof operator or keyword ay ginagamit to differentiate itong mga primitive data types sa js, so ang irereturn niya lang it's either yung 9 primitive data types (undefined, object, boolean, number, bigInt, string, symbol, function, object) */

/* primitive data types do not have method or functions
- meaning to say, itong si name, age, grade ay walang function
hal. name.toUpperCase() --> mali ito, if you want them to invoke a function

{
    let myName="Elaine";
    myName=myName.toUpperCase();
    console.log(myName);
}
*/

/* in js, kapag sinabing object - anything that that is not a primitive value is an object that includes ito yung mga arrays, functions, constructors and even yung objects themselves 

objects are same in all programming level language
- makakagawa ka lang ng isang object, if you can define a class

*/


/* 1.

ANSWERS TO EXERCISE 

var greet = "Welcome message";
greet = "Greetings";
console.log(greet);

var name = "Elaine";
name = "Ariana";
console.log(name);

2.
let a = 5;
let b = 10;
console.log(a+b);

3. 
const num = 5;
num < 10 ? console.log(num) + console.log("Less than 10"):console.log("It was equal to 10")
const num1 = 10;
num1 <= 10 ? console.log(num1) + console.log("Less than 10"):console.log("It was equal to 10")

4.
let car = {
    color: "red",
    topSpeed: 300,
    model: "mustang",
    company: "ford",
    year: "2021",

    turnon:function()
    {
        console.log("Turn on the Car");
    },
    startdrive:function()
    {
        console.log("Start Driving the Car");
    }
}
console.log(car.turnon());
console.log(car.startdrive());

5.
var name = prompt("What is your name?");

let string1='What is your name:';
console.log(name);

let string= (`Welcome ${name}`) ;
console.log(string);


*/



/* console.log("Hello");
console.warn("this is warning");
console.error("this is an Error"); */



/* L E S S O N 5b */

/* 
different types of function
- constructor function
classes
dome (document object model)

// In Javascript there are 2 types of Functions
1. Functions (regular) - called traditional functions
Regular Functions() is classified into 2
    1. Function (declaration)
    2. Function (expression)

    Function Declaration - defines a function with a specified parameter, it consists of the following:
        1. Name/Function Name
        2. Parameteres 
        3. Statement - nakalagay sa statements, it comprise the body of the function

        To create a function declaration you must first define or invoke the function keyword followed by your function name; inside the open and close parenthesis are the parameters

        There are also different ways on how you are going to create your parameter, In javascript, you can assign a value inside the parameters

        If its a function, kailangan meron siyang open and close parenthesis

        Remember: Javascripts is considered as dynamically type language

    Function Expression - a javascript function can also be defined using an expression, we can store it in a certain variable like let, const, var. After a function expression has been stored sa in 1 variable, the variable can be used as a function

    Other property of function expression is it's called anonymous, meaning they are used and forgotten immediately, meaning to say nagr-run siya as soon as it is define

    Sa function expression, ino-omit na yung function name kasi naka-store siya sa isang variable, after the function keyword, we can now specify our parameters, after parameters just like function declaration is the statement

    Sa function expression, ini-store siya sa isang (1) variable, so nir-run siya as soon as it's define unlike kay function declaration.

    Another difference of function expression and function declaration is through the use of hoisting

    * Hoisting - this a javascript's default behavior of moving all declarations to the top of the current scope, meaning to say to the top of the current script or the current function, ang ibig sabihin niyan everytime we declare a variable, im-move siya to the top of the current scope ibig sabihin yung engine natin is aware of this variable

    In terms of function declaration, specifically all of the functions written with function declaration are known bago pa man siya ir-run or bago i-run yung code natin, so this will allow us to call a function before natin siya i-declare, so in short we use function declaration kung gusto nating mag-create ng isang function on a global scope and make it available through out our code

    In terms of function expression, we use function expression para malimit natin where the function is available, so yung function expression is not hoisted.

    Main advantage of function expression - ina-avoid niya na ma-pollute yung program natin with this global scope

    Kapag gagamit ng function expression make it sure na kailangan i-declare muna natin siya bago natin siya tawagin/call

        In javascript, there 3 types of variables
        var, let, const
            var - has a global scope and can be accessed anywhere
            
                variables or variables declared using let and const, these are hoisted to the top of the block, but not initialized, meaning yung isang block ng isang code ay aware siya na meron kang variable but it cannot be use until na hindi mo siya dineclare, so using let and const variable, bago mo siya i-declare will result to a refference error

            let/const - has a block level scope

                when it comes to let, kailangan mo siya i-declare bago mo siya i-call

                Kapag cinall yung isang function bago dineclare, using var variable will result to undefined,

                Undefined is considered as one of the primitive data type of javascript

                kapag ang variable natin ay let at const, we will encounter a refference error, meaning kailangan i-declare muna ang variable bago natin siya gamitin.

                Remember: to avoid bugs, always declare lahat ng variables at the beginning of every scope, kasi yung javascript ini-interpret niya yung code starting from first line up to last statement

                remember kanina, yung function declaration, pwede tayong mag function call before or after function declaration

                pero sa function expression, hindi natin pwedeng i-call bago yung declaration, kailangan i-declare muna bago i-call 

                pagdating sa variables, always declare your variables bago i-call

2. Functions (arrow) - sa arrow functions kailangan i-declate muna bago yung function call

convert regular functions to an arrow functions
first, you need to omit the function keyword, and then replace it with a variable

if it's an arrow function, this is somehow like function expression since naka-store siya sa isang variable kailangan natin siyang i-assign, and then after your equal sign, next parameter, after parameter before the curly braces, naglalagay tayo ng arrow fat functions, para siyang short hand or short cut ng isang function declaration, after an arrow function, we can directly perform an operation kahit wala ng curly braces

Kapag ang parameter isa lang, kahit wala na siyang open and close parenthesis

Sa arrow functions, pwede rin mag-assign ng value
-> malformed arrow function parameter list - kasi nag-assign tayo ng value kailangan natin siyang i-enclose sa open and close parenthesis kahit isa lang yung ating variable. Pero kung hindi tayo nag-assign ng value kahit tanggalin na natin yung open and close parenthesis


Object creation: constructor - object creation using constructor

Differentiate how we create an object using constructor vs object literals 

In javascript, there are 4 methods we use to create an object
    1. Object literal - we use this to create a single object

    2. New operator or constructor - we use this to create multiple object

        In javascript, we can use functions as template to create other objects

        In javascript, constructor functions are similar to a normal java constructor

        if we want to initialize our objects, this refers to the object when the object has been created

        Constructor is useful when we want to create multiple having similar objects with the same properties and methods. 

        Take note: that our constructor name/identifier natin it starts with capital letter and you need to invoke the function keyword because we need to use it because arrow funtion cannot be used to define constructor functions

        Inside the body, we're going to use "this." operator, just like in java, we use this to refer to its objects' properties like first name and then last name. When it comes to javascript, "this." considers as object that has a data of the object instance that we create using the new keyword

        The difference, you have to define each object using object literal whereas when it comes to constructor, just create a template, and after creating the template, you can now define your objects or multiple objects, apart from defining object, we can also add methods in 1 object

        Number - is used to return a new number object  

        In javascript also, we have javascript object prototype, we use this everytime we want to add properties and method sa isang constructor, we use prototype

            We can also use prototype to display the whole data of an object.

    3. Object.create

    4. Class - create an object using class, in javascript this are templates, in java this is template or blueprint. we need to define class before we can create an object

    Class consists of 2 components
        1. class expressions
        2. class declaration - inside your class, create constructor, constructor initializes the properties of your class.

            purpose of constructor is to initialize your object having the attributes

In java, bago makapag-create ng object kailangan muna i-define yung class

When it comes to javascript classes, you cannot create an object if you haven't define your template which is the class, so you need to create first a class to create an object


// DOM (Document Object Model) - this is considered an interface that represents how this html documents are read by this browser. It allows us, it allows a certain language like javascript to manipulate the structure and even the style of the website.

So when an html document loads in a browser, it becomes a document object 

In javascript, we have Root Element - this root element that represents the html document that contains the properties and methods. With the help of this document object, we can add a dynamic content to our webpage



/* L E S S O N 6

react js library - is not a framework
react native - is a framework

React Features
1. jsx
2. components
3. one-way data binding
4. virtual dom
5. simplicity
6. performance













*/





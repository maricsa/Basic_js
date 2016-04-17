//VARIABLES:store any data type

var name = 'Sophia' //assigning a value to the variable 'name'
console.log ("Hi " + name);

var myAge = 30  //we can replace the value of variable with a new value
var myAge = 40
console.log(myAge);

// DIFFERENT DATA TYPE
var myString = 'Nice Day' //STRINGS
console.log(myString);

var x = 2; var y = 3; // NUMBERS
console.log (x + y);

var myBool = true  //BOOLEANS (work closely with comparation operators)
console.log(myBool);

var yourBool = false
console.log(yourBool);  

var hisBool = 2 > 1
console.log(hisBool);

var emptyVar         //UNDEFINED DATA TYPE 
console.log(emptyVar);

var bestFriends = ["Marko", "Cobe" , "Milan" ,"Mina"]; //ARRAYS
console.log(bestFriends);

var difTypes = [17, 12, 23, 6, "glass", "wood"]; //ARRAYS can stored different type of data
console.log(difTypes);

var food = [["chees", "bread", "yogurt"],["pickles", "kombucha", "bread"]]; //MULTI-DIMENSIONAL ARREYS
console.log(food);
//ARRAYCEPTION
/* access the first array inside 
 then the second item inside that array */
console.log(food[0],[1]);

// CREATE AN OBJECT WITH STRINGS FOR KEYS 
var cat = {name:"Brunhilda" , breed: "Persian"};
// Pull out data with bracket notation 
console.log(cat['name']);
// Create an array with strings for keys 
var user = {firstName: 'Natasha', lastName: 'Radovic'};
// Pull out data using dot notation 
console.log(user.firstName);

//TESTING
// CHECKING THE VALUES AND DATA TYPES with operators === AND !==

var myBoolean = 10 !== "10"
console.log(myBoolean);

//IF Statement
var happyHour = true
if(happyHour) {
	console.log("Martini!")
};
 //IF ELSE STATEMENT
var raining = true 
if (raining) {
	console.log("Staying in !")
} else {
     console.log ("Outdors!")
	};

//DEBUGGING(alerts, comments, the console)
alert("Hello World");
console.log("My Content");

//FUNCTIONS

var myDay = function(birthday){
	console.log ("My birthday is"  + birthday); //FIRST FUNCTION
};
myDay(" May 12th");


var cost = function (price) { //SECOND FUNCTION
	console.log("$" + price)
};
cost(20)
//----------------------------------------------------------------------------
//PROBLEMS:

/* 1.Declare a function that takes no arguments but prints something to the console. 
 Try running it after it has been declared.*/
 var makeNoise = function(){
 	console.log("Ping!")
 }
  makeNoise();

/* 2.Create a script with two variables assigned to two numbers.
 Add them together and output the result to the console.*/
var x = 28; var y = 36;
  console.log (x + y);
// Now do the same with two strings.
 var string1 = "Hi "; var string2 = "Nastasia";
   console.log (string1 + string2);
/* 3.Create a multidimensional array related to a subject that interests you. 
Output two of the items in sub-arrays to the console.*/
var camera = [["Rostrum", "Reflex", "Still"],["Movie", "Multiplane", "Press"]]; //MULTI-DIMENSIONAL ARREYS
console.log(camera);
console.log(food[1],[3]);

/* 4.Write a script that checks if a variable is less than 10. 
 If it is, alert the user that their variable is less than 10. 
 If it is not, using the console, 
 let the user know that what the variable was and that it was greater than 10.*/
function checkTen (z){
	if (z < 10){
	console.log("Less than ten!"); 
}
   else if (z > 10){
   console.log("Greater than ten!");
}
	else {
		console.log ("It's a string!")
	}
}
checkTen(5);
checkTen(39);
checkTen("sun");

/* 5.Try running the script and then changing the variable's value 
to see how this affects the program's output.*/
var number1 = 30
function newNumb(){
	var number1 = 50
	console.log(number1);
}
 newNumb();
 console.log(number1);

/* 6.Write a similar program to check if a string stored in a variable 
is the same as another string.*/
function check(){
  var x = "textbox1"
  var y = "textbox2"
    if(x === y){
    	console.log(x);
    }
    else
    {
        console.log(y); 
    } 
}
check();

/* 7.Declare a function that takes a name as an argument 
 and tells the user what name they've entered. 
 Try running it after it has been declared.*/
function repeateName(ime){
	console.log ("Your name is " + ime);
}
repeateName("Milan");

//-------------------------------------------------------------------------------

// SCOOPE
 // var = "global scope"
 // x = "global scope"

function new_function () {
	var x = "new local scope"
};


var z = 17; //nova var
function local_z (z) {  //new local var inside the function(will desapear after the function is closed)
	console.log(z);     //
};
 local_z(20)      //will give  #20

console.log(z); //pozvati globalan scope dace #17

// changng the value of var z
var z = 30;
function new_local ()
{
	var z = 20;
	console.log (z);
}
new_local()   //give the value of var z 20

console.log(z)  //give value of var 3

//BOLOCK SCOPE

//Global Scope

var z = 3;
function some_f(z){   
	console.log(z); 
};


var c = 20;
function hello() {
	if(true){
		var c = 30;
	}
	console.log(c);
	//returns 30 not a global value 
	//var don't have different scope within a block
}

// FUNCTION SCOPE

function argument(arg1){
	console.log(arg1);
};

argument(hello);

//ADDING CODE TO ALGORITHM var my_arr = ["giraffe", "zebra", "antelope"];
// for(i = 0; i < my_arr.length; i++){
// 	console.log (i + " " + my_arr[i]);
// }

//FORM VALIDITATION
// function validate_form ( )
// { 
//     valid = true;

//     if ( document.contact_form.contact_name.value == "" )
//     {
//         alert ( "Please fill in the 'Your Name' box." );
//         valid = false;
//     }

//     return valid;
// };






















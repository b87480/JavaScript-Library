/*  Joshua Whitney
 *  SDI 1303
 *  Project 4
 *  Javascript Library
 *  3-27-2013
 */


//Start Library

// String Functions


//Phone Number Function
var checkPhone = function(phone) {
	
	var x = phone.length;
	var w = "-";
	var y = w.indexOf("-");
	var z = w.lastIndexOf("-");
	
	if (x == 12 || y == 3 || z == 7) {
		console.log("Good Phone Number!");
		return true;
	} else {
		console.log("Bad Phone Number!");
		return false;
	}
	
	
};
checkPhone("123-456-7891");

//Email Function
var checkEmail = function(email) {
	
	var x = email;
	var a = x.indexOf("@");
	var d = x.lastIndexOf(".");
	
		if (a < 1 || d < a + 2 || d + 2 >= x.length) {
  			return false;
  			}
};
checkEmail("jwhitney114@gmail");



//URL Function
var checkUrl = function(url) {
	
	if (url.startsWith("http://")) {
		console.log("true");
	} else if (url.startsWith("https://")) {
		console.log("true");
	} else {
		console.log("false");
	}
};
checkUrl("httpp://www.josh.com");

//UpperCase Function                                    
var titleCase = function(string) {
	
	var str = string.split(" ");
    
    	for ( var i = 0; i < str.length; i++ )
    	{
        	var j = str[i].charAt(0).toUpperCase();
       		 str[i] = j + str[i].substr(1);
    	}
    console.log(str.join(" "));
    return str.join(" ");
	
};
titleCase("I finally figured it out!");

//Change String Function
/*var changeString = function(string,",","/") {
	
	var str = string;
	var com = ",";
	var sla = "/";
	var spl = str.split("");
	console.log(spl);
};
changeString("Hello everyone!");*/
// Number Functions


//Format a Number Function


//Fuzzy-Match Number Function


//Dates Number Function


//Return Number Function						//Need to add conditional if I have time
var numberReturn = function(num) {
	
	console.log(Number(num));
};
numberReturn("875789");
// Array Functions


//Smallest Value Array Function
var smallValue = function(array,num) {
	
	for (var i = 0; i < array.length; i++) {
		if (num < array[i]) {
			var num = array[i];
			//return num;
		}
	}

	console.log(num); 
};
smallValue([1,4,7,9,10,14,15],12);
//Total Value Function


//Array Sorter Function


//End Library
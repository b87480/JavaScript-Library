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
	
	var web = url;
	var x = web.indexOf("http://");
	var y = web.indexOf("https://");
	
	if (x === 0 || y === 0) {
		console.log("Valid Web Site");
		return true;
	} else {
		console.log("Not a Valid Website!");
		return false;
	}
	
};
checkUrl("https://www.josh.com");
//UpperCase Function


//Change String Function


// Number Functions


//Format a Number Function


//Fuzzy-Match Number Function


//Dates Number Function


//Return Number Function


// Array Functions


//Smallest Value Array Function


//Total Value Function


//Array Sorter Function


//End Library
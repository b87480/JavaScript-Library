/*  Joshua Whitney
 *  SDI 1303
 *  Project 4
 *  Javascript Library
 *  3-27-2013
 */


//Start Library

// String Functions


//Phone Number Function

//Email Function
function checkEmail(email) {
	
	var x = email;
	var a = x.indexOf("@");
	var d = x.lastIndexOf(".");
	
		if (a < 1 || d < a + 2 || d + 2 >= x.length) {
  			return false;
  			}
};
checkEmail("jwhitney114@gmail");



//URL Function


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
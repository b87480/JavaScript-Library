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

//UpperCase Function                                     //does not work!!!
var titleCase = function(string) {
	
	var str = string;
	
	for (var i = 0; i < str.length; i++) {
		str[i].charAt(0).toUpperCase() + str[i].slice(1);
		console.log(str[i]);
	}

};

text = "Blah blah blah blah blah blah Eric \
blah blah blah Eric blah blah Eric blah blah \
blah blah blah blah blah Eric";

var myName = "Eric";
var hits = [];

// Look for "E" in the text
for(var i = 0; i < text.length; i++) {
	if (text[i] == "E") {
		// If we find it, add characters up to
		// the length of my name to the array
		for(var j = i; j < (myName.length + i); j++) {
			hits.push(text[j]);
		}
	}
}

if (hits.length === 0) {
	console.log("Your name wasn't found!");
} else {
	console.log(hits);
}
//Change String Function


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
	
	
	for (var i = array[0]; i < array.length; i++){
		if (num < array[i]) {
			var num = array[i];
			//return num;
		}
	}

	console.log(num); 
};
smallValue( [1,4,7,9,10,14,15],12);
//Total Value Function


//Array Sorter Function


//End Library
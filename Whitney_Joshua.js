/*  Joshua Whitney
 *  SDI 1303
 *  Project 4
 *  Javascript Library
 *  3-27-2013
 */




var myLibrary = function() {      //Start Library


// STRING FUNCTIONS
//PHONE NUMBER FUNCTION
var checkPhone = function(phone) {
	
	var x = phone.length;
	var w = "-";
	var y = w.indexOf("-");
	var z = w.lastIndexOf("-");
	
	if (x == 12 || y == 3 || z == 7) {
		return true;
	} else {
		return false;
	}	
}; //END PHONE NUMBER FUNCTION


//EMAIL FUNCTION
var checkEmail = function(email) {
	
	var x = email;
	var a = x.indexOf("@");
	var d = x.lastIndexOf(".");
	
		if (a < 1 || d < a + 2 || d + 2 >= x.length) {
  			return false;
  		} else {
  			return true;
  		}
}; //END EMAIL FUNCTION


//URL FUNCTION
var checkUrl = function(url) {
	
	if (url.startsWith("http://")) {
		return true;
	} else if (url.startsWith("https://")) {
		return true;
	} else {
		return false;
	}
};//END URL FUNCTION


//UPPERCASE FUNCTION                                   
var titleCase = function(string) {
	
	var str = string.split(" ");
    
    	for ( var i = 0; i < str.length; i++ ) {
    	
        	var j = str[i].charAt(0).toUpperCase();
       		str[i] = j + str[i].substr(1);
    	}
    return str.join(" ");	
};//END UPPERCASE FUNCTION


//CHANGE STRING FUNCTION
var changeString = function(string) {
	
	var str = string.replace(/,/g, "/");
	return str;
};//END CHANGE STRING FUNCTION


// Number Functions
//Format a Number Function
var formatNumber = function(num) {
	
	var n = num.toFixed(3);
	return n;
};//END FORMAT FUNCTION

//Fuzzy-Match Number Function
//Dates Number Function

//Return Number Function						
var numberReturn = function(num) {
	
	return Number(num);
	
};//END RETURN NUMBER FUNCTION


// Array Functions
//Smallest Value Array Function
//Total Value Function
//Array Sorter Function
	return {
		"checkPhone"	: checkPhone,
		"checkEmail"	: checkEmail,
		"checkUrl"		: checkUrl,
		"titleCase"		: titleCase,
		"changeString"	: changeString,
		"numberReturn"	: numberReturn,
		"formatNumber"	: formatNumber
	}

}  //End Library

var newLibrary = new myLibrary();

console.log("Check Phone Number: " + newLibrary.checkPhone("123-456-7899"));
console.log("Check Email: " + newLibrary.checkEmail("jwhitney114@gmail.com"));
console.log("Check URL: " + newLibrary.checkUrl("https://google.com"));
console.log("Capitalize first Letter: " + newLibrary.titleCase("I did it ha ha ha!"));
console.log("Change String: " + newLibrary.changeString("a,b,c"));
console.log("Number Return: " + newLibrary.numberReturn("12389706"));
console.log("Format Number: " + newLibrary.formatNumber(1.234567));




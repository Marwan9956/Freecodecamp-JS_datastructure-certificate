/*
4-JavaScript Algorithms and Data Structures Projects: Telephone Number Validator


Return true if the passed string looks like a valid US phone number.

The user may fill out the form field any way they choose as long as it has the format of a valid US number. The following are examples of valid formats for US numbers (refer to the tests below for other variants):

555-555-5555
(555)555-5555
(555) 555-5555
555 555 5555
5555555555
1 555 555 5555
For this challenge you will be presented with a string such as 800-692-7753 or 8oo-six427676;laskdjf. Your job is to validate or reject the US phone number based on any combination of the formats provided above. The area code is required. If the country code is provided, you must confirm that the country code is 1. Return true if the string is a valid US phone number; otherwise return false.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

*****************************************************************************************************
telephoneCheck("555-555-5555") should return a boolean.
telephoneCheck("1 555-555-5555") should return true.
telephoneCheck("1 (555) 555-5555") should return true.
telephoneCheck("5555555555") should return true.
telephoneCheck("555-555-5555") should return true.
telephoneCheck("(555)555-5555") should return true.
telephoneCheck("1(555)555-5555") should return true.
telephoneCheck("555-5555") should return false.
telephoneCheck("5555555") should return false.
telephoneCheck("1 555)555-5555") should return false.
telephoneCheck("1 555 555 5555") should return true.
telephoneCheck("1 456 789 4444") should return true.
telephoneCheck("123**&!!asdf#") should return false.
telephoneCheck("55555555") should return false.
telephoneCheck("(6054756961)") should return false
telephoneCheck("2 (757) 622-7382") should return false.
telephoneCheck("0 (757) 622-7382") should return false.
telephoneCheck("-1 (757) 622-7382") should return false
telephoneCheck("2 757 622-7382") should return false.
telephoneCheck("10 (757) 622-7382") should return false.
telephoneCheck("27576227382") should return false.
telephoneCheck("(275)76227382") should return false.
telephoneCheck("2(757)6227382") should return false.
telephoneCheck("2(757)622-7382") should return false.
telephoneCheck("555)-555-5555") should return false.
telephoneCheck("(555-555-5555") should return false.
telephoneCheck("(555)5(55?)-5555") should return false.







*/


/*
var firstCase = /[0-9][0-9][0-9][-][0-9][0-9][0-9][-][0-9][0-9][0-9][0-9]/;         // 555-555-5555
  var secondCase = /[(][0-9][0-9][0-9][)][0-9][0-9][0-9][-][0-9][0-9][0-9][0-9]/;     // (555)555-5555
  var thirdCase  = /[(][0-9][0-9][0-9][)][\s][0-9][0-9][0-9][-][0-9][0-9][0-9][0-9]/; //(555) 555-5555
  
  
555-555-5555
(555)555-5555
(555) 555-5555
555 555 5555
5555555555
1 555 555 5555
1 555-555-5555
1(555)555-5555


*/

function telephoneCheck(str) {
	// Good luck!
	var result = '';
	var firstCase = /\d{3}[-]\d{3}[-]\d{4}/;         //  555-555-5555
	var secondCase = /[(]\d{3}[)]\d{3}[-]\d{4}/;     // (555)555-5555
	var thirdCase  = /[(]\d{3}[)][\s]\d{3}[-]\d{4}/; // (555) 555-5555
	var fourthCase = /\d{3}[\s]\d{3}[\s]\d{4}/; 	   //  555 555 5555
	var fifthCase  = /\d{10}/;                  	   //  5555555555
  
	var sixthCase  = /[1][\s]\d{3}[\s]\d{3}[\s]\d{4}/;//1 555 555 5555
	var sventhCase = /[1][\s]\d{3}[-]\d{3}[-]\d{4}/;   //1 555-555-5555
	var eighthCase = /[1][(]\d{3}[)]\d{3}[-]\d{4}/;   //1(555)555-5555
	
	var ninthCase  = /[1][\s][(]\d{3}[)][\s]\d{3}[-]\d{4}/;//1 (555) 555-5555
	var tenthCase = /[1][\s][(]\d{3}[)]\d{3}[-]\d{4}/;   //1 (555)555-5555
	
	
	//result = tenNum.search(fifthCase);
	
	switch(0){
		case str.search(firstCase):
			result = true;
			//console.log('first');
			break;
		case str.search(secondCase):
			result = true;
			//console.log('second');
			break;
		case str.search(thirdCase):
			result = true;
			//console.log('third');
			break;
		case str.search(fourthCase):
			result = true;
			//console.log('fourth');
			break;
		case str.search(fifthCase):
			result =  str.length== 10 ? true : false;
			//console.log('fifth');
			break;
		case str.search(sixthCase):
			result = true;
			break;
		case str.search(sventhCase):
			result = true;
			break;
		case str.search(eighthCase):
			result = true;
			break;
		case str.search(ninthCase):
			result = true;
			break;
		case str.search(tenthCase):
			result = true;
			break;
		default:
			result = false;
			break;
	}
	
	console.log(result);
	return result;
}
telephoneCheck("555-555-5555");



















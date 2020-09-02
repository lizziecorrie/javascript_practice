//return a reversed string
function reverse(str) {

  	var newString = "";
	
  	for (var i = str.length - 1; i >= 0; i--) {
		newString += str[i];
	}
  
  	return newString;
  
}

//convert the string to uppercase and remove whitespace and punctuation
function lettersOnly(str) {

	const regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;

	return str.replace(regex, '').toUpperCase().split(' ').join('');
  
}

//return true if two strings are the same, ignoring whitespace and punctuation
function compare(one, two) {

  	var upperOne = lettersOnly(one);
  	var upperTwo = lettersOnly(two);

  	if (upperOne.localeCompare(upperTwo) === 0) {
		return true;
	} else {
		return false;
	}
  
}

//return true if a string is a palindrome, ignoring whitespace and punctation
function palindrome(sentence) {

	let revSentence = reverse(sentence);

 	 if (compare(sentence, revSentence)) {
    		console.log(sentence + " is a palindrome");
		return true;
	} else {
    		console.log(sentence + " is not a palindrome");
		return false;
	}	

}

//return true if two strings are anagrams of each other, ignoring whitespace and punctation
function anagram(str1, str2) {

	let word1= lettersOnly(str1);
	let word2= lettersOnly(str2);

	var tracker;

	for (var i = 0; i < word1.length; i++) {

   		tracker = word2.search(word1[i]);

		if (tracker == -1) {
			console.log(str2 + " is not an anagram of " + str1);
			return false;
		} else {
      			word2 = word2.slice(0, tracker) + word2.slice(tracker + 1);
      			console.log(word1 + " " + word2);
		}
    
	}

	console.log(str2 + " is an anagram of " + str1);
	return true;

}

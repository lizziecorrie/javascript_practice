//printReverse prints in reverse order without changing array itself

function printReverse(arr) {
	for (var i = arr.length - 1; i >=0; i--) {
		console.log(arr[i]);
	}
}



//isUniform returns true if all elements in the array are identical

function isUniform(arr) {
	var n = 0;
	while (n < arr.length - 1) {
		if (arr[n] == arr[n + 1]) {
			n++;
		}
		else  {
			return false;
		}
	}
	return true;	
}



//sumArray returns the sum of all numbers in the array

const sumArray = arr => {
	var sum = 0;
	arr.forEach(function(arr) {
		sum += arr;
	})
	return sum;
}



//max returns the maximum number in the array

const max = arr => {
	var maximum = 0;
	arr.forEach(function(arr){
		if (!maximum) {
			maximum = arr;
		}
		else if (arr > maximum) {
			maximum = arr;
		}
	})
	console.log(maximum);
}




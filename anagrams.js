// test array
var arr = ["dog", "god", "cat", "act", "tac"]

// BEGIN RECURSIVE IMPLEMENTATION

// helper function to check if string 1 is an anagram of string 2
function is_anagram_of(str1, str2) {
	// if they aren't the same length return false immediately
	if(str1.length != str2.length) {
		return false
	}
	// loop through the second word (you are only comparing the first 
	// letter of the first word)
	for(var j = 0; j < str2.length; j++) {
		// if the letters are equal and they are the only letters in 
		// the strings return true
		if(str1[0] === str2[j] && str1.length === 1) {
			return true
		}
		// if the letters are equal (and aren't the only letters) then 
		// take out the matching letters and run the algorithm on the 
		// remaining strings
		else if(str1[0] === str2[j]) {
			str1new = str1.slice(1)
			str2new = str2.slice(0, j) + str2.slice(j+1)
			return is_anagram_of(str1new, str2new)
		}
		// if we reach the end return false
		else if(j === (+str2.length-1)) {
			return false
		}
	}
}
// anagrams function returns a js object with keys that are the first 
// instance of the word and values that are the number of anagrams 
function anagrams(arr) {
	// initialize return object
	var retobj = {}
	var b = new Date();
	var before = b.getTime();
	// loop through the array
	for(var i = 0; i < arr.length; i++) {
		// loop through the rest of the elements 
		for(var j = i; j < arr.length; j++) {
			// if the two words are anagrams and they aren't the same word
			if(is_anagram_of(arr[i], arr[j]) && i !== j) {
				// if the js object has the key in it
				if(retobj[arr[i]]) {
					// then add 1 to it
					retobj[arr[i]] = retobj[arr[i]] + 1
				} else { 
					// create the key and set it to 1
					retobj[arr[i]] = 1
				}
				// take out the word that you just matched
				arr.splice(j, 1)
				// make sure the loop doesn't skip one word
				j--
			}
		}
	}
	var a = new Date();
	var after = a.getTime();
	retobj.time = (+a)-(+b)
	return retobj
}

// BEGIN HASH MAP IMPLEMENTATION

function anagrams_map(arr) {
	var b = new Date();
	var before = b.getTime();
	var retobj = {}
	// loop through the array 
	for(var i = 0; i < arr.length; i++) {
		// sort the word alphabetically
		var word = arr[i].split("").sort().join("")
		// if the word is in the hash, add one to its value otherwise
		// add it to the hash
		if(retobj[word] != undefined) {
			retobj[word] = retobj[word] + 1
		} else {
			retobj[word] = 0
		}
	}
	var a = new Date();
	var after = a.getTime();
	retobj.time = (+a)-(+b)
	return retobj
}

console.log(anagrams_map(arr))
console.log(anagrams(arr))



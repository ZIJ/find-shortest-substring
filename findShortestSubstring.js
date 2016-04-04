'use strict';

// Given two strings, find the shortest substring of the first string that contains all letters of the second one. Count matters.

findShortestSubstring("THELONGTEXT", "ETT"); // prints TEXT

// other mathching (but not shortest) substrings: "THELONGT", "ELONGTEXT"
// "THELONGTEXT" motivates to look for an effecient solution
// "ETT" hints that letters can be repeated and count matters
// "ETT" and "TEXT" hint that order of letters does not matter

function findShortestSubstring(text, letters) {
	let neededCount = letters.length;
	let currentCount = 0;

	let neededLetters = new Map();
	let currentLetters = new Map();

	for (let letter of letters.split('')) {
		if (neededLetters.has(letter)) {
			neededLetters.set(letter, neededLetters.get(letter) + 1);
		} else {
			neededLetters.set(letter, 1);
		}
	}

	for (let keyValuePair of neededLetters) {
		let letter = keyValuePair[0];
		currentLetters.set(letter, 0);
	}

	let minWindowStart = -1;
	let minWindowEnd = -1;
	let minWindowSize = Number.POSITIVE_INFINITY;
	let windowSize = 0;
	let start = 0;
	let end = 0;

	function includeLetter(letter) {
		if (neededLetters.has(letter)) {
			currentLetters.set(letter, currentLetters.get(letter) + 1);
			if (currentLetters.get(letter) <= neededLetters.get(letter)) {
				currentCount++;
			}	
		}	
	}

	function excludeLetter(letter) {
		if (neededLetters.has(letter)) {
			currentLetters.set(letter, currentLetters.get(letter) - 1);
			if (currentLetters.get(letter) < neededLetters.get(letter)) {
				currentCount--;
			}	
		}
	}

	for (let endLetter of text) {
		includeLetter(endLetter);
		if (currentCount === neededCount) {
			let startLetter = text[start];
			while (!neededLetters.has(startLetter) || currentLetters.get(startLetter) > neededLetters.get(startLetter)) {
				excludeLetter(startLetter);
				start++;
				startLetter = text[start];
			}
		}		
		windowSize = end - start + 1;
		if (windowSize < minWindowSize && currentCount >= neededCount) {
			minWindowStart = start;
			minWindowEnd = end;
			minWindowSize = windowSize;
		}
		end++;
	}

	let minWindow = text.slice(minWindowStart, minWindowEnd + 1);
	console.log(minWindow);
}

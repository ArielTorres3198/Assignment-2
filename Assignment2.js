/*
Author: Ariel Torres
Course: CSCI-39547
Instructor: Professor Melissa Lynch
Assignment: Assignment #2
This is to improve my understanding of JavaScript syntax, functions, and higher-order functions, 
and to better understand JavaScript and Array methods.
*/

//forEach
//will take in an array of elements and executes any callback function on each of those elements like forEach.
function myEach(array, callbackFunc) {
	for (let i = 0; i < array.length; i++) {
		callbackFunc(array[i]);
	}
	return;
}

//Map
//will take in an array of elements and executes a callback function on each of those elements like Map.
function myMap(array, callbackFunc) {
	let newArray = [];
	for (let i = 0; i < array.length; i++) {
		newArray.push(callbackFunc(array[i]));
	}
	return newArray;
}

//Filter
//will take in an array of elements and executes a callback function on each of those elements like Filter.
function myFilter(array, callbackFunc) {
	let newArray = [];
	for (let i = 0; i < array.length; i++) {
		if (callbackFunc(array[i])) {
			newArray.push(array[i]);
		}
	}
	return newArray;
}

//Some (Any)
//will take in an array of elements and executes a callback function on each of those elements like Some (Any).
function mySome(array, callbackFunc) {
	for (let i = 0; i < array.length; i++) {
		if (callbackFunc(array[i])) {
			return true;
		}
	}
	return false;
}

//Every
//will take in an array of elements and executes a callback function on each of those elements like Every.
function myEvery(array, callbackFunc) {
	for (let i = 0; i < array.length; i++) {
		if (!callbackFunc(array[i])) {
			return false;
		}
	}
	return true;
}

// Reduce
//will take in an array of elements and executes a callback function on each of those elements like Reduce.
function myReduce(array, callbackFunc, curr) {
	let cur = 0;
	if(curr > 0 || curr < 0) {
		cur = curr;
	}
	for (let i = 0; i < array.length; i++) {
		cur = callbackFunc(array[i], cur);
	}
	return cur;
}

//Includes
//will take in an array of elements and indicates whether or not a target element is contained within the input array. This returns a boolean.
function myIncludes(array, target) {
	for (let i = 0; i < array.length; i++) {	
		if(array[i] == target) {
			return true;
		}
	}
	return false;
}

//indexOf
//will take in an array of elements and returns the index of the first encounter of a target element (if it is found) or -1 if that element does not exist within the input array.
function myIndexOf(array, target) {
	for (let i = 0; i < array.length; i++) {	
		if(array[i] == target) {
			return i;
		}
	}
	return -1;
}


//Push
//will take in an array of elements as well as an elementToAdd and append that element to the end of the array.
function myPush(array, elementToAdd) {
	array[array.length] = elementToAdd;
}

//lastIndexOf
//will take in an array of elements and returns the index of the last encounter of a target element (if it is found) or -1 if that element does not exist within the input array.
function myUnshift(array, element) {
	for (let i = array.length; i > 0; i--) {	
		if(array[i] == element) {
			return i;
		}
	}
	return -1;
}

//Object.keys()
//will take in an object and return all of the keys of the key:value pairs of that object.
function grabKeys(object){
	let input = [];
	for (let [key, value] of Object.entries(object)) {
		input.push(key);
	}
	return input;
}

//Object.values()
//will take in an object and return all of the values of the key:value pairs of that object.
function grabValues(object){
	let input = [];
	for (let [key, value] of Object.entries(object)) {
		input.push(value);
	}
	return input;
}

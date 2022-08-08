/* 

HARD:
You are given two positive integers left and right with left <= right. Calculate the product of all integers in the inclusive range [left, right].

Since the product may be very large, you will abbreviate it following these steps:

1. Count all trailing zeros in the product and remove them. Let us denote this count as C.

    For example, there are 3 trailing zeros in 1000, and there are 0 trailing zeros in 546.

2. Denote the remaining number of digits in the product as d. If d > 10, then express the product as <pre>...<suf> where <pre> denotes the first 5 digits of the product, and <suf> denotes the last 5 digits of the product after removing all trailing zeros. If d <= 10, we keep it unchanged.
    For example, we express 1234567654321 as 12345...54321, but 1234567 is represented as 1234567.

3. Finally, represent the product as a string "<pre>...<suf>eC".
    For example, 12345678987600000 will be represented as "12345...89876e5".

Return a string denoting the abbreviated product of all integers in the inclusive range [left, right].

*/

const abbreviatedProduct = (left, right) => {
	// initialize product as 1 (we do not want to multiply by 0)
	// initialize a variable to store amount of zeros in final product
	// initialize a variable to store the prefix of the product (without zeroes)

	let product = 1,
		zeroCount = 0,
		tempStr = ""; // temp string for prefix

	// create a loop to start from the right variable and ending at left variable
	// for each iteration in the loop, multiply the product by i
	for (let i = right; i >= left; i--) product = product * i;

	// convert product integer to string for looping purposes
	// we will loop over the string to denote if each character is a zero or not
	let productString = String(product);
	for (let i = 0; i < productString.length; i++) {
		// if the character is not a zero, add it to the tempStr variable,
		// otherwise increase the zero counter to give us a proper suffix
		if (productString[i] !== "0") tempStr += productString[i];
		else zeroCount++;
	}

	// return the prefix (without zeroes), joined by 'e' and the zeroCount to denote zeroes
	return `${tempStr}e${zeroCount}`;
};

// ACCEPTED; runtime 99ms;

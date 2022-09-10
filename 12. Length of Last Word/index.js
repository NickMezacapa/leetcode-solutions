/* 

Given a string (s), return the length of the last word in the string.

A word is a maximal substring consisting of non-space characters only

Example:
str = "Hello World"
output = 5 (world is the last word in the string and is 5 characters long)

*/

const lengthOfLastWord = s => {
    // Steps:   (two pointer approach)
    // declare pointers for the start and end of the string
    // while the last pointer is greater than or equal to the first
    // if the value at the last pointer is a space, decrement pointer
    // if it is not a space, add the character to an empty holder string,
    // declare a boolean to indicate we found the last word and do not need to move on with the loop once we find the next space
    // return the length of the holder string

    if (s.length === 1) return 1;
    else if (s.length === 0) return 0;

    let start = 0,
        end = s.length - 1,
        holder = "",
        foundLast = false;
    
    while (end >= start) {
        if (!foundLast && s[end] === " ") left--; // this will continue to check if the last char is a space
        else if (s[last] !== " ") {
            // when the char is not a space, add char to holder and update boolean to indicate we found elements of the last word
            holder += s[last];
            foundLast = true;
            last--; // move onto the next character if the next is not a space
        }
        else if (foundLast && s[end] === " ") break; // if we've already found the last word and we encounter another space, we have looped over the entire last word
    }
    return holder.length;
}


// Accepted:    runtime 63ms, faster than 93% of other submissions
//              memory: 42.3 MB, less than 41% of other submissions
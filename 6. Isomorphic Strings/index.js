/* 

Given two strings s and t, determine if they are isomorphic.

Two strings s and t are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

*/


// we are trying to find the unique count of each character. It is isomorphic if characters in the string have the same count as characters in the other string.
// The characters do not have to be the same, only the count. 

// we need to find exactly how many unique characters are in each string.
// if there are an equal amount of unique characters, we need to then check that the value of a character contained in string 1 is also present in string 2. 
// all values must be the same.

const isIsomorphic = (s, t) => {
    let obj1 = {},
        obj2 = {};
    for (let i = 0; i < s.length; i++) {
        if (obj1[s[i]] !== obj2[t[i]]) return false;
        else {
            obj1[s[i]] = i,
            obj2[t[i]] = i
        }
    }
    return true;
}


/* 
Result: Accepted

Runtime: 62 ms, faster than 99.70% of JavaScript online submissions for Isomorphic Strings.
Memory Usage: 42.3 MB, less than 89.53% of JavaScript online submissions for Isomorphic Strings.

*/
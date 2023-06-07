let myName = "Vidhuprasad,cp";

console.log(myName.length); // finding the length of string

console.log(myName.toLowerCase()); // convert a string to lowercase

console.log(myName.toUpperCase()); // convert a string to uppercase

console.log(myName.includes("s")); // to check the substing in a string

console.log(myName.startsWith("V")); // checks whether a string starts with a specified substring

console.log(myName.endsWith("d")); // checks whether a string ends with a specified substring

console.log(myName.search("a")); // it searches for a specified substring within a string and returns the index of the first occurrence of the substring

console.log(myName.match(/Vidhu/g)); // searches a string for a specified pattern and returns an array of the matched substrings

console.log(myName.indexOf("d")); // Returns the position of the first occurrence of a substring

console.log(myName.lastIndexOf("d")); // returns the position of the last occurence of a substring

console.log(myName.replace("cp","CP")); // used to replace occurrences of a specified substring or pattern within a string with a new substring

let x = "  a,b,c  ";
console.log(x.trim()); // used to remove the white space of a string

console.log(myName.charAt(7)); // Returns the character at the specified position

console.log(myName.charCodeAt(7)); // Returns the Unicode value of the character at the specified location

let a=97,b=98,c=99,d=100;
x =String.fromCharCode(a,b,c,d); // converts Unicode values to their corresponding characters and returns a new string
console.log(x);

console.log(x.concat(",",myName)); // used to combine 2 or more strings

console.log(myName.split(",")); // used to split a string into an array of substrings based on a specified separator

console.log(myName.repeat(3)); // used to create a new string by repeating the original string a specified number of times

console.log(myName.slice(0,5)); // used to extract a portion of a string and return it as a new string

console.log(myName.substr(5,6)); // used to extract a portion of a string starting from a specified index position and returning it as a new string. It takes two parameters: the starting index position and the length of the substring to be extracted

console.log(myName.substring(5,11)); // used to extract a portion of a string and return it as a new string. It takes two parameters: the starting index position and the optional ending index position

x=[44,55,66];
console.log(x.toString()); // used to convert a value to its string representation

x=new String("a,b,c");
console.log(x.valueOf());
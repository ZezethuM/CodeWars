function reverseWords(str) {

    var newString = str.split('').reverse().join('').split(' ').reverse().join(" ");
    
    return newString;
}
console.log(reverseWords('the time is now'))

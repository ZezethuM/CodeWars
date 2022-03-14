function swap (string) {
  var newString = '';
  
  for(var i = 0; i < string.length; i++){
    if(string[i] == 'a' || string[i] == 'e'|| string[i] == 'i' || string[i] == 'o' || string[i] == 'u'){
      var upperCase = string[i].toUpperCase();
      newString += upperCase;
    }
    else {
        newString += string[i];
    }
  }
  return newString;
}
console.log(swap('Hello World'));
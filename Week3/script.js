var length, uppers, lowers, numbers, special
function onclick(){
   length = prompt("How long do you want your password to be?");
  if (isNaN(length) || length < 8 || length > 128) 
  {

  alert('Must be between 8-128 characters!')
  
  length = prompt("How long do you want your password to be?")};
  uppers = confirm("Would you like to use uppercase letters?");
  lowers = confirm("Would you like to use lowercase letters?");
  numbers = confirm("Would you like to use numbers?");
  special = confirm("Would you like to use special characters?");

if (!uppers && !lowers && !numbers && !special) {
  alert("You must select at least one character type!");
  
  uppers = confirm("Would you like to use uppercase letters?");
  lowers = confirm("Would you like to use lowercase letters?");
  numbers = confirm("Would you like to use numbers?");
  special = confirm("Would you like to use special characters?");
}
  generateNewPassword();
}

var button = document.getElementById("generate")

button.addEventListener('click', onclick);

var number = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0',];
var lc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var uc = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var symbols = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')']

function generateNewPassword() {
 var password = "";

 var allowed = [];
 if (uppers){
   allowed = allowed.concat(uc);
 }
 if (lowers){
  allowed = allowed.concat(lc);
 }
 if (numbers){
  allowed = allowed.concat(number);
 }
 if (special){
  allowed = allowed.concat(symbols);
 }
 console.log(allowed)
 console.log(uppers)
 for (var i = 0; i < length; i ++){
   var num = getRandomNum(0, allowed.length);
   console.log(num)
   password += allowed[num];
 }
 var passwordtext = document.getElementById("password");
 passwordtext.value = password
}

function getRandomNum(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


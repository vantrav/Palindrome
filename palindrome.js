/**
* @Author: Vipul Anand <vantrav>
* @Date:   2016-02-24T16:45:27+05:30
* @Last modified time: 2016-02-24T16:56:54+05:30
* @FCC Free Code Camp
* @basic algorithms challenge
*/

//Palindrome

function va(str) {
  str = str.toLowerCase().replace(/[\W_]/g, '');
  var strN = str.split('').reverse().join('');
  if (str === strN) {
    console.log("yes Palindrome");
  }else{
    console.log("Not a Palindrome");
  }
}

va("do geese see god");//Pepin

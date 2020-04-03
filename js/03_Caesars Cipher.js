/*
3-JavaScript Algorithms and Data Structures Projects: Caesars Cipher

One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code

*******************************************************************************************************

rot13("SERR PBQR PNZC") should decode to FREE CODE CAMP
rot13("SERR CVMMN!") should decode to FREE PIZZA!
rot13("SERR YBIR?") should decode to FREE LOVE?
rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.") should decode to THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.


1-ROT13 cipher
2-letters are shifted by 13 places  -> 'A' ↔ 'N'
3-shift only letters character
-ABCDEFGHIJKLMNOPQRSTUVWXYZ
A-N
B-O
C-P
D-Q
E-R
F-S
G-T
H-U
I-V
J-W
K-X------------
L-Y QRSTUVWXYZ
M-Z
N-A
O-B
P-C
Q-D
R-E
S-F
T-G
U-H
V-I
W-J
X-K
Y-L
Z-M

-abcdefghijklmnopqrstuvwxyz
-ABCDEFGHIJKLMNOPQRSTUVWXYZ
*/




function rot13(str) { // LBH QVQ VG!
  var letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var result  = '';
  
  //construct result string by looping in string and shift each letter 13 with shift13 function
  for(var i =0 ; i < str.length; i++){
	  if(letters.includes(str[i])){
		  //console.log(str[i]);
		  result += shift13(str[i]);
	  }else{
		  result += str[i];
	  }
  }
  
  
  //shift letter position 13  and get that letter
  function shift13(letter){
	  //letter numbers 26
	  var pos = '';
	  pos = letters.indexOf(letter);
	  var testPos = 26-pos;
	  if(testPos <= 13){
		  testPos = (13 - testPos) ;
	  }else{
		  testPos = pos + 13;
	  }
	//console.log(letters[testPos]);
	return letters[testPos];
  }
  
  //console.log(result);
  return result;
}

// Change the inputs below to test
console.log(rot13("SERR CVMMN!"));
rot13("SERR CVMMN!");// should decode to FREE PIZZA!
//rot13("SERR YBIR?") should decode to FREE LOVE?
//rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.")/* should decode to THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.

'use strict';

if('0'){
  console.log("The string '0' evaluates to true");
}

if(0){
  console.log("The number 0 evaluates to false so this line will not be printed");
}

if(NaN){
  console.log("Nan evaluates to false so this line will not be printed");
}

if([]){
  console.log("Empty array evaluates to true");
}

if({}){
  console.log("Empty object evaluates to true");
}

if(''){
  console.log("Empty string evaluates to false so this line will not be printed");
}

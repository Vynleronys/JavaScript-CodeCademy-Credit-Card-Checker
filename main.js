// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]
//const testArr12 = [1,3,4,4,3,4]
// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]

// Add your functions below:
//Start by declaring your function that will validate the credit cards:
const validateCred = (arr) => {
//This is where we will store our values to perfom the check:
let count = 0;

//We start by declaring the loop that will iterare (from right to left) through the array in order to perform the validation:
//In the for loop (arr.length - 1) declaration is to remove the last digit of the array to use it at our check digit.
for (let i = arr.length - 1; i >= 0; i--) {
  let currentDigit = parseInt(arr[i]);
//console.log(currentDigit)
//Here the function perfoms a check to check if the length is - 1 digit, if is true it starts will multiply by 2 the odd indexes:
if ((arr.length - 1 - i) % 2 === 1) {
  console.log(currentDigit);  
  currentDigit *= 2;
//console.log(currentDigit)
/*After we multiply the odd indexes by 2 we perfom the check to see if the result of the product is greater that 9  if is true 
we substract 9 from it*/
    if (currentDigit > 9) {
      currentDigit -= 9;
      //console.log(currentDigit)
    }
}
//Now add the results from the iteration to the variable we declared at the start of our function:
    count += currentDigit;
    //console.log(count);
}
//Here we check the modulus operation to check if count is divisible by 10 if its true the card is valid otherwise is invalid:
 return count % 10 === 0
};

console.log(validateCred(valid1));
/*
console.log(validateCred(valid2));
console.log(validateCred(valid3));
console.log(validateCred(valid4));
console.log(validateCred(valid5));
console.log(validateCred(invalid1));
console.log(validateCred(invalid2));
console.log(validateCred(invalid3));
console.log(validateCred(invalid4));
console.log(validateCred(invalid5));
*/
/*Now we have to find all the invalid cards, they already grouped all the credit card numbers in the batch array,
so we will use that array to filter all the invalid cards*/
//We start by declaring our function to filter all the invalid cards:

const findInvalidCards = (array) => {
//In this variable we will store all the invalid card numbers:
  let findInvalid = [];

//We need to declare a for loop that will iterate through the batch array in order to filter all the invalid cards:
for (let j = 0; j < array.length; j++) {
 //Declare a variable to store the current index of the iteration: 
  let currentCard = parseInt(array[j]);

//Do a conditional statement to check which cards aren't valid, we use our validateCred function that we created before to to this:
  if (!validateCred(currentCard)) {
//Push the results of the conditional statement in the variable declared at the begining of the function in order to store the false values:
    findInvalid.push(currentCard);
  }
}
return findInvalid;
};
console.log(findInvalidCards(batch));

//Now we need to sort all the invalid cards by the possible companies they belong to. In order to do that we create a function to do that.
//We start by declaring our function:

const idInvalidCardCompanies = (ccArray) => {
let tempCCCompanies = [];
let creditCardCompanies = [];

//Loop through the array to check for the first number to assign it to the credit company:

for (let i = 0; i < ccArray.length; i++){
  if (ccArray[i][0] === 3){
    tempCCCompanies = 'American Express';
  } else if(ccArray[i][0] === 4){
    tempCCCompanies = 'Visa';
  } else if(ccArray[i][0] === 5){
    tempCCCompanies = 'Master Card';
  } else if(ccArray[i][0] === 6){
    tempCCCompanies = 'Discovery'
  } else {
    tempCCCompanies = 'Company not found!';
  }
//console.log(tempCCCompanies);

//Check if we already have the company assigned in order to avoid duplicates:
  if(creditCardCompanies.indexOf(tempCCCompanies) === -1){
    creditCardCompanies.push(tempCCCompanies);
  }
}
return creditCardCompanies;
};
console.log(idInvalidCardCompanies(batch));

/*String of numbers to valid card test:
const visaString = '4716806323668662';
console.log(validateCred(visaString));*/

//Converting invalid numbers to valid:
const invalidToValid = (invArr) => {
  //console.log(invArr)    
    
  //console.log(invArr);  
      const arrCheckDigit = invArr[invArr.length - 1];
      let invCheckDigitCount = 0;
      let invCheckDigit = [];
      let invCount = 0
      
   //loop to change checkDigit:   
  for (let i = invArr.length - 1; i >= 0; i--) {
      let checkDigitCount = parseInt(invArr[i]);
  
      if((invArr.length - 1) % 2 === 1) {
          checkDigitCount *= 2;
      }
      if (checkDigitCount > 9) {
          checkDigitCount -= 9;
      }
      invCheckDigitCount += checkDigitCount;
  }
      invCheckDigit = (invCheckDigitCount * 9) % 10;
      //console.log(invCheckDigit);
     
  
  
      for (let j = invArr.length - 1; j >= 0; j--){
          let invCurrentDigit = parseInt(invArr[j]);
  
          if((invArr.length - 1) % 2 === 1){
              invCurrentDigit *= 2;
          }
          if(invCurrentDigit > 9){
              invCurrentDigit -= 9;
          }
          invCount += invCurrentDigit;
          console.log(invCount)
      }
     return (invCheckDigit + invCount) % 10 === 0;
      
  }
  console.log(invalidToValid(invalid1));
  
console.log(invalidToValid(invalid1));
//const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]

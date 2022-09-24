/* eslint-disable no-unused-vars */
const { SPANISH_DICTIONARY, SHOE_LIST } = require('./constants.js');

const newSneakers = (sneakers) => {
  return("New sneakers " + sneakers + " dropping soon!");
};

const isThatMichaelJordan = (String) => {
  let name = String.toLowerCase();
  if(name == "michael jordan"){
    return true;
  }
  else {
    return false;
  }
};

const areYouM = (name) => {
    if (name[0] == "M"){
      return true
    }
    else {
      return false
    }
};

const mostViewsThreeSneakers = (sneakerOneViews, sneakerTwoViews, sneakerThreeViews) => {
  return(Math.max(sneakerOneViews, sneakerTwoViews, sneakerThreeViews));
};

const mostViews = (arr) => {
  let max = 0;
  for (let i = 0; i < arr.length; i++)
    {
    //  max = arr[i];
    if (arr[i] > max) {
        max = arr[i];
    }
}
return max;
};

const validateEmail = (email) => {
  // insert code
};

const validateEmailWithError = (email) => {
  // insert code
};

const getInitials = (fullName) => {
  let nameArr = fullName.split(" ");
  let firstName = nameArr[0];
  let firstI = firstName[0];
  let lastName = nameArr[1];
  let lastI = lastName[0];
  return(firstI + lastI);
};

const howRepetitiveAreYou = (str, word) => {
  // insert code
};

const spanishToEnglish = (spanish) => {
  const dictionary = SPANISH_DICTIONARY;
  // insert code
};

const getNames = (shoeList = SHOE_LIST) => {
  // insert code
};

const getUniqueSneakers = (shoeList = SHOE_LIST) => {
  // insert code
};

const getMostViewedSneakers = (shoeList = SHOE_LIST) => {
  // insert code
};

module.exports = {
  newSneakers,
  isThatMichaelJordan,
  areYouM,
  mostViewsThreeSneakers,
  mostViews,
  validateEmail,
  validateEmailWithError,
  getInitials,
  howRepetitiveAreYou,
  spanishToEnglish,
  getNames,
  getUniqueSneakers,
  getMostViewedSneakers,
};

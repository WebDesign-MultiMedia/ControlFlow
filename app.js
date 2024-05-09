const radius = 5;
const PI = 3.1415;
const area = PI * radius * radius;
const squareMeters= 0.8;
const weekOne = 20;
const weekTwo = 40;
const weekThree = 80;

  //Plant Area
const weekOneArea = squareMeters * weekOne;
console.log(weekOneArea);

const weekTwoArea = squareMeters * weekTwo;
console.log(weekTwoArea);

const weekThreeArea = squareMeters * weekThree;
console.log(weekThreeArea)


// Percentage of total space

const weekOnePercentage = (weekOneArea / area) * 100;
console.log(weekOnePercentage);

const weekTwoPercentage = (weekTwoArea / area) * 100;
console.log(weekTwoPercentage);

const weekThreePercentage = (weekThreeArea / area) * 100;
console.log(weekThreePercentage);
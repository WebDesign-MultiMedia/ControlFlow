// area = 78.537500 Space available
const PI = 3.1415;
const radius = 5;
const area = PI * radius * radius;

// Each plant requires a minimum space 
const minimunSpace= 0.8;

//Starting plants
const plants = 20;

// every week plants double
const weekOne = 20;
const weekTwo = 40;
const weekThree = 80;

// PART ONE

function predictPlantGroth(weeks){
  let plantAmount = plants * (weeks * 2);

   if (plantAmount > 0.8 * area){
    return "Prune the plants.";
   } 
   else if (plantAmount > 0.5 * area) 
   {
    return "Monitor the growth.";
   }
   else {
    return "Plant more plants."
   }
}

// Percentage
 const weekOnePercentage = (weekOne / area) * 100;
 const weekTwoPercentage = (weekTwo / area) * 100;
 const weekThreePercentage = (weekThree / area) * 100;


console.log("week 1:", predictPlantGroth(1), weekOnePercentage);
console.log("week 2:", predictPlantGroth(2), weekTwoPercentage);
console.log("week 3:", predictPlantGroth(3), weekThreePercentage);

// Percentage of total space















//Plants double every week
//const weekOne = 20;
//const weekTwo = 40;
//const weekThree = 80;
 


  //Plant Area
//const weekOneArea = minimunSpace * weekOne;
//console.log(weekOneArea);

//const weekTwoArea = minimunSpace * weekTwo;
//console.log(weekTwoArea);

//const weekThreeArea = minimunSpace * weekThree;
//console.log(weekThreeArea)




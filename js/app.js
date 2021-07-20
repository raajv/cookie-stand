`use strict`
// make each store have

// location name
//
//The minimum number of customers per hour.
//The maximum number of customers per hour.
//The average number of cookies purchased per customer.
// calculate daily sales
// //Stores the min/max hourly customers, and the average cookies per customer, in object properties
// Uses a method of that object to generate a random number of customers per hour. Objects/Math/random
// Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated
// Store the results for each location in a separate array… perhaps as a property of the object representing that location
// Display the values of each array as unordered lists in the browser


const seattle = {
  name:'seattle',
  minCust:23,
  maxCust:65,
  avgSale:6.3,
  custPerHour:0,
  numCust : function(){
    this.custPerHour = randomCust (23,65) + ' per hour'
    console.log(this.custPerHour)
  }
}
const tokyo = {
  name:'tokyo',
  minCust:3,
  maxCust:24,
  avgSale:1.2,
  custPerHour:0,
  numCust : function(){
    this.custPerHour = randomCust (3,24) + ' per hour'
    console.log(this.custPerHour)
  }
}
const dubai = {
  name:'dubai',
  minCust:11,
  maxCust:38,
  avgSale:3.7,
  custPerHour:0,
  numCust : function(){
    this.custPerHour = randomCust (11,38) + ' per hour'
    console.log(this.custPerHour)
  }
}
const paris = {
  name:'paris',
  minCust:20,
  maxCust:38,
  avgSale:2.3,
  custPerHour:0,
  numCust : function(){
    this.custPerHour = randomCust (20,38) + ' per hour'
    console.log(this.custPerHour)
  }
}
const lima = {
  name:'lima',
  minCust:2,
  maxCust:16,
  avgSale:4.6,
  custPerHour:0,
  numCust : function(){
    this.custPerHour = randomCust (2,16) + ' per hour'
    console.log(this.custPerHour)
  }
}

// function for random cust
function randomCust(a,b){
  let custPerHour = Math.floor(Math.random()*(b - a + 1) + a);
  return custPerHour;
}
console.log(seattle);
seattle.numCust();
tokyo.numCust();
dubai.numCust();
paris.numCust();
lima.numCust();

const storesArray =[seattle,tokyo,dubai,paris,lima];

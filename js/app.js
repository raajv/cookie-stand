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
  custPerHour:[],
  salePerHr:[],
  numCust : function(){
    for(let i=0;i<14;i++){
      this.custPerHour[i] = randomCust (23,65) ;
      console.log(this.custPerHour)
    }
  },
  totalSale : function(){
    for(let j=0;j<14;j++){
      this.salePerHr[j]= randomSale(this.custPerHour[j],this.avgSale);
    }
    console.log(this.salePerHr);
  }
};






const tokyo = {
  name:'tokyo',
  minCust:3,
  maxCust:24,
  avgSale:1.2,
  custPerHour:[],
  salePerHr:[],
  numCust : function(){
    for(let i=0;i<14;i++){
      this.custPerHour[i] = randomCust (3,24) ;
      console.log(this.custPerHour)
    }
  },
  totalSale : function(){
    for(let j=0;j<14;j++){
      this.salePerHr[j]= randomSale(this.custPerHour[j],this.avgSale);
    }
    console.log(this.salePerHr);
  }
};
const dubai = {
  name:'dubai',
  minCust:11,
  maxCust:38,
  avgSale:3.7,
  custPerHour:[],
  salePerHr:[],
  numCust : function(){
    for(let i=0;i<14;i++){
      this.custPerHour[i] = randomCust (11,38) ;
      console.log(this.custPerHour);
    }
  },
  totalSale : function(){
    for(let j=0;j<14;j++){
      this.salePerHr[j]= randomSale(this.custPerHour[j],this.avgSale);
    }
    console.log(this.salePerHr);
  }
};
const paris = {
  name:'paris',
  minCust:20,
  maxCust:38,
  avgSale:2.3,
  custPerHour:[],
  salePerHr:[],
  numCust : function(){
    for(let i=0;i<14;i++){
      this.custPerHour[i] = randomCust (20,38) ;
      console.log(this.custPerHour);
    }
  },
  totalSale : function(){
    for(let j=0;j<14;j++){
      this.salePerHr[j]= randomSale(this.custPerHour[j],this.avgSale);
    }
    console.log(this.salePerHr);
  }
};
const lima = {
  name:'lima',
  minCust:2,
  maxCust:16,
  avgSale:4.6,
  custPerHour:[],
  salePerHr:[],
  numCust : function(){
    for(let i=0;i<14;i++){
      this.custPerHour[i] = randomCust (2,16) ;
      console.log(this.custPerHour);}
  },
  totalSale : function(){
    for(let j=0;j<14;j++){
      this.salePerHr[j]= randomSale(this.custPerHour[j],this.avgSale);
    }
    console.log(this.salePerHr);
  }
};

// function for random cust
function randomCust(a,b){
  let custPerHour = Math.floor(Math.random()*(b - a + 1) + a);
  return custPerHour;
}
function randomSale(c,d){
  let salePerHr=Math.floor((c*d));
  return salePerHr;
}

console.log(seattle);

seattle.numCust();
tokyo.numCust();
dubai.numCust();
paris.numCust();
lima.numCust();

seattle.totalSale();
tokyo.totalSale();
dubai.totalSale();
paris.totalSale();
lima.totalSale();

const storesArray =[seattle,tokyo,dubai,paris,lima];
const timeArray=['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
const storesDivEl = document.getElementById('stores');
function renderStore(store){
  let sectionEl = document.createElement('section');
  // parentElem.appendChild(childElem)
  storesDivEl.appendChild(sectionEl);
  let h2El = document.createElement('h2');
  h2El.textContent = store.name;
  sectionEl.appendChild(h2El);
  let ulEl = document.createElement('ul');
  sectionEl.appendChild(ulEl);
  for (let i = 0; i < store.salePerHr.length; i++) {
    let liEl = document.createElement('li');
    liEl.textContent = `${timeArray[i]}:${store.salePerHr[i]} perhour`;
    ulEl.appendChild(liEl)}
}

for(k=0;k<storesArray.length;k++){
  renderStore(storesArray[k]);
}
//<h2>name of store</h2>
//<section id='stores">
//<ul>
//  <li>of total sales per hr</li>
//</ul>
//<section
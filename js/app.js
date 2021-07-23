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

// store constructor :
function Store(name,minCust,maxCust,avgSale,custPerHour,salePerHr,totalCookiesSold){
  this.name=name;
  this.minCust=minCust;
  this.maxCust=maxCust;
  this.avgSale=avgSale;
  this.custPerHour=[];
  this.salePerHr=[];
  this.totalCookiesSold=0;
  Store.allStores.push(this);
}

let allStores=[] = Store.allStores=[];
console.log(Store.allStores);

const seattle = new Store('Seattle',23,65,6.3);
const tokyo = new Store('Tokyo',3,24,1.2);
const dubai = new Store('Dubai',11,38,3.7);
const paris = new Store('Paris',20,38,2.3);
const lima = new Store('Lima',2,16,4.6,);

//form for new store
function handleSubmit(e){
  e.preventDefault();
let name = e.target.storeName.value
let minCust=e.target.minCustomer.value
let maxCust=e.target.maxCustomer.value
let avgSale=e.target.avgSale.value

let newStore= new Store(name,minCust,maxCust,avgSale)
let currentStore=newStore;
    currentStore.randomCustPerHour();
    currentStore.cookieSalePerHr();
    currentStore.totalSold();

renderAllStores();
renderFooter();

}

const formEl=document.getElementById('addStoreForm');

formEl.addEventListener('submit',handleSubmit);


//prototypes for 3 functions


Store.prototype.randomCustPerHour = function(){
  for(let i=0;i<14;i++){
    let perHourCust=Math.floor((Math.random()*(this.maxCust - this.minCust + 1) + this.minCust));
    this.custPerHour.push(perHourCust);
  }
};

Store.prototype.cookieSalePerHr = function(){
  for (let j=0;j<14;j++){
    let perhourCookie=Math.floor(this.custPerHour[j]*this.avgSale);
    this.salePerHr.push(perhourCookie);
  }
};
Store.prototype.totalSold= function(){
  for(let k=0;k<14;k++){
    // let totalCookiesSold=0;
    // debugger;
    this.totalCookiesSold= this.totalCookiesSold + this.salePerHr[k];
  }
};
function makeElement(tagName, parent, textContent) {
  let element = document.createElement(tagName);
  if (textContent) {
    element.textContent = textContent;
  }
  parent.appendChild(element);
  return element;
}




//redering table for sales
const timeArray=['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
const tableEl=document.getElementById('stores');
let rowEl1=document.createElement('tr');
tableEl.appendChild(rowEl1);
let tableHead2=document.createElement('th');
tableHead2.textContent='     .';
rowEl1.appendChild(tableHead2);
for(let j=0;j<14;j++){
  const tTime=document.createElement('th');
  const timeTable=timeArray[j];
  tTime.textContent=timeTable;
  rowEl1.appendChild(tTime);
}
//function to render body
Store.prototype.renderStore=function(){
  let rowEl=document.createElement('tr');
  tableEl.appendChild(rowEl);
  let tHeadEl=document.createElement('th');
  tHeadEl.textContent=this.name;
  rowEl.appendChild(tHeadEl);
  for(let i=0;i<14;i++){
    const tdEl= document.createElement('td');
    const totalCookieSale=this.salePerHr[i];
    tdEl.textContent=totalCookieSale;
    rowEl.appendChild(tdEl);
  }
  const grandTotalEl=document.createElement('th');
  grandTotalEl.textContent=this.totalCookiesSold;
  rowEl.appendChild(grandTotalEl);
};
let tableHead3=document.createElement('th');
tableHead3.textContent='TOTAL';
rowEl1.appendChild(tableHead3);
// function to render total footer DOM


function renderFooter() {
  let tFootEl=makeElement('tr',tableEl,null);
  let tFootHeadEl = makeElement('th',tFootEl,'Total')
  let hourlyTotal=0;
  let grandHourlyTotal=0;
  for (let i=0;i<14;i++){
    for(let j=0;j<Store.allStores.length;j++){
      let totalPerHrSale = allStores[j].salePerHr[i];
      hourlyTotal=hourlyTotal + totalPerHrSale;
    }
      makeElement('td',tFootEl,hourlyTotal);
      
    grandHourlyTotal=grandHourlyTotal+hourlyTotal;
    hourlyTotal=0;
}
makeElement('th',tFootEl,grandHourlyTotal);
};


//functions called


function createAllStores(){
  for(let m=0;m<Store.allStores.length;m++){
    // debugger;
    let currentStore=allStores[m];
    currentStore.randomCustPerHour();
    currentStore.cookieSalePerHr();
    currentStore.totalSold();
  }
}
createAllStores();

function renderAllStores(){
  for(let m=0;m<Store.allStores.length;m++){
    let currentStore=allStores[m];
    currentStore.renderStore();
  }
}
renderAllStores();
renderFooter();
// const seattle = {
//   name:'seattle',
//   minCust:23,
//   maxCust:65,
//   avgSale:6.3,
//   custPerHour:[],
//   salePerHr:[],
//   totalCookiesSold:0,
//   numCust : function(){
//     for(let i=0;i<14;i++){
//       this.custPerHour[i] = randomCust (23,65) ;
//       console.log(this.custPerHour)
//     }
//   },
//   totalSale : function(){
//     for(let j=0;j<14;j++){
//       this.salePerHr[j]= randomSale(this.custPerHour[j],this.avgSale);
//     }
//     console.log(this.salePerHr);
//   },
//   cookiesSold : function(){
//     let totalCookiesSold = 0
//     for(let l=0;l<this.salePerHr.length;l++){
//       this.totalCookiesSold= totalCookies(this.totalCookiesSold,this.salePerHr[l]);
//       console.log(totalCookiesSold);
//     }
//     return totalCookiesSold;
//   }
// };






// const tokyo = {
//   name:'tokyo',
//   minCust:3,
//   maxCust:24,
//   avgSale:1.2,
//   custPerHour:[],
//   salePerHr:[],
//   totalCookiesSold:0 ,
//   numCust : function(){
//     for(let i=0;i<14;i++){
//       this.custPerHour[i] = randomCust (3,24) ;
//       console.log(this.custPerHour)
//     }
//   },
//   totalSale : function(){
//     for(let j=0;j<14;j++){
//       this.salePerHr[j]= randomSale(this.custPerHour[j],this.avgSale);
//     }
//     console.log(this.salePerHr);
//   },
//   cookiesSold : function(){
//     let totalCookiesSold = 0
//     for(let l=0;l<this.salePerHr.length;l++){
//       this.totalCookiesSold= totalCookies(this.totalCookiesSold,this.salePerHr[l]);
//       console.log(totalCookiesSold);
//     }
//     return totalCookiesSold;
//   }
// };
// const dubai = {
//   name:'dubai',
//   minCust:11,
//   maxCust:38,
//   avgSale:3.7,
//   custPerHour:[],
//   salePerHr:[],
//   totalCookiesSold:0,
//   numCust : function(){
//     for(let i=0;i<14;i++){
//       this.custPerHour[i] = randomCust (11,38) ;
//       console.log(this.custPerHour);
//     }
//   },
//   totalSale : function(){
//     for(let j=0;j<14;j++){
//       this.salePerHr[j]= randomSale(this.custPerHour[j],this.avgSale);
//     }
//     console.log(this.salePerHr);
//   },
//   cookiesSold : function(){
//     let totalCookiesSold = 0
//     for(let l=0;l<this.salePerHr.length;l++){
//       this.totalCookiesSold= totalCookies(this.totalCookiesSold,this.salePerHr[l]);
//       console.log(totalCookiesSold);
//     }
//     return totalCookiesSold;
//   }
// };
// const paris = {
//   name:'paris',
//   minCust:20,
//   maxCust:38,
//   avgSale:2.3,
//   custPerHour:[],
//   salePerHr:[],
//   totalCookiesSold:0,
//   numCust : function(){
//     for(let i=0;i<14;i++){
//       this.custPerHour[i] = randomCust (20,38) ;
//       console.log(this.custPerHour);
//     }
//   },
//   totalSale : function(){
//     for(let j=0;j<14;j++){
//       this.salePerHr[j]= randomSale(this.custPerHour[j],this.avgSale);
//     }
//     console.log(this.salePerHr);
//   },
//   cookiesSold : function(){
//     let totalCookiesSold = 0
//     for(let l=0;l<this.salePerHr.length;l++){
//       this.totalCookiesSold= totalCookies(this.totalCookiesSold,this.salePerHr[l]);
//       console.log(totalCookiesSold);
//     }
//     return totalCookiesSold;
//   }
// };
// const lima = {
//   name:'lima',
//   minCust:2,
//   maxCust:16,
//   avgSale:4.6,
//   custPerHour:[],
//   salePerHr:[],
//   totalCookiesSold:0,
//   numCust : function(){
//     for(let i=0;i<14;i++){
//       this.custPerHour[i] = randomCust (2,16) ;
//       console.log(this.custPerHour);}
//   },
//   totalSale : function(){
//     for(let j=0;j<14;j++){
//       this.salePerHr[j]= randomSale(this.custPerHour[j],this.avgSale);
//     }
//     console.log(this.salePerHr);
//   },
//   cookiesSold : function(){
//     let totalCookiesSold = 0
//     for(let l=0;l<this.salePerHr.length;l++){
//       this.totalCookiesSold= totalCookies(this.totalCookiesSold,this.salePerHr[l]);
//       console.log(totalCookiesSold);
//     }
//     return totalCookiesSold;
//   }
// };

// // function 
// function randomCust(a,b){
//   let custPerHour = Math.floor(Math.random()*(b - a + 1) + a);
//   return custPerHour;
// }
// function randomSale(c,d){
//   let salePerHr=Math.floor((c*d));
//   return salePerHr;
// }
// function totalCookies(e,f){
//   let totalCookiesSold = e+f;
//   return totalCookiesSold;
// }
// console.log(seattle);
// //calling functions
// seattle.numCust();
// tokyo.numCust();
// dubai.numCust();
// paris.numCust();
// lima.numCust();

// seattle.totalSale();
// tokyo.totalSale();
// dubai.totalSale();
// paris.totalSale();
// lima.totalSale();

// seattle.cookiesSold();
// tokyo.cookiesSold();
// dubai.cookiesSold();
// paris.cookiesSold();
// lima.cookiesSold();
//rendering stores
// const storesArray =[seattle,tokyo,dubai,paris,lima];
// const timeArray=['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
// const storesDivEl = document.getElementById('stores');
// function renderStore(store){
//   let sectionEl = document.createElement('section');
//   // parentElem.appendChild(childElem)
//   storesDivEl.appendChild(sectionEl);
//   let h2El = document.createElement('h2');
//   h2El.textContent = store.name;
//   sectionEl.appendChild(h2El);
//   let ulEl = document.createElement('ul');
//   sectionEl.appendChild(ulEl);
//   for (let i = 0; i < store.salePerHr.length; i++) {
//     let liEl = document.createElement('li');
//     liEl.textContent = `${timeArray[i]}:${store.salePerHr[i]} perhour`;
//     ulEl.appendChild(liEl)}
//     let liEl = document.createElement('li');
//     liEl.textContent = `total : ${store.totalCookiesSold}`;
//     ulEl.appendChild(liEl);

// }
  

// for(k=0;k<storesArray.length;k++){
//   renderStore(storesArray[k]);
// }
//<h2>name of store</h2>
//<section id='stores">
//<ul>
//  <li>of total sales per hr</li>
//</ul>
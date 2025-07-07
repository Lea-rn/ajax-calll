const button = document.querySelector("button");
const paragraphe = document.querySelector(".pr");
const title = document.querySelector(".title");
const cardContainer = document.querySelector(".card-container");

////// sychronous ::

// button.addEventListener("click" , function(){
//     alert("set text") ;
//     paragraphe.textContent = "hello there" ;
// })

///// asynchronous :::

// button.addEventListener("click" , function(){
//     setTimeout(function(){
// paragraphe.textContent = "hello there" ;
//     },5000)

//     setTimeout(function(){
//    title.textContent = "welcome"
//     },3000)
// })

///// ajax call:

// const request = new XMLHttpRequest ()  ;

////// local (user) ===>  request (talab mte3 data)  server === > api
/////         (data or error)          =====         response    <===

// request.open("GET" , "https://restcountries.com/v3.1/name/france")
// request.send()

// request.addEventListener("load" ,function(){
//     const data = JSON.parse( this.responseText )  ;
//     console.log(data[0])
// })

////////// get country ::: 
// const getCountry = function (country) {
//   const request = new XMLHttpRequest();
//   request.open("GET", `https://restcountries.com/v2/name/${country}`);
//   request.send();

//   request.addEventListener("load", function () {
//     const [data] = JSON.parse(this.responseText);  //// [{}]  ==> {}
//     console.log(data);

//     const html = `
//     <div class="country-card">
//          <img height="250" src="${data.flag}" alt="" />
//         <div class="card-info">
//           <h2>${data.name}</h2>
//           <h4>${data.region}</h4>
//           <p>🧑‍🤝‍🧑 ${data.population} M people</p>
//           <p>🗣️ ${data.languages[0].nativeName}</p>
//           <p>💰 ${data.currencies[0].name}</p>
//         </div>
//       </div>
//     `;

//     cardContainer.insertAdjacentHTML("afterbegin", html);
//   });
// };

// getCountry("Andorra");



////// get country and neighbor   ::: 

 const renderCountry = function (data , className = ""){
    const html = `
    <div class="country-card ${className}">
         <img height="250" src="${data.flag}" alt="" />
        <div class="card-info">
          <h2>${data.name}</h2>
          <h4>${data.region}</h4>
          <p>🧑‍🤝‍🧑 ${data.population} M people</p>
          <p>🗣️ ${data.languages[0].nativeName}</p>
          <p>💰 ${data.currencies[0].name}</p>
        </div>
      </div>
    `;

    cardContainer.insertAdjacentHTML("beforeend", html);
 }


// const getCountryAndNeighbor = function (country){
// const request = new XMLHttpRequest ()
// request.open("GET" , `https://restcountries.com/v2/name/${country}` )
// request.send() ; 

//  request.addEventListener("load", function () {
//     const [data] = JSON.parse(this.responseText);  
//     console.log(data);

//   renderCountry(data)

//       ///// get neighbor
//   const neighbor = data.borders?.[0] ;     //// CODE 
//   if (!neighbor) return ; 

//      const request2 = new XMLHttpRequest() ; 
//      request2.open("GET" , `https://restcountries.com/v2/alpha/${neighbor}`)
//      request2.send() 
//      request2.addEventListener("load", function (){
//       const data2 = JSON.parse(this.responseText)
   

//  renderCountry(data2 , "neighbor")
//      })

//   });


// }

// getCountryAndNeighbor("Iceland")




///// with try ; await ; catch ; 


const getCountryAndNeighbor = async function  (country){
try {
  const response = await fetch(`https://restcountries.com/v2/name/${country}`)
  const [data] = await response.json()
  console.log(data)
  renderCountry(data)
  //// get neighbor :: 
    const neighbor = data.borders?.[0] ;
    const response2 = await fetch(`https://restcountries.com/v2/alpha/${neighbor}`) ; 
    const data2 = await response2.json()
    renderCountry(data2 , "neighbor")


  
} catch (err){
  console.log("country not found please check again")
}
}


getCountryAndNeighbor("tunisia")

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

const getCountry = function (country) {
  const request = new XMLHttpRequest();
  request.open("GET", `https://restcountries.com/v2/name/${country}`);
  request.send();

  request.addEventListener("load", function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    const html = `
    <div class="country-card">
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

    cardContainer.insertAdjacentHTML("afterbegin", html);
  });
};

getCountry("Andorra");

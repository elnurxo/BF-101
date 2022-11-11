//https://restcountries.com/v3.1/all

let countries = document.querySelector("#coutries-wrapper");
let url = 'https://restcountries.com/v3.1/all';

fetch(url)
  .then(response => response.json())
  .then(data => 
    {
       data.forEach(country => {
            let card = `<div class="col-3 mt-2">
            <div class="card">
            <img class="card-img-top" height="190" src="${country.flags.png}" alt="${country.name.common}">
                <div class="card-body">
                <h5 class="card-title">${country.name.common}, ${country.capital}</h5>
                <p class="card-text">Region: ${country.region}</p>
                <p class="card-text">Sub Region: ${country.subregion}</p>
                <p class="card-text">Area: ${country.area}</p>
                <a href="${country.maps.googleMaps}" target="_blank" class="btn btn-primary">MAPS</a>
                </div>
            </div>
        </div>`
        countries.innerHTML+=card;
       });
    });
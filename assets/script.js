const COUNTRY_URL = "https://restcountries.com/v3.1/all";

const Country_container = document.querySelector(".Country_container");
const RegionsData = document.querySelector(".S-Regions");
const BackTotop = document.querySelector(".BackTo-top");
const inputSer = document.querySelector(".sBox input");

let allData;

fetch(COUNTRY_URL)
  .then((response) => response.json())
  .then((data) => {
    renderDataOfCountries(data);
    allData = data;
  });

function renderDataOfCountries(data) {
  Country_container.innerHTML = "";
  data.forEach((country) => {
    // console.log(country);
    const Country_card = document.createElement("a");
    Country_card.classList.add("CountryCard");
    Country_card.href = `/CountryInfo.html?name=${country.name.common}`;
    Country_card.innerHTML = `
          <img src=${country.flags.svg} alt="flag" />
              <div class="country_text">
                  <h3 class="country_Title">${country.name.common}</h3>
                  <div class="country_items">
                      <p><b>Population:</b> ${country.population.toLocaleString(
                        "en-IN"
                      )}</p>
                      <p><b>Region:</b> ${country.region}</p>
                      <p><b>Capital:</b> ${country.capital}</p>
                  </div>
              </div>
`;

    Country_container.appendChild(Country_card);
  });
}

inputSer.addEventListener("input", (e) => {
  // console.log(e.target.value);
  // console.log(allData);
  const searchData = allData.filter((condata) =>
    condata.name.common.toLowerCase().includes(e.target.value.toLowerCase())
  );
  // console.log(searchData);
  renderDataOfCountries(searchData);
});

// inputSer.addEventListener('keydown',(e)=>{
//   if(e.key === "Enter"){
//     e.preventDefault();
//     inputSer.value='';
//   }
// })

RegionsData.addEventListener("change", (e) => {
  // console.log(e.target.value);
  fetch(`https://restcountries.com/v3.1/region/${e.target.value}`)
    .then((response) => response.json())
    .then((regionCountry) => {
      Country_container.innerHTML = "";
      renderDataOfCountries(regionCountry);
      // console.log(regionCountry);
    });
});


// For the scroll
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    BackTotop.style.display = "block";
  } else {
    BackTotop.style.display = "none";
  }
});

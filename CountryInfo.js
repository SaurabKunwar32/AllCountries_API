const Countryname = new URLSearchParams(location.search).get("name");
const back_button = document.querySelector(".back_button");
const cflag = document.querySelector(".cFlag img");
const cname = document.querySelector(".CName");
const population = document.querySelector(".population");
const native = document.querySelector(".native");
const region = document.querySelector(".region");
const subRegion = document.querySelector(".subRegion");
const Capital = document.querySelector(".Capital");
const topLevelDomain = document.querySelector(".topLevelDomain");
const Currencies = document.querySelector(".Currencies");
const Language = document.querySelector(".Language");
const bCon = document.querySelector(".bCon");
const Mode = document.querySelector(".modes");
const IconChange = document.querySelector(".modes");


const C_URL = `https://restcountries.com/v3.1/name/${Countryname}?fullText=true`;

fetch(C_URL)
  .then((response) => response.json())
  .then(([cdata]) => {
    // console.log(cdata.borders);
    cflag.src = cdata.flags.svg;
    cname.innerHTML = cdata.name.common;
    population.innerText = cdata.population.toLocaleString("en-IN");
    region.innerText = cdata.region;

    topLevelDomain.innerText = cdata.tld[0];

    if (cdata.name.nativeName) {
      native.innerText = Object.values(cdata.name.nativeName)[0].common;
    } else {
      native.innerText = cdata.name.common;
    }

    if (cdata.currencies) {
      Currencies.innerText = Object.values(cdata.currencies)
        .map((curr) => curr.name)
        .join(", ");
    }

    if (cdata.capital) {
      Capital.innerText = cdata.capital[0];
    }

    if (cdata.subregion) {
      subRegion.innerText = cdata.subregion;
    }

    if (cdata.languages) {
      Language.innerText = Object.values(cdata.languages).join(", ");
    }

    if (cdata.borders) {
      cdata.borders.forEach((bor) => {
        // console.log(bor);
        fetch(`https://restcountries.com/v3.1/alpha/${bor}`)
          .then((response) => response.json())
          .then(([DesCountry]) => {
            const Bcountries = document.createElement("a");
            Bcountries.innerHTML = DesCountry.name.common;
            Bcountries.href = `CountryInfo.html?name=${DesCountry.name.common}`;
            bCon.appendChild(Bcountries);
          });
      });
    }
  });

  
back_button.addEventListener("click", () => {
  history.back();
});


Mode.addEventListener("click", () => {
  document.body.classList.toggle("darkM");
});



// For modes
IconChange.addEventListener("click", () => {

  document.body.classList.toggle('dark-Theme')
  // For the icons
  const icons = document.getElementById("moon");
  icons.classList.toggle("fa-sun");
  icons.classList.toggle("fa-moon");


  // For the paragraph
  const para = document.getElementById("para");
  if (para.innerText === "Dark Mode") {
    para.innerText = "Light Mode";
  } else {
    para.innerText = "Dark Mode";
  }
});


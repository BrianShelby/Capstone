import { Header, Main, Footer } from "./components";
import * as store from "./store";
import Navigo from "navigo";
import { capitalize } from "lodash";
import axios from "axios";
// import dotenv from "dotenv";
// dotenv.config();

const router = new Navigo("/");

function render(state = store.Home) {
  document.querySelector("#root").innerHTML = `
    ${Header(state)}
    ${Main(state)}
    ${Footer()}
  `;
  router.updatePageLinks();
  afterRender(state);
}

// add sticky to header/nav bar
function afterRender(state) {
  window.addEventListener("scroll", function() {
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
  });
  // add menu toggle to bars icon in nav bar
  const menu = document.querySelector(".menu");
  const menuBtn = document.querySelector(".menu-btn");
  const closeBtn = document.querySelector(".close-btn");

  if (state.view === "Home") {
    const form = document.querySelector("form");

    form.addEventListener("submit", event => {
      event.preventDefault();
      console.log("The form was submitted!");

      const inputs = event.target.elements;

      //Save the Zipcode to store

      store.Home.zip = inputs.zipTextInput.value;
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?appid=${process.env.OPEN_WEATHER_MAP_API_KEY}&zip=${store.Home.zip},us&units=imperial`
        )
        .then(response => {
          console.log(response);
          const roundWholeNumber = wholeNumber => Math.round(wholeNumber);

          store.Home.weather = {};
          store.Home.weather.city = response.data.name;
          store.Home.weather.temp = roundWholeNumber(response.data.main.temp);
          store.Home.weather.feelsLike = roundWholeNumber(
            response.data.main.feels_like
          );
          store.Home.weather.description = response.data.weather[0].main;
          router.navigate("Home");
        })
        .catch(err => console.log(err));
    });
  }
  // open/close menu pop out
  menuBtn.addEventListener("click", () => {
    menu.classList.add("active");
  });
  closeBtn.addEventListener("click", () => {
    menu.classList.remove("active");
  });

  // sendBtn.addEventListener("click", () => {
  //   input.innerHTML = output.value;
  // });
}

router.hooks({
  before: (done, params) => {
    const view =
      params && params.data && params.data.view
        ? capitalize(params.page)
        : "Home";

    // Add a switch case statement to handle multiple routes
    switch (view) {
      case "Home": {
        //Call zip variable here.
        let zipCode = store.Home.zip;

        axios
          .get(
            `https://api.openweathermap.org/data/2.5/weather?appid=${process.env.OPEN_WEATHER_MAP_API_KEY}&zip=${zipCode},us&units=imperial`
          )
          .then(response => {
            console.log(response);
            const roundWholeNumber = wholeNumber => Math.round(wholeNumber);

            store.Home.weather = {};
            store.Home.weather.city = response.data.name;
            store.Home.weather.temp = roundWholeNumber(response.data.main.temp);
            store.Home.weather.feelsLike = roundWholeNumber(
              response.data.main.feels_like
            );
            store.Home.weather.description = response.data.weather[0].main;
            done();
          })
          .catch(err => console.log(err));
        break;
      }
      default: {
        done();
      }
    }
  },
  already: params => {
    const view =
      params && params.data && params.data.view
        ? capitalize(params.page)
        : "Home";

    render(store[view]);
  }
});

router
  .on({
    "/": () => render(),
    ":view": params => {
      let view = capitalize(params.data.view);
      render(store[view]);
    }
  })
  .resolve();

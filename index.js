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
  afterRender();
}

// add sticky to header/nav bar
function afterRender() {
  window.addEventListener("scroll", function() {
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
  });
  // add menu toggle to bars icon in nav bar
  const menu = document.querySelector(".menu");
  const menuBtn = document.querySelector(".menu-btn");
  const closeBtn = document.querySelector(".close-btn");
  // const sendBtn = document.querySelector("#sendButton");
  // const input = document.getElementById("#zipTextInput");
  // const output = document.getElementById("#message");

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
        axios
          .get(
            `https://api.openweathermap.org/data/2.5/weather?appid=${process.env.OPEN_WEATHER_MAP_API_KEY}&q=st%20louis&units=imperial`
          )
          .then(response => {
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

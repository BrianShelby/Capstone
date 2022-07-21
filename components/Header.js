import html from "html-literal";
import * as links from "../store/Links";
import logo from "../../assets/img/logo.png";

export default state => html`
  <header>
    <h1>${state.header}</h1>
    <a href="#"><img class="logo" src="${logo.png}"/></a>
    <div class="menu">
      <div class="btn">
        <i class="fas fa-times close-btn"></i>
      </div>
      ${links
        .map(
          links =>
            `<li><a href="/${links.title}" title="${links.title}" data-navigo>${links.text}</a></li>`
        )
        .join("")}
    </div>
    <div class="btn">
      <i class="fas fa-bars menu-btn"></i>
    </div>
  </header>
`;

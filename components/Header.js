import html from "html-literal";
import links from "../store/Links";
import logo from "../assets/img/logo.png";

export default state => html`
  <header>
    <h1>${state.header}</h1>
    <a href="#"><img class="logo" src="${logo}"/></a>
    <div class="menu">
      <div class="btn">
        <i class="fas fa-times close-btn"></i>
      </div>
      <ul>
        ${links
          .map(
            link =>
              `<li><a href="/${link.title}" title="${link.title}" data-navigo>${link.text}</a></li>`
          )
          .join("")}
      </ul>
    </div>
    <div class="btn">
      <i class="fas fa-bars menu-btn"></i>
    </div>
  </header>
`;

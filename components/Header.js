import html from "html-literal";
import * as links from "../store/Links";

export default state => html`
  <header>
    <h1>${state.header}</h1>
    <a href="#"><img id="logo" src="Pictures/logo.png"/></a>
    <video autoplay loop muted plays-inline class="back-video">
      <source src="Pictures/usaFlag.mp4" type="video/mp4" />
    </video>
    <nav>
      <ul class="nav-links">
        ${links
          .map(
            links =>
              `<li><a href="/${links.title}" title="${links.title}" data-navigo>${links.text}</a></li>`
          )
          .join("")}
      </ul>
      <div class="hamburger">
        <i class="fas fa-bars"></i>
      </div>
    </nav>
  </header>
`;

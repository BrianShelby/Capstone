import html from "html-literal";
import Bio1 from "../../assets/img/Bio1.jpg";

export default () => html`
  <section class="section-main">
    <h1>About Brian Shelby</h1>
    <div><img class="bioPic" src="${Bio1}" alt="" /></div>
    <h2>
      Hi! My name is Brian Shelby. I have a background in manufacturing, where
      over the past 25 years I have held various roles ranging from lead
      assembly mechanic, shop steward, and operations manager. In 2017, I
      obtained my BS degree in Information Technology. My love for technology,
      education and problem solving has led me to Savvy Coders Full Stack
      Bootcamp.
    </h2>
  </section>
`;

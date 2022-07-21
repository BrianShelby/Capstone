import html from "html-literal";
import Bio1 from "../../assets/img/Bio1.jpg";

export default () => html`
  <section class="section-main">
    <h1>Brian Shelby Bio</h1>
    <div><img class="bioPic" src="${Bio1.jpg}" alt="" /></div>
    <h2>
      Each initiative and referendum state employs a different procedure for
      filing petition applications. Some states require preliminary signatures
      while others do not. In addition, several states review each proposed
      statute, verifying that the law conforms to the style and conventions of
      state law and recommending alterations to initiative proponents.<a
        href="https://www.sos.mo.gov/CMSImages/Elections/Petitions/MakeYourVoiceHeard2022Cycle.pdf"
        target="_blank"
      >
        Click here to see The Missouri Official Handbook.</a
      >
    </h2>
  </section>
`;

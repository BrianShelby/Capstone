import html from "html-literal";

export default st => html`
  <section class="section-main">
    <h1>State & Federal Legislators</h1>
    <h2>Click on a Legislator to View Bio</h2>

    <div class="candidate-container1">
      <div class="candidate-heading1">Candidate Name</div>
      <div class="candidate-heading3">Election Office</div>
    </div>
    ${st.legislators
      .map(legislator => {
        return `
          <div class="candidate-container2">
          <div class="candidate-name"><a href="/legbio/${legislator.candidateId}">${legislator.firstName} ${legislator.lastName}</a></div>
          <div class="candidate-electionOffice">${legislator.electionOffice}</div>
          </div>
          `;
      })
      .join("")}
  </section>
`;

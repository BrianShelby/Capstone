import html from "html-literal";

export default st => html`
  <section class="section-main">
    <h1>State & Federal Legislators</h1>

    <div class="candidate-container1">
      <div class="candidate-heading1">First Name</div>
      <div class="candidate-heading2">Last Name</div>
      <div class="candidate-heading3">Election Office</div>
    </div>
    ${st.legislators.map(legislator => {
      return `
          <div class="candidate-container2">
          <div class="candidate-content1">${legislator.firstName}</div>
          <div class="candidate-content2">${legislator.lastName}</div>
          <div class="candidate-content3">${legislator.electionOffice}</div>
          </div>`;
    })}
  </section>
`;

{
  /* <table>
<tr>
  <th>First Name</th>
  <th>Last Name</th>
  <th>Office Name</th>
  <th>Election Office</th>
  <th>Election Status</th>
</tr>
${st.legislators.map(legislator => {
  return `<tr><td>
    ${legislator.firstName}</td><td>
    ${legislator.lastName}</td><td>
    ${legislator.officeName}</td><td>
    ${legislator.electionOffice}</td><td>
    ${legislator.electionStatus}</td></tr>`;
})}
</table> */
}

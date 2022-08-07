import html from "html-literal";

export default st => html`
  <section class="section-main">
    <h1>Area Legislators</h1>
    <table>
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
    </table>
  </section>
`;

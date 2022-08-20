import html from "html-literal";

export default st => html`
  <section class="section-main">
    <h1>${st.legBio.firstName} ${st.legBio.lastName}'s Bio</h1>
    <div class="candidateCard">
      <div>
        <img class="legislatorImg" src="${st.legBio.photo}" />
      </div>

      <div>
        <h4 class="bioProfile">Full Name:</h4>
        <p>
          ${st.legBio.firstName} ${st.legBio.lastName}
        </p>
      </div>
      <h4 class="bioProfile">Gender:</h4>
        <p>
          ${st.legBio.gender}
        </p>
        <h4 class="bioProfile">Family:</h4>
        <p>
          ${st.legBio.family}
        </p>
        <h4 class="bioProfile">Birth Date:</h4>
        <p>
          ${st.legBio.birthDate}
        </p>
        <h4 class="bioProfile">Birth Place:</h4>
        <p>
          ${st.legBio.birthPlace}
        </p>
        <h4 class="bioProfile">Home City:</h4>
        <p>
          ${st.legBio.homeCity}
        </p>
        <h4 class="bioProfile">Religion:</h4>
        <p>
          ${st.legBio.religion}
        </p>
        <h4 class="bioProfile">Education:</h4>
        <p>
           ${st.legBio.education.institution}
        </p>
        <h4 class="bioProfile">Political Experience:</h4>
        <p>
          ${st.legBio.political.experience}
        </p>
        <h4 class="bioProfile">Current Legislative Committees:</h4>
        <p>
          ${st.legBio.currentCommittees}
        </p>
        <h4 class="bioProfile">Professional Experience:</h4>
        <p>
          ${st.legBio.proExperience}
        </p>
        <h4 class="bioProfile">Memberships:</h4>
        <p>
          ${st.legBio.memberships}
        </p>
        <h4 class="bioProfile">Additional Information:</h4>
        <p>
          ${st.legBio.additionalInfo}
        </p>
      </div>
      </div>
      </div>
    </div>
  </section>
`;

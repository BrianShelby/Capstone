import html from "html-literal";
import searchIcon from "../../assets/img/search.png";

export default st => html`
  <section class="section-main">
    <h1>Welcome To YouVote</h1>
    <p>
      YouVote is an application where you can search for legislators in your
      state and federal
    </p>

    <form action="" class="main-search">
      <input
        type="text"
        id="zipTextInput"
        name="zipTextInput"
        placeholder="Enter Zip Code to Find Your Legislators"
      />
      <button id="sendButton" class="search-Btn" type="submit">
        <img src="${searchIcon}" />
      </button>
    </form>
  </section>

  <h3>
    The weather in ${st.weather.city} is ${st.weather.description}, and the
    temperature is ${st.weather.temp}°F, and it feels like
    ${st.weather.feelsLike}°F.
  </h3>
  <section class="section-two">
    <h2>Search For State Legislators</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae cumque
      dignissimos, aut molestiae aliquam laboriosam nesciunt voluptas molestias
      deleniti iure obcaecati qui sunt nostrum dolor eum ratione, esse,
      exercitationem id!
    </p>
    <h2>File A Petition</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae cumque
      dignissimos, aut molestiae aliquam laboriosam nesciunt voluptas molestias
      deleniti iure obcaecati qui sunt nostrum dolor eum ratione, esse,
      exercitationem id!
    </p>
    <h2>Review upcoming legislation</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae cumque
      dignissimos, aut molestiae aliquam laboriosam nesciunt voluptas molestias
      deleniti iure obcaecati qui sunt nostrum dolor eum ratione, esse,
      exercitationem id!
    </p>
  </section>
`;

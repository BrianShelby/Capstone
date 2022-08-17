import html from "html-literal";
import searchIcon from "../../assets/img/search.png";

export default st => html`
  <section class="section-main">
    <h1>Welcome To YouVote</h1>
    <h2>
      YouVote's goal is to provide it's users with unbiased information about candidates and elected officials to better inform voters before going to the ballot box. Just enter your zip code to find your state and federal legislators.
    </h2>

    <form action="" class="main-search">
      <input
        type="text"
        id="zipTextInput"
        name="zipTextInput"
        placeholder="Enter Your Zip Code"
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

  </section>
`;

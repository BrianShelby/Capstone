import html from "html-literal";
import searchIcon from "../../assets/img/search.png";

export default () => html`
  <section class="section-main">
    <h1>Welcome To YouVote</h1>
    <form action="" class="main-search">
      <input
        type="text"
        placeholder="Enter Zip Code - Search For State Legislators"
      />
      <button type="submit"><img src="${searchIcon}" /></button>
    </form>
  </section>
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

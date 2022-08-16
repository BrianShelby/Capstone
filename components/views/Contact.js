import html from "html-literal";

export default () => html`
  <section class="section-main">
    <h1>Contact Me</h1>
    <form
      id="fs-frm"
      name="simple-contact-form"
      accept-charset="utf-8"
      action=""
      method="post"
    >
      <fieldset id="fs-frm-inputs">
        <label for="full-name">Full Name</label>
        <input
          type="text"
          name="fullName"
          id="fullName"
          placeholder="First and Last"
          required=""
        />
        <label for="email-address">Email Address</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="youremail@xxxx.com"
          required=""
        />
        <label for="message">Message</label>
        <textarea
          rows="5"
          name="message"
          id="message"
          placeholder="Type message here..."
          required=""
        ></textarea>
        <input
          type="hidden"
          name="_subject"
          id="email-subject"
          value="Contact Form Submission"
        />
      </fieldset>
      <input type="Submit" value="Submit" name="Submit" />
    </form>
  </section>
`;

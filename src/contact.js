import React from 'react';

function Contact() {
  return (
    <div>
      <section class="form-section" id="contact">
        <form>
          <label for="name">Name</label>
          <input type="text" name="name" id="name" required />
          <label for="email">Email</label>
          <input type="email" name="email" id="email" required />
          <label for="message">Message</label>
          <textarea name="message" id="message" cols="30" rows="10"></textarea>
          <button type="submit">Submit</button>
        </form>
      </section>
    </div>
  );
}
export default Contact;

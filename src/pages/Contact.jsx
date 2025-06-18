import React from "react";
export const Contact = () => {
  const handleFormSubmit = (formData) => {
    const formInputData = Object.fromEntries(formData.entries());
    // console.log(formInputData);
  };
  return (
    <section className="section-contact">
      <h2 className="container-title">Contact Us</h2>

      <div className="contact-wrapper container">
        <form action={handleFormSubmit}>
          <input
            type="text"
            className="form-control"
            required
            autoComplete="false"
            placeholder="Enter your name"
            name="username"
          />
          <input
            type="email"
            className="form-control"
            required
            autoComplete="false"
            placeholder="Enter your email"
            name="useremail"
          />
          <textarea
            type="email"
            className="form-control"
            rows="10"
            required
            autoComplete="false"
            placeholder="Enter your message"
          />
          <button type="submit" value="send">
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

import React from "react";
import { Container, Button } from "react-bootstrap";
function ContactApp() {
  // create a form handeling app UI using bootstrap components
  const addFormData = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const email = e.target.email;
    const message = e.target.message;

    if (name.value === "" || email.value === "" || message.value === "") {
      // alert("Please fill all the fields");
      // print message in label using bootstrap alert component
      alert("Please fill all the fields");
      return;
    }

    alert("Form submitted successfully");
    console.log("Name: ", name.value);
    console.log("Email: ", email.value);
    console.log("Message: ", message.value);
    e.target.reset();

    // form handeling via components

    // there are 2 types of form handeling
    // 1. controlled components
    // 2. uncontrolled components
  };
  return (
    <>
      <Container className="app mt-5 w-50 border p-5 rounded mx-auto shadow">
        <h1 className="text-success text-center fs-1">
          Contact Application <span className="bi bi-person"></span>
        </h1>
        <p>
          This is a simple contact application built with React and Bootstrap.
        </p>
        <form onSubmit={addFormData}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter your name"
              name="name"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              name="email"
              id="email"
              placeholder="
Enter your email"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">
              Message
            </label>
            <textarea
              className="form-control"
              id="message"
              rows="3"
              placeholder="Enter your message"
              name="message"
            ></textarea>
          </div>
          <Button variant="primary" type="submit">
            Submit
          </Button>

          <Button variant="danger ms-5">Get Started</Button>
        </form>
      </Container>
    </>
  );
}

export default ContactApp;

import React from "react";
import "./contacts.css";
import Footer from "../../components/footer/Footer";

function Contacts() {
  return (
    <>
      <section className="contacts">
        <div className="container">
          <h1>Contact Us</h1>
          <div className="form-wrapper">
            <form>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                ></textarea>
              </div>
              <button type="submit">Submit</button>
            </form>
            <div className="contact-info">
              <h2>Get in Touch</h2>
              <p>Phone: 123-456-7890</p>
              <p>Email: contact@example.com</p>
              <p>Address: 123 Main St, Anytown USA</p>
              <div className="social-icons">
                <i className="fab fa-facebook-f"></i>
                <i className="fab fa-twitter"></i>
                <i className="fab fa-instagram"></i>
                <i className="fab fa-linkedin-in"></i>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Contacts;

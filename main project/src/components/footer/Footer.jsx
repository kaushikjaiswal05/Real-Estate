import React from "react";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="content">
        <div className="properties">
          <h1>Properties</h1>
          <ul>
            <li>List Single Property</li>
            <li>Search by City: San Francisco</li>
            <li>Search by Category: Apartment</li>
            <li>Search by Type: For Rent Search by</li>
            <li>Price: Less than $70,000</li>
            <li>Price: $70,000 - $100,000</li>
          </ul>
        </div>
        <div className="company">
          <h1>Company</h1>
          <ul>
            <li>About Us</li>
            <li>Blog</li>
            <li>Careers</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="contact">
          <h1>Contact</h1>
          <ul>
            <li>Phone: 123-456-7890</li>
            <li>Email: 0s8Qv@example.com</li>
            <li>Address: 123 Main St, Anytown USA</li>
          </ul>
          <div className="social-icons">
            <h1>Follow Us</h1>
            <div className="icons">
              <i className="fab fa-facebook-f"></i>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-instagram"></i>
              <i className="fab fa-linkedin-in"></i>
            </div>
          </div>
        </div>
        <div className="news">
          <h1>Newsletter</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum
            sequi alias vitae minima dolor eos enim soluta provident cumque
            dolores?
          </p>
          <input type="text" placeholder="Enter your email address" />
          <button type="submit">Subscribe</button>
        </div>
      </div>

      <div className="copyright">
        <p>&copy; 2024 Real Estate. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;

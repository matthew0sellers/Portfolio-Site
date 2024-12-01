import { NavLink } from "react-router-dom";

export default function HelpLayout() {
  return (
    <div className="help-layout">
      <h2>FAQ/Contact</h2>
      <p>
        Lorem ipsum dolor sit amet csectetur adipisicing elit. Dolorum, earum!
      </p>

      <nav>
        <NavLink to="faq">Frequently Asked Questions</NavLink>
        <NavLink to="contact">Contact Me</NavLink>
      </nav>
      <div className="footer">
        <div className="spacer" />
        <h3 id="footerTitle"> Thank you for taking a look at my portfolio</h3>
        <div>leave me a message with your email and I'll get back to you</div>
        <input className="emailInput" type="text" placeholder="Type Here" />
      </div>
    </div>
  );
}

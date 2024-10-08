import { NavLink } from "react-router-dom";

export default function HelpLayout() {
  return (
    <div className="help-layout">

        <h2>FAQ/Contact</h2>
        <p>Lorem ipsum dolor sit amet csectetur adipisicing elit. Dolorum, earum!</p>

        <nav>
            <NavLink to='faq'>Frequently Asked Questions</NavLink>
            <NavLink to='contact'>Contact Me</NavLink>

        </nav>

    </div>
  );
}

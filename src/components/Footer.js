import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer">
      <div className = "footer_row">
        <div>
          <h3>VISIT</h3>
          <Link to ="/home"><h1>MALUHIA</h1></Link>
        </div>
        <div>
          <h3>CONTACT</h3>
          <p>abc123@gmail.com</p>
          <p>(123)-456-7890</p>
        </div>
        <div>
          <h3>LINKS</h3>
          <Link to = "/home"><p>Home</p></Link>
          <Link to = "/listings"><p>Listings</p></Link>
          <Link to = "/mauivista"><p>Maui Vista</p></Link>
          <Link to = "/haikale"><p>Hai Kale</p></Link>
        </div>
      </div>

      <div className = "footer_row">
        <div></div>
        <div></div>
        <div><p>© 2024 Maluhia</p></div>
      </div>
    </div>
  );
}

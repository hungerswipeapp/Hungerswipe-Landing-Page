import React from "react";
import "../Shared/logo-white.png";
import "../Header.css";
import $ from "jquery";

function Header() {
 

  return (
    <div class="hamburger-menu">
      <input id="menu__toggle" type="checkbox" />
      <label class="menu__btn" for="menu__toggle">
        <span></span>
      </label>

      <ul class="menu__box">
        <li>
          <a class="menu__item" href="/">
            Home
          </a>
        </li>
        <li>
          <a class="menu__item" href="#">
            About
          </a>
        </li>
        <li>
          <a class="menu__item" href="#">
            Features
          </a>
        </li>
        <li>
          <a class="menu__item" href="#">
            Log in
          </a>
        </li>
        
      </ul>
    </div>
  );
}

export default Header;

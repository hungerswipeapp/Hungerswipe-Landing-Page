import React from "react";
import "../Shared/logo-white.png";
import "../Header.css";
import $ from "jquery";

function Header() {
 // $(window).scroll(function () {
  //   var scroll = $(window).scrollTop();
  //   if (scroll > 100) $("#drop").addClass("active");
  //   else if (scroll < 80) $("#drop").removeClass("active");
  // });

  // $("#drop, nav ~ ul li").click(function () {
  //   $("nav, #drop span").toggleClass("open");
  //   $("body").toggleClass("hidden");
  //   $(window).scrollTop(0);
  // });

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

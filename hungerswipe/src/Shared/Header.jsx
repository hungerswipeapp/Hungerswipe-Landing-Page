import React, { Component } from "react";
import $ from "jquery";
class Header extends Component {
  componentDidMount() {
    var click = false;
    $(document).on("click", ".hamburger--3dx", function () {
      click = !click;
      if (click) {
        $(this).addClass("is-active");
        $("#dropDown").hide().animate({
          height: "toggle",
        });
      } else {
        $(this).removeClass("is-active");
        $("#dropDown").show().animate({
          height: "toggle",
        });
      }
    });
  }
  render() {
    return (
      <div class="container">
        <div class="row">
          <div id="header" class="col-lg-12">
            <div class="pull-left">
              <h1>
                HungerSwipe logo here
              </h1>
            </div>
            <div class="pull-right">
              <div class="hamburger hamburger--3dx">
                <div class="hamburger-box">
                  <div class="hamburger-inner"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="dropDown" class="row">
          <div class="col-lg-12">
            <ul class="list list-unstyled text-center">
              <li>
                <a href="#">Portfolio</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;

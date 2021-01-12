import React from "react";
import Modal from './Modal'
import "../Shared/logo-white.png"
function Header() {

  // let scrollpos = window.scrollY;
  // const head = document.getElementById("head");
  // const navcontent = document.getElementById("nav-content");
  // const navaction = document.getElementById("navAction");
  // let toToggle = document.querySelectorAll(".toggleColour");

  // document.addEventListener("scroll", function () {
    
  //   scrollpos = window.scrollY;

  //   if (scrollpos > 10) {
  //     head.className.add("bg-white");
  //     navaction.className.remove("bg-white gradient text-gray-800 text-white");
     
  //     for (let i = 0; i < toToggle.length; i++) {
  //       toToggle[i].className.add("text-gray-800");
  //       toToggle[i].className.remove("text-white");
  //     }
  //     head.className.add("shadow");
  //     navcontent.className.remove("bg-gray-100");
  //     navcontent.className.add("bg-white");
  //   } else {
  //     head.className.remove("bg-white");
  //     navaction.className.remove("gradient");
  //     navaction.className.add("bg-white");
  //     navaction.className.remove("text-white");
  //     navaction.className.add("text-gray-800");
  //     //Use to switch toggleColour colours
  //     for (let i = 0; i < toToggle.length; i++) {
  //       toToggle[i].className.add("text-white");
  //       toToggle[i].className.remove("text-gray-800");
  //     }

  //     head.className.remove("shadow");
  //     navcontent.className.remove("bg-white");
  //     navcontent.className.add("bg-gray-100");
  //   }
  // });
  // var navMenuDiv = document.getElementById("nav-content");
  // var navMenu = document.getElementById("nav-toggle");

  // document.onclick = check;
  // function check(e) {
  //   let target = (e && e.target) || (e && e.srcElement);

    
  //   if (!checkParent(target, navMenuDiv)) {
      
  //     if (checkParent(target, navMenu)) {
        
  //       if (navMenuDiv.className.contains("hidden")) {
  //         navMenuDiv.className.removeClass("hidden");
  //       } else {
  //         navMenuDiv.className.add("hidden");
  //       }
  //     } else {
  //       navMenuDiv.className.add("hidden");
  //     }
  //   }
  // }
  // function checkParent(t, elm) {
  //   while (t.parentNode) {
  //     if (t === elm) {
  //       return true;
  //     }
  //     t = t.parentNode;
  //   }
  //   return false;
  // }
  return (
    <nav id="head" className="fixed w-full z-30 top-0 text-white">
      <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
        <div className="pl-4 flex items-center">
          <a
            className="toggleColour text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
            href="/"
            
          >
            <img src="https://i.imgur.com/KEP0ocu.png" alt="Logo"/>
          </a>
        </div>
        <div className="block lg:hidden pr-4">
          <button
            id="nav-toggle"
            className="flex items-center p-1 text-pink-800 hover:text-gray-900 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
          >
            <svg
              className="fill-current h-6 w-6"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div
          className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20"
          id="nav-content"
        >
          <ul className="list-reset lg:flex justify-end flex-1 items-center">
            <li className="mr-3">
              <a
                className="inline-block py-2 px-4 text-black font-bold no-underline"
                href="/"
              >
                Home
              </a>
            </li>
            <li className="mr-3">
              <a
                className="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4"
                href="/"
              >
                About
              </a>
            </li>
            <li className="mr-3">
              <a
                className="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4"
                href="/"
              >
                Features
              </a>
            </li>
          </ul>
          <Modal/>
        </div>
      </div>
      <hr className="border-b border-gray-100 opacity-25 my-0 py-0" />
    </nav>
  );
}

export default Header;

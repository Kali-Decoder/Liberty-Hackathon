import React from "react";
import { ConnectKitButton } from "connectkit";
import logo from "../assets/LOGO.png";
const Navbar = () => {
  return (
    <header>
      <div class="flex">
        <a href="/" className="mt-4">
          <img src={logo} className="w-60" alt="Meta Borrow" />
        </a>

        <nav className="mt-3">
          <button id="nav-toggle" class="hamburger-menu">
            <span class="strip"></span>
            <span class="strip"></span>
            <span class="strip"></span>
          </button>
          <ul id="nav-menu-container">
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>
              <a href="games/games.html">Games</a>
            </li>
            <li>
              <a href="blog.html">Blog</a>
            </li>
            <li>
              <a href="forums/index.html">Forums</a>
            </li>
            <li>
              <a href="contact.html">Contact</a>
            </li>
          </ul>
        </nav>
        <button className="mt-2">
          <ConnectKitButton  />
        </button>
      </div>
    </header>
  );
};

export default Navbar;

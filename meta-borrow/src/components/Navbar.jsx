import React from "react";
import {ConnectKitButton} from "connectkit"
const Navbar = () => {
  return (
    <header>
      <div class="flex">
        <div class="logo mt-4">
          <a href="index.html">
            <img
              src="https://onclickwebdesign.com/wp-content/uploads/game_warrior_logo.png"
              alt="Meta Borrow"
            />
          </a>
        </div>
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
        <button id="login-register-button" className="mt-2">
          <ConnectKitButton/>
        </button>
      </div>
    </header>
  );
};

export default Navbar;

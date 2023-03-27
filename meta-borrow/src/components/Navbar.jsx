import React from "react";

const Navbar = () => {
  return (
    <header>
      <div class="flex">
        <div class="logo">
          <a href="index.html">
            <img
              src="https://onclickwebdesign.com/wp-content/uploads/game_warrior_logo.png"
              alt="Meta Borrow"
            />
          </a>
        </div>
        <nav>
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
        <button id="login-register-button">
          Connect Wallet
        </button>
      </div>
    </header>
  );
};

export default Navbar;

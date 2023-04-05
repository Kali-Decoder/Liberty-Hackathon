import React from "react";
// import { ConnectKitButton } from "connectkit";
import logo from "../assets/LOGO.png";
import { LibrtyDevKit, NETWORK } from "librty-dev-kit";
const Navbar = () => {
  const connectWallet = async () => {
    const ldk = new LibrtyDevKit("LDKhack", NETWORK.POLYGON, false, {
      projectId: "ebfcdc090e2dd24e2574efb6a3d2cc96",
    });
    const connection = new ldk.wallet.walletConnect();
    // Get the URI to connect to wallet connect
    const uri = await connection.getConnectionURI();
    await connection.connect();

    console.log(uri)
  };
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
        {/* <button className="mt-2">
          <ConnectKitButton  />

        </button> */}
        <button
          type="button"
          onClick={connectWallet}
          className="mt-2 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        >
          Connect Wallet
        </button>
      </div>
    </header>
  );
};

export default Navbar;

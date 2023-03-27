import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import viteLogo from "/vite.svg";
import logo from "./assets/LOGO.png";
import Home from "./components/Home";
import RecentGames from "./components/RecentGames";
import Tournament from "./components/Tournament";
import Reviews from "./components/Reviews";
function App() {
  return (
    <>
      <Navbar />

      <main>
        <Home />

        <section id="latest-news">
          <div className="flex">
            <h5 className="text-black">Latest Game News</h5>
            <div id="latest-news-container">
              <div className="latest-news-item">
                <span className="badge new">New!</span>
                <span className="latest-news-text">
                Cyberpunk 2077 : Wake up, Samurai. We have a city to burn.
                </span>
              </div>
            </div>
          </div>
        </section>

        <section id="game-types-boxes">
          <div className="flex">
            <div className="box new">
              <div className="shade"></div>
              <div className="contents">
                <h4 className="text-white">Overwatch</h4>
                <p>This app is currently unavailable.</p>
                <a href="#" className="comments">
                  3 Comments
                </a>
              </div>
            </div>

            <div className="box strategy">
              <div className="shade"></div>
              <div className="contents">
                <h4>Assasin's Creed</h4>
                <p>Recommended for kids 17+.</p>
                <a href="#" className="comments">
                  3 Comments
                </a>
              </div>
            </div>

            <div className="box rpg">
              <div className="shade"></div>
              <div className="contents">
                <h4>Fortnite</h4>
                <p>A battling game. Violence. Uses guns.</p>
                <a href="#" className="comments">
                  3 Comments
                </a>
              </div>
            </div>

            <div className="box racing">
              <div className="shade"></div>
              <span className="badge racing">New!</span>
              <div className="contents">
                <h4>Asphalt 9 Legends</h4>
                <p>One of the best racing games of 2020! By GameLoft.</p>
                <a href="#" className="comments">
                  3 Comments
                </a>
              </div>
            </div>
          </div>
        </section>

        <RecentGames />
        <Tournament/>

        <Reviews/>
        <section id="posts-comments">
          <div className="flex">
            <div className="game-warrior">
              <a href="/">
                <img src={logo} className="w-60" alt="Meta Borrow" />
              </a>
              <p>This part is for comments and the latest posts.</p>
              <img
                className="footer-graphic"
                src="https://onclickwebdesign.com/wp-content/uploads/sword_lady_footer.png"
              />
            </div>

            <div className="posts-comments-box">
              <h3>Latest Posts</h3>
              <div className="post-item">
                <img src="https://onclickwebdesign.com/wp-content/uploads/latest_posts_1.jpg" />
                <div>
                  <h5>June 21, 2019</h5>
                  <p>Lorem ipsum dolor sit amet, consectectur adipiscing.</p>
                  <small>By: Admin</small>
                </div>
              </div>

              <div className="post-item">
                <img src="https://onclickwebdesign.com/wp-content/uploads/latest_posts_2.jpg" />
                <div>
                  <h5>June 21, 2019</h5>
                  <p>Lorem ipsum dolor sit amet, consectectur adipiscing.</p>
                  <small>By: Admin</small>
                </div>
              </div>

              <div className="post-item">
                <img src="https://onclickwebdesign.com/wp-content/uploads/latest_posts_3.jpg" />
                <div>
                  <h5>June 21, 2019</h5>
                  <p>Lorem ipsum dolor sit amet, consectectur adipiscing.</p>
                  <small>By: Admin</small>
                </div>
              </div>
            </div>

            <div className="posts-comments-box">
              <h3>Top Comments</h3>
              <div className="comments-item">
                <img src="https://onclickwebdesign.com/wp-content/uploads/top_comments_1.jpg" />
                <div>
                  <p>
                    <span className="author">James Smith</span> <span>on</span>{" "}
                    Lorem ipsum dolor sit amet consectectur.
                  </p>
                  <h5>June 21, 2019</h5>
                </div>
              </div>

              <div className="comments-item">
                <img src="https://onclickwebdesign.com/wp-content/uploads/top_comments_2.jpg" />
                <div>
                  <p>
                    <span className="author">James Smith</span> <span>on</span>{" "}
                    Lorem ipsum dolor sit amet consectectur.
                  </p>
                  <h5>June 21, 2019</h5>
                </div>
              </div>

              <div className="comments-item">
                <img src="https://onclickwebdesign.com/wp-content/uploads/top_comments_3.jpg" />
                <div>
                  <p>
                    <span className="author">James Smith</span> <span>on</span>{" "}
                    Lorem ipsum dolor sit amet consectectur.
                  </p>
                  <h5>June 21, 2019</h5>
                </div>
              </div>

              <div className="comments-item">
                <img src="https://onclickwebdesign.com/wp-content/uploads/top_comments_4.jpg" />
                <div>
                  <p>
                    <span className="author">James Smith</span> <span>on</span>{" "}
                    Lorem ipsum dolor sit amet consectectur.
                  </p>
                  <h5>June 21, 2019</h5>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default App;

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import viteLogo from "/vite.svg";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <section id="hero-image">
          <div class="hero-marketing-text">
            <h1>
              The Best <span>Games</span> Out There
            </h1>
            <h5>
              Here at GameWarrior you can download games on a PS3, PS4, Switch,
              Switch Lite, PC, and a smartphone (currently Android only). We
              allow you to download the games Roblox, Fortnite, Minecraft,
              Zelda, Mario Kart and more! Some of which cost money ($15.99 at
              the least), and some are free, like Roblox and Fortnite...
            </h5>
            <button onclick="readMore()">Read More</button>
          </div>
        </section>

        <section id="latest-news">
          <div class="flex">
            <h5>Latest News</h5>
            <div id="latest-news-container">
              <div class="latest-news-item">
                <span class="badge new">New!</span>
                <span class="latest-news-text">
                  We are making our way to consoles! We will only support PS3s,
                  PS4s, Switchs, Switch Lites, and PCs.
                </span>
              </div>
            </div>
          </div>
        </section>

        <section id="game-types-boxes">
          <div class="flex">
            <div class="box new">
              <div class="shade"></div>
              <div class="contents">
                <h4>Overwatch</h4>
                <p>This app is currently unavailable.</p>
                <a href="#" class="comments">
                  3 Comments
                </a>
              </div>
            </div>

            <div class="box strategy">
              <div class="shade"></div>
              <div class="contents">
                <h4>Assasin's Creed</h4>
                <p>Recommended for kids 17+.</p>
                <a href="#" class="comments">
                  3 Comments
                </a>
              </div>
            </div>

            <div class="box rpg">
              <div class="shade"></div>
              <div class="contents">
                <h4>Fortnite</h4>
                <p>A battling game. Violence. Uses guns.</p>
                <a href="#" class="comments">
                  3 Comments
                </a>
              </div>
            </div>

            <div class="box racing">
              <div class="shade"></div>
              <span class="badge racing">New!</span>
              <div class="contents">
                <h4>Asphalt 9 Legends</h4>
                <p>One of the best racing games of 2020! By GameLoft.</p>
                <a href="#" class="comments">
                  3 Comments
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="recent-games">
          <h1>Recent Games</h1>
          <div class="flex">
            <div class="box">
              <span class="badge new">New</span>
              <img src="https://onclickwebdesign.com/wp-content/uploads/recent_games_1.jpg" />
              <div class="box-lower-section">
                <h4>Suspendisse ut justo tem por, rutrum</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectectur adipiscing elit lorem
                  ipsum dolor sit amet.
                </p>
                <a href="#" class="comments">
                  3 Comments
                </a>
              </div>
            </div>

            <div class="box">
              <span class="badge racing">Racing</span>
              <img src="https://onclickwebdesign.com/wp-content/uploads/recent_games_2.jpg" />
              <div class="box-lower-section">
                <h4>Susce pulvinar metus nulla, vel facilisis sem</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectectur adipiscing elit lorem
                  ipsum dolor sit amet.
                </p>
                <a href="#" class="comments">
                  3 Comments
                </a>
              </div>
            </div>

            <div class="box">
              <span class="badge adventure">Adventure</span>
              <img src="https://onclickwebdesign.com/wp-content/uploads/recent_games_3.jpg" />
              <div class="box-lower-section">
                <h4>Suspendisse ut justo tem por, rutrum</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectectur adipiscing elit lorem
                  ipsum dolor sit amet.
                </p>
                <a href="#" class="comments">
                  3 Comments
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="tournaments">
          <div class="flex">
            <span class="badge tournaments">Tournaments</span>
            <div class="box">
              <span class="badge premium-tournament">Premium Tournament</span>
              <div class="tournaments-image">
                <img src="https://onclickwebdesign.com/wp-content/uploads/tournaments_1.jpg" />
              </div>
              <div class="tournaments-content">
                <h3>Starcraft 2</h3>
                <div>
                  <label>Tournament Begins:</label>{" "}
                  <strong>June 20, 2019</strong>
                </div>
                <div>
                  <label>Tournament Ends:</label> <strong>July 01, 2019</strong>
                </div>
                <div>
                  <label>Participants:</label> <strong>10 teams</strong>
                </div>
                <div>
                  <label>Tournament Organizer:</label> <strong>Admin</strong>
                </div>
                <div>
                  <label class="prizes">Prizes:</label>{" "}
                  <label>
                    1st place $2000, 2nd place: $1000, 3rd place: $500
                  </label>
                </div>
              </div>
            </div>

            <div class="box">
              <span class="badge premium-tournament">Premium Tournament</span>
              <div class="tournaments-image">
                <img src="https://onclickwebdesign.com/wp-content/uploads/tournaments_2.jpg" />
              </div>
              <div class="tournaments-content">
                <h3>World Of Warcraft</h3>
                <div>
                  <label>Tournament Begins:</label>{" "}
                  <strong>June 20, 2019</strong>
                </div>
                <div>
                  <label>Tournament Ends:</label> <strong>July 01, 2019</strong>
                </div>
                <div>
                  <label>Participants:</label> <strong>10 teams</strong>
                </div>
                <div>
                  <label>Tournament Organizer:</label> <strong>Admin</strong>
                </div>
                <div>
                  <label class="prizes">Prizes:</label>{" "}
                  <label>
                    1st place $2000, 2nd place: $1000, 3rd place: $500
                  </label>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="recent-reviews">
          <h1>Recent Reviews</h1>
          <div class="flex">
            <div class="box">
              <span class="rating-badge gold">3.3</span>
              <div class="recent-reviews-image">
                <img src="https://onclickwebdesign.com/wp-content/uploads/recent_reviews_1.jpg" />
              </div>
              <div>
                <h4>Assasin's Creed</h4>
                <p>
                  Play now the first ACTION RPG game of the acclaimed ASSASSIN’S
                  CREED Franchise. Explore the ITALIAN RENAISSANCE through the
                  eyes of your OWN ASSASSIN, complete dozens of missions and
                  unravel the epic mystery of The Crows.
                </p>
              </div>
            </div>

            <div class="box">
              <span class="rating-badge purple">4.0</span>
              <div class="recent-reviews-image">
                <img src="https://onclickwebdesign.com/wp-content/uploads/recent_reviews_2.jpg" />
              </div>
              <div>
                <h4>Doom</h4>
                <p>
                  Celebrate DOOM’s 25th anniversary with the re-release of the
                  original DOOM (1993), including the expansion, Thy Flesh
                  Consumed, is now available on Android devices...
                </p>
              </div>
            </div>

            <div class="box">
              <span class="rating-badge green">3.1</span>
              <div class="recent-reviews-image">
                <img src="https://onclickwebdesign.com/wp-content/uploads/recent_reviews_3.jpg" />
              </div>
              <div>
                <h4>Overwatch</h4>
                <p>This app is unavailable.</p>
              </div>
            </div>

            <div class="box">
              <span class="rating-badge violet">4.3</span>
              <div class="recent-reviews-image">
                <img src="https://onclickwebdesign.com/wp-content/uploads/recent_reviews_4.jpg" />
              </div>
              <div>
                <h4>GTA</h4>
                <p>
                  Five years ago, Carl Johnson escaped from the pressures of
                  life in Los Santos, San Andreas, a city tearing itself apart
                  with gang trouble, drugs and corruption. Where filmstars and
                  millionaires do their best to avoid the dealers and
                  gangbangers...
                </p>
              </div>
            </div>
          </div>
          <center>
            <h5 id="goTo">
              There's much more games in the{" "}
              <a href="games/index.html">Games</a> section!
            </h5>
          </center>
        </section>
        <section id="posts-comments">
          <div class="flex">
            <div class="game-warrior">
              <img src="https://onclickwebdesign.com/wp-content/uploads/footer_logo.png" />
              <p>This part is for comments and the latest posts.</p>
              <img
                class="footer-graphic"
                src="https://onclickwebdesign.com/wp-content/uploads/sword_lady_footer.png"
              />
            </div>

            <div class="posts-comments-box">
              <h3>Latest Posts</h3>
              <div class="post-item">
                <img src="https://onclickwebdesign.com/wp-content/uploads/latest_posts_1.jpg" />
                <div>
                  <h5>June 21, 2019</h5>
                  <p>Lorem ipsum dolor sit amet, consectectur adipiscing.</p>
                  <small>By: Admin</small>
                </div>
              </div>

              <div class="post-item">
                <img src="https://onclickwebdesign.com/wp-content/uploads/latest_posts_2.jpg" />
                <div>
                  <h5>June 21, 2019</h5>
                  <p>Lorem ipsum dolor sit amet, consectectur adipiscing.</p>
                  <small>By: Admin</small>
                </div>
              </div>

              <div class="post-item">
                <img src="https://onclickwebdesign.com/wp-content/uploads/latest_posts_3.jpg" />
                <div>
                  <h5>June 21, 2019</h5>
                  <p>Lorem ipsum dolor sit amet, consectectur adipiscing.</p>
                  <small>By: Admin</small>
                </div>
              </div>
            </div>

            <div class="posts-comments-box">
              <h3>Top Comments</h3>
              <div class="comments-item">
                <img src="https://onclickwebdesign.com/wp-content/uploads/top_comments_1.jpg" />
                <div>
                  <p>
                    <span class="author">James Smith</span> <span>on</span>{" "}
                    Lorem ipsum dolor sit amet consectectur.
                  </p>
                  <h5>June 21, 2019</h5>
                </div>
              </div>

              <div class="comments-item">
                <img src="https://onclickwebdesign.com/wp-content/uploads/top_comments_2.jpg" />
                <div>
                  <p>
                    <span class="author">James Smith</span> <span>on</span>{" "}
                    Lorem ipsum dolor sit amet consectectur.
                  </p>
                  <h5>June 21, 2019</h5>
                </div>
              </div>

              <div class="comments-item">
                <img src="https://onclickwebdesign.com/wp-content/uploads/top_comments_3.jpg" />
                <div>
                  <p>
                    <span class="author">James Smith</span> <span>on</span>{" "}
                    Lorem ipsum dolor sit amet consectectur.
                  </p>
                  <h5>June 21, 2019</h5>
                </div>
              </div>

              <div class="comments-item">
                <img src="https://onclickwebdesign.com/wp-content/uploads/top_comments_4.jpg" />
                <div>
                  <p>
                    <span class="author">James Smith</span> <span>on</span>{" "}
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
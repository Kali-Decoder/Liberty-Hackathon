import React from 'react'

const RecentGames = () => {
  return (
    <>
        <section id="recent-games">
          <h1 className='font-bold'>Recent <span className='text-yellow-400'>Games</span></h1>
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


    </>
  )
}

export default RecentGames
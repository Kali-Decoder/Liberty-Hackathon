import React from "react";

const Tournament = () => {
  return (
    <>
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
                <label>Tournament Begins:</label> <strong>June 20, 2019</strong>
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
                <label>Tournament Begins:</label> <strong>June 20, 2019</strong>
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
    </>
  );
};

export default Tournament;

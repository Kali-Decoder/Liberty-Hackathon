import React from "react";
import { reviews } from "../rawdata/reviews";
import ReviewCard from "../utils/ReviewCard";
const Reviews = () => {
  return (
    <>
      <section id="recent-reviews">
        <h1 className="font-bold">
          Recent <span className="text-yellow-400">Reviews</span>
        </h1>
        <div class="flex">
          {reviews.map((item,i)=>{
            return (<ReviewCard item={item} key={item.id}/>)
          })}
        </div>
        <center>
          <h5 id="goTo">
            There's much more games in the <a href="games/index.html">Games</a>{" "}
            section!
          </h5>
        </center>
      </section>
    </>
  );
};

export default Reviews;

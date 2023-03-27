import React from "react";

const ReviewCard = ({ item }) => {
  console.log("item", item);
  return (
    <>
      
      <div class="box">
        <span class="rating-badge gold">{item.rating}</span>
        <div class="recent-reviews-image">
          <img src={item.image} />
        </div>
        <div>
          <h4 className="font-bold">{item.name}</h4>
          <p>
            {item.description.slice(0,200)}
          </p>
        </div>
      </div>
    </>
  );
};

export default ReviewCard;

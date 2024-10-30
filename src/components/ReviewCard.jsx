import React from "react";
import "./ReviewCard.css"; // Import the CSS for animations

const ReviewCard = ({ review, animationDirection }) => {
  // Assign the animation class based on the direction
  const animationClass =
    animationDirection === "up" ? "animate-up" : "animate-down";

  return (
    <div className={`review-card ${animationClass}`}>
      <div className="photo-container">
        <img src={review.photo} alt={review.name} className="review-photo" />
      </div>
      <h3 className="font-bold text-gray-300">{review.name}</h3>
      <p className="text-center review-text ">{review.review}</p>
    </div>
  );
};

export default ReviewCard;

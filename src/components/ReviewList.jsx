import React, { useEffect, useRef, useState } from "react";
import ReviewCard from "./ReviewCard";
import "./ReviewList.css"; // Add styles here

import boy from "../assets/man.jpg";
import boy1 from "../assets/man2.jpg";
import boy2 from "../assets/man3.webp";
import boy3 from "../assets/man4.jpeg";
import girl from "../assets/girl.jpeg";
import girl2 from "../assets/girlb.jpeg";

const reviews = [
  {
    id: 1,
    name: "Alice",
    photo: boy,
    review:
      "Great product! I have been using it for a few weeks now, and it works perfectly. Highly satisfied with my purchase!",
  },
  {
    id: 2,
    name: "Bob",
    photo: girl,
    review:
      "Excellent service! The delivery was prompt, and the product exceeded my expectations. I would definitely recommend this to my friends.",
  },
  {
    id: 3,
    name: "Charlie",
    photo: boy2,
    review:
      "Highly recommend! This has become an essential part of my daily routine. It performs exceptionally well and is worth every penny.",
  },
  {
    id: 4,
    name: "David",
    photo: girl2,
    review:
      "Will buy again! The quality is outstanding, and it does exactly what it promises. I am thrilled with my purchase.",
  },
  {
    id: 5,
    name: "Eva",
    photo: boy3,
    review:
      "Fantastic quality! I love the design and the functionality. It has made my life so much easier. I'm really impressed!",
  },
  {
    id: 6,
    name: "Frank",
    photo: boy,
    review:
      "Loved it! From the moment I unboxed it, I knew I made the right choice. This product is top-notch and delivers great results!",
  },
  {
    id: 7,
    name: "Grace",
    photo: girl,
    review:
      "Best purchase ever! I can't believe how much I needed this until I started using it. It has really changed my daily routine for the better.",
  },
  {
    id: 8,
    name: "Henry",
    photo: boy1,
    review:
      "A must-have! If you're on the fence about buying this, just go for it. You won't regret it, as it works beautifully!",
  },
];

const ReviewList = () => {
  const [offset, setOffset] = useState(0);
  const listRef = useRef();
  const cardWidth = 220; // Width of each card + margin
  const scrollSpeed = 0.8; // Adjust this value to change the speed

  useEffect(() => {
    const animate = () => {
      setOffset((prev) => {
        const newOffset = prev - scrollSpeed;

        // Reset the offset when the first review goes out of view
        if (Math.abs(newOffset) >= cardWidth * reviews.length) {
          return 0; // Reset offset to the start
        }
        return newOffset;
      });

      requestAnimationFrame(animate);
    };

    const startAnimation = () => {
      requestAnimationFrame(animate);
    };

    startAnimation();
    return () => cancelAnimationFrame(animate);
  }, [scrollSpeed]);

  // Create a long list by concatenating reviews to create the seamless effect
  const extendedReviews = [
    ...reviews,
    ...reviews.map((review) => ({
      ...review,
      id: review.id + reviews.length,
    })),
  ];

  return (
    <div className="review-list flex flex-col" ref={listRef}>
      <div className="flex justify-center flex-col ">
        <h1 className="p-5 text-3xl md:text-5xl text-center font-bold my-4 font-montserrat ">
          What User says
        </h1>
        <h2 className="p-4 mb-4 text-xl sm:w-[300px] md:w-[600px] lg:w-[1065px] text-wrap text-center font-normal">
          Testimonials speak louder than words! Customer stories that light up
          our day
        </h2>
      </div>
      <div
        className="review-cards"
        style={{ transform: `translateX(${offset}px)` }}
      >
        {extendedReviews.map((review, index) => (
          <ReviewCard
            key={review.id}
            review={review}
            animationDirection={review.id % 2 === 0 ? "up" : "down"} // Alternate directions
          />
        ))}
      </div>
    </div>
  );
};

export default ReviewList;

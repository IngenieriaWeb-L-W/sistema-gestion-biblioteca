import Image from "next/image";
import React from "react";

interface StarRatingProps {
  rating: number;
}

const StarRating = ({ rating }: StarRatingProps) => {
  const maxStars = 5;
  const filledStars = Math.floor(rating);
  const halfStar = rating - filledStars >= 0.5;
  const emptyStars = maxStars - filledStars - (halfStar ? 1 : 0);

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      {[...Array(filledStars)].map((_, index) => (
        <span key={index}>
          <Image
            src="/icons/star-filled.svg"
            alt="Star"
            width={25}
            height={25}
          />
        </span>
      ))}
      {halfStar && (
        <span>
          <Image
            src="/icons/star-half.svg"
            alt="Half Star"
            width={25}
            height={25}
          />
        </span>
      )}
      {[...Array(emptyStars)].map((_, index) => (
        <span key={index + filledStars}>
          <Image
            src="/icons/star-outline.svg"
            alt="Empty Star"
            width={25}
            height={25}
          />
        </span>
      ))}
    </div>
  );
};

export default StarRating;

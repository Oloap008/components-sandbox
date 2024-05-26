import { useState } from "react";
import { FaStar } from "react-icons/fa6";

type StarRatingProps = {
  numOfStars?: number;
  size?: number;
  activeColor?: string;
};

export default function StarRating({
  numOfStars = 5,
  size = 32,
  activeColor = "#f1c40f",
}: StarRatingProps) {
  const [rating, setRating] = useState(0);
  const [tempRating, setTempRating] = useState(0);

  return (
    <div className="flex gap-3 justify-between items-center">
      <div className="flex items-center">
        {Array.from({ length: numOfStars }, (_, i) => i + 1).map((el) => (
          <FaStar
            key={el}
            size={size}
            onClick={() => setRating(el)}
            color={el <= (tempRating || rating) ? activeColor : "#000"}
            onMouseOver={() => setTempRating(el)}
            onMouseLeave={() => setTempRating(0)}
            className="p-px"
          />
        ))}
      </div>

      <p className={`font-semibold text-lg ${rating === 0 && "invisible"} w-2`}>
        {tempRating || rating}
      </p>
    </div>
  );
}

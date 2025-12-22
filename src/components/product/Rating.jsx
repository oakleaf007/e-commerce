import { useState } from "react";

import "bootstrap-icons/font/bootstrap-icons.css";


import "./rating.css"

export default function RatingStars() {
  
  const [rating, setRating] = useState(5);

  return (
    <div id="rating-container">
         <span className="me-2">5.0</span>

      {[1, 2, 3, 4, 5].map((value) => (
        <i
          key={value}
          className={
            value <= rating
              ? "bi bi-star-fill text-warning"
              : "bi bi-star text-secondary"
          }
          onClick={() => setRating(value)}
          style={{ cursor: "pointer", marginRight: "4px" }}
        />
      ))}

    </div>
  );
}

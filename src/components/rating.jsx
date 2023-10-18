import React, { useState } from "react";
import { Thankyou } from "./thankyou";
import { Form } from "./form";
export const Rating = () => {
  const [selectedRating, setSelectedRating] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleRatingClicked(rating) {
    setSelectedRating(rating);
  }
  function handleSubmit() {
    setIsSubmitted(true);
  }

  return isSubmitted ? (
    <Thankyou selectedRating={selectedRating} />
  ) : (
    <Form
      handleSubmit={handleSubmit}
      handleRatingClicked={handleRatingClicked}
    ></Form>
  );
};

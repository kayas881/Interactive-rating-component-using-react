import React from "react";
import Star from "./../assets/images/icon-star.svg";
export const Form = ({ handleSubmit, handleRatingClicked }) => {
  return (
    <form
      onSubmit={handleSubmit}
      className="md:w-[400px] md:h-[400px] max-md:w-[350px] max-md:h-[450px] text-white bg-gradient-to-b from-gray-800 to-gray-900 rounded-3xl pe-10 "
    >
      <img
        className=" bg-zinc-700 p-2 rounded-full mb-8 mt-6 ml-6"
        src={Star}
        alt="Star"
      />
      <h1 className="mb-3 font-bold text-2xl ml-6">How did we do?</h1>
      <p className="text-zinc-400 mb-8 text-[15px] ml-6 mt-4">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div className="flex justify-evenly w-full ml-5">
        {[1, 2, 3, 4, 5].map((rating) => (
          <button
            type="button"
            key={rating}
            onClick={() => handleRatingClicked(rating)}
            className=" hover:bg-orange-500 focus:bg-zinc-400 bg-zinc-800 w-12 h-12 p-2 rounded-full mb-8 mt-[-5px] text-gray-500"
          >
            {rating}
          </button>
        ))}
      </div>
      <button className="bg-orange-500 hover:bg-white hover:text-orange-500 w-full rounded-3xl py-3 text- mt-3 ml-5 font-medium uppercase tracking-[3px] ">
        Submit
      </button>
    </form>
  );
};

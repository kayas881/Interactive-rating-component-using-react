import React from "react";
import thankyou from "./../assets/images/illustration-thank-you.svg";
export const Thankyou = ({ selectedRating }) => {
  return (
    <div className="md:w-[400px] md:h-[400px] max-md:w-[350px] max-md:h-[450px] flex flex-col justify-center items-center text-white bg-gradient-to-b from-gray-800 to-gray-900 w-2/6 rounded-3xl p-10">
      <img src={thankyou} alt="thankyou" className=" mb-5" />
      <p className="mb-4 text-xs text-orange-500 bg-zinc-800 rounded-3xl py-1 px-3">
        You selected {selectedRating} out of 5
      </p>
      <h1 className="mb-4 font-semibold text-xl"> Thank you!</h1>
      <p className="text-zinc-400 mb-8 text-[15px] text-center">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don't hesitate to get in touch!
      </p>
    </div>
  );
};

import React from "react";

const ImagesTab = () => {
  return (
    <div className="imagesTab flex flex-col items-center border rounded-[2rem] border-gray-400 w-[50%] h-[20rem]">
      <input
        type="file"
        className="imageIn rounded w-[50%] h-[3rem] bg-gray-300 border-none p-2 my-[2rem] mt-16 text-[1rem]"
        accept="image/*"
      />
      <button
        type="submit"
        className="uploadBtn w-[30%] h-[3rem] rounded-[1rem] bg-[#6ccb61] border-none my-[2rem]"
      >
        Upload
      </button>
    </div>
  );
};

export default ImagesTab;

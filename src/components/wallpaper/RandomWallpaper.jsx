import React from "react";
import Img from "../../assets/images/img2.jpeg";

const RandomWallpaper = () => {
  return (
    <div className="fixed inset-0 overflow-hidden">
      <img src={Img} alt="wallpaper" className="w-full h-full object-cover" />
    </div>
  );
};

export default RandomWallpaper;

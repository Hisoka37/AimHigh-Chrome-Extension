import React from "react";
import images from "../../objects/images.json";

const RandomWallpaper = () => {
  const imageKeys = Object.keys(images);
  const randomIndex = Math.floor(Math.random() * imageKeys.length);
  const randomImageKey = imageKeys[randomIndex];
  const randomImageSrc = images[randomImageKey];

  return (
    <div className="fixed inset-0 overflow-hidden">
      <img
        src={randomImageSrc}
        alt="wallpaper"
        className="w-full h-full object-fill"
      />
    </div>
  );
};

export default RandomWallpaper;

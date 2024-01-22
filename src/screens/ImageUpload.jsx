import React, { useState, useEffect, useRef } from "react";
import { useDetails } from "../context/DetailsContext";
const ImageUpload = () => {
  const { updateImage } = useDetails();

  const [selectedImage, setSelectedImage] = useState(null);
  const fileInputRef = useRef(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target.result);
        updateImage(e.target.result);
        localStorage.setItem("image", e.target.result);
      };
      reader.readAsDataURL(file);
    } else {
      const imageUrl =
        "https://c0.klipartz.com/pngpicture/340/946/gratis-png-avatar-usuario-computadora-iconos-desarrollador-de-software-avatar.png";
      setSelectedImage(imageUrl);
    }
  };

  const handleContainerClick = () => {
    fileInputRef.current.click();
  };

  useEffect(() => {
    const storedImage = localStorage.getItem("image");
    if (storedImage) {
      setSelectedImage(storedImage);
      updateImage(storedImage);
    }
  }, []);

  return (
    <div className="flex justify-center items-center gap-5">
      <div
        className="border border-gray-300 rounded-full p-2 w-32 h-32 cursor-pointer text-sm text-center flex justify-center items-center"
        onClick={handleContainerClick}
      >
        {selectedImage ? (
          <img
            src={selectedImage}
            alt="Selected"
            className="w-full h-full object-cover rounded-full"
          />
        ) : (
          <span className="text-gray-500">Click to choose an image</span>
        )}
      </div>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="hidden"
        ref={fileInputRef}
        name="image"
        id="image"
      />
    </div>
  );
};

export default ImageUpload;

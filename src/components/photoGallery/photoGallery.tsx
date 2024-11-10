import React from "react";
import { gallery, galleryItem } from "./photoGallery.module.css";
import { StaticImage } from "gatsby-plugin-image";

const PhotoGallery: React.FC = () => {
  return (
    <>
      <div className={gallery}>
        <div className={galleryItem}>
          <StaticImage src="../../images/me_blue.jpeg" alt="WTF" />
        </div>
        <div className={galleryItem}>
          <StaticImage src="../../images/domestic-hearth-logo.png" alt="WTF" />
        </div>
        <div className={galleryItem}>
          <StaticImage src="../../images/me_booth.jpeg" alt="WTF" />
        </div>
        <div className={galleryItem}>
          <StaticImage src="../../images/unminipy-logo.png" alt="WTF" />
        </div>
      </div>
    </>
  );
};

export default PhotoGallery;

import React, { ReactNode } from "react";
import { wrapper } from "./siteImage.module.css";

type Props = {
  src: string;
  alt: string;
  children?: ReactNode;
};

const SiteImage: React.FC<Props> = ({ src, alt }) => {
  return (
    <>
      <div className={wrapper}>
        <img src={src} alt={alt} />
      </div>
    </>
  );
};

export default SiteImage;

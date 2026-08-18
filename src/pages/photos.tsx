import React from "react";
import Layout from "../components/layout/layout";
import PhotoGallery from "../components/photoGallery/photoGallery";

const Photos = () => {
  return (
    <Layout width="wide">
      <PhotoGallery />
    </Layout>
  );
};

export const Head = () => <title>steebe - PHOTOS</title>;

export default Photos;

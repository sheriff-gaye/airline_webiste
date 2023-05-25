import React from "react";
import "./gallery.css";
import Header from "../../components/Header";
import Image from "../../images/header_bg_3.jpg";

const Gallery = () => {
  const galleryLength = 15;
  const images = [];

  for (let i = 1; i <= galleryLength; i++) {
    images.push(require(`../../images/gallery${i}.jpg`));
  }
  return (
    <>
      <Header title="Our Gallery" image={Image}>
        Welcome to our gym's gallery header! Here you'll find a visual showcase
        of our state-of-the-art facilities, motivating group classes, dedicated
        trainers, and inspiring member transformations. Get a glimpse of the
        vibrant fitness community we offer.
      </Header>
      <section className="gallery">
        <div className="container gallery_container">
          {images.map((images, index) => {
            return (
              <article key={index}>
                <img src={images} alt="gallery_image" />
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Gallery;

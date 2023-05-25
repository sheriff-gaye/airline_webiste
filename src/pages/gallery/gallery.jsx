import React from "react";
import "./gallery.css"
import Header from "../../components/Header";
import Image from "../../images/header_bg_3.jpg";

const Gallery = () => {
    const galleryLength = 15;
    const images = []

    for (let i = 1; i <= galleryLength; i++) {
        images.push(require(`../../images/gallery${i}.jpg`))
    }
    return (
        <>
            <Header title="Our Gallery" image={Image}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque laboriosam
                est alias quidem blanditiis aliquid molestiae cum, officia ipsum soluta?
            </Header>
            <section className="gallery">
                <div className="container gallery_container">
                    {
                        images.map((images, index) => {
                            return <article key={index}>
                                <img src={images} alt="gallery_image" />
                            </article>
                        })
                    }

                </div>

            </section>
        </>
    )
}

export default Gallery;
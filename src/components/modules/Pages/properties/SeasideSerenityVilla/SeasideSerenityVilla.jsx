import React, { useState } from "react";
import Slider from "react-slick";
import "@/components/modules/Pages/properties/SeasideSerenityVilla/SeasideSerenityVilla.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { PrevArrow, NextArrow, Dots } from "./CustomArrows";

const SeasideSerenityVilla = () => {
  const property = {
    title: "Seaside Serenity Villa",
    location: "Malibu, California",
    price: "$1,250,000",

    images: [
      "/images/property1.jpg",
      "/images/property2.jpg",
      "/images/property2.jpg",
      "/images/property2.jpg",
      "/images/property2.jpg",
      "/images/property2.jpg",
      "/images/property1.jpg",
      "/images/property2.jpg",
      "/images/property2.jpg",
      "/images/property2.jpg",
      "/images/property2.jpg",
      "/images/property2.jpg",
    ],
  };

  const [slider1, setSlider1] = useState(null);
  const [slider2, setSlider2] = useState(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const settingsMain = {
    dots: false,
    arrows: false,
    fade: false,
    asNavFor: slider2,
    ref: (slider) => setSlider1(slider),
    infinite: false,
    speed: 500,
    slidesToShow: 2, // Базове налаштування для великого екрану
    slidesToScroll: 1,
    beforeChange: (_, next) => setActiveSlide(next),
    responsive: [
      {
        // При екрану < 900px показуємо лише 1 слайд
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const settingsThumb = {
    dots: false,
    arrows: false,
    slidesToShow: 9,
    swipeToSlide: true,
    focusOnSelect: true,
    asNavFor: slider1,
    ref: (slider) => setSlider2(slider),
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
  };

  return (
    <div className="slider-container">
      <header className="slider--container--header">
        <div className="slider--container--header--descriprion">
          <h1>{property.title}</h1>
          <div className="slider--container--header--descriprion--map">
            <div className="slider--container--header--descriprion--map--icon">
              <img src="/images/locationImages.png" alt="" />
            </div>
            <p>{property.location}</p>
          </div>
        </div>
        <div className="slider--container--header--price">
          <div className="slider--container--header--price--text">
            <p>Price</p>
          </div>
          <p className="slider--container--header--price--tax">
            {property.price}
          </p>
        </div>
      </header>

      <section className="slider--wrapper">
        <Slider {...settingsThumb} className="thumbnail-slider">
          {property.images.map((imageUrl, index) => (
            <div className="thumbnail-slider--images" key={index}>
              <img
                src={imageUrl}
                alt={`Thumbnail ${index}`}
                className="thumbnail-image"
              />
            </div>
          ))}
        </Slider>
        <Slider {...settingsMain} className="main-slider">
          {property.images.map((imageUrl, index) => (
            <div className="main-slider--images" key={index}>
              <img
                src={imageUrl}
                alt={`Property ${index}`}
                className="main-slider-image"
              />
            </div>
          ))}
        </Slider>

        <div></div>

        <div className="custom-arrows--wrapper">
          <div className="custom-arrows">
            <PrevArrow onClick={() => slider1?.slickPrev()} />
            <Dots
              activeIndex={activeSlide}
              length={property.images.length}
            />{" "}

            <NextArrow onClick={() => slider1?.slickNext()} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default SeasideSerenityVilla;

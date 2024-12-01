import React, { useState } from "react";
import PokiSearch from "./components/ApiPoki";

export default function About() {
  
  return (
    <div className="about">
      <div className="summary">
        <h2>About Us</h2>
        <p>
          I've spent a lot of time working with React, learning how to implement
          seamless transitions and smooth interactive experiences for user
          interfaces.
        </p>
        <p>
          I specialize in integrating multimedia solutions to enhance user
          experiences. With a strong background in implementing video and photo
          functionalities, I ensure seamless media integration that captivates
          users. Additionally, I have experience incorporating secure payment
          methods, making transactions smooth and efficient. My goal is to
          create engaging, user-friendly systems that drive interaction and
          satisfaction.
        </p>
      </div>

      <div className="aboutSections">
        <div className="video">
          <p>
            Here I embedded a music video from YouTube into my website, to give
            it an ambience while you look through it.
          </p>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/IOMlE8ey8uI?si=QuivzUksSjP53WlH"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>

        <div className="cardSlider">
          <p>
            Here is an example of an interactive picture album, with smooth
            transitions. I was doing some research while coding this and found
            that using rem measurements in CSS can be more efficient for
            resizing images on different size screens.
          </p>
          <div className="sliderContainer">
            <div className="slider">
              <img
                id="slide-1"
                src="https://thumbor.forbes.com/thumbor/fit-in/960x/https://www.forbes.com/advisor/wp-content/uploads/2021/03/traveling-based-on-fare-deals.jpg"
                alt=""
              />
              <img
                id="slide-2"
                src="https://nextvacay.com/wp-content/uploads/2022/07/KW-why-travel-is-important-1024x576.jpg.webp"
                alt=""
              />
              <img
                id="slide-3"
                src="https://i.natgeofe.com/n/c15761fa-d631-4a41-bd23-8e339560709c/nationalgeographic_2670050crop.jpg?w=718&h=479"
                alt=""
              />
              <img
                id="slide-4"
                src="https://images.squarespace-cdn.com/content/v1/545ece7fe4b0edd3bdd2dbdf/1456195614606-H7MZVTBP4HGNZYI86BBC/Laguna+De+Apoyo-131.jpg?format=1000w"
                alt=""
              />
            </div>
            <div className="sliderNav">
              <a href="#slide-1"></a>
              <a href="#slide-2"></a>
              <a href="#slide-3"></a>
              <a href="#slide-4"></a>
            </div>
          </div>
        </div>
        <PokiSearch></PokiSearch>
      </div>
    </div>
  );
}

"use client";
import React from "react";
import Image from "next/image";

const Carousel = ({ images, carouselSection }) => {
  // console.log(images);
  // const image = images[0];
  // const imgUrl = `https://admin.masterleatherbd.com/${image}`;

  // console.log("imgurl", imgUrl);

  return (
    <>
      <h1>Image Carousel</h1>

      <div className="grid grid-cols-4">
        {carouselSection?.images?.map((img, i) => (
          <div key={i} className="relative">
            <Image
              src={img}
              // src={`https://admin.masterleatherbd.com/${img}`}
              alt={`Image ${i + 1}`}
              width={500}
              height={500}
              layout="intrinsic"
              className="rounded-lg shadow-lg"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Carousel;

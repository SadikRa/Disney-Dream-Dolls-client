// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

const ShopToy = () => {
  return (
    <div className="flex items-center justify-center w-full h-full py-24 sm:py-8 px-4">
      <CarouselProvider
        className="lg:block hidden"
        naturalSlideWidth={100}
        isIntrinsicHeight={true}
        totalSlides={12}
        visibleSlides={4}
        step={1}
        infinite={true}
      >
        <div className="w-full relative flex items-center justify-center">
          <ButtonBack
            role="button"
            aria-label="slide backward"
            className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer"
            id="prev"
          >
            <svg
              width={8}
              height={14}
              viewBox="0 0 8 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 1L1 7L7 13"
                stroke="white"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </ButtonBack>
          <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
            <Slider>
              <div
                id="slider"
                className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700"
              >
                <Slide index={0}>
                  <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                    <img
                      src="https://i.ibb.co/T2qCwGz/Screenshot-1.png"
                      alt="black chair and white table"
                      className="object-cover object-center w-full h-96"
                    />
                    <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                      <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
                        Price 50$
                      </h2>
                      <div className="flex h-full items-end pb-6">
                        <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                         <button className="btn btn-primary">Buy Now</button>
                        </h3>
                      </div>
                    </div>
                  </div>
                </Slide>
                <Slide index={1}>
                  <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                    <img
                      src="https://i.ibb.co/gj3M1XF/Screenshot-2.png"
                      alt="sitting area"
                      className="object-cover object-center w-full h-96"
                    />
                    <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                      <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
                       Price 30$
                      </h2>
                      <div className="flex h-full items-end pb-6">
                        <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                          <button className="btn btn-primary">Buy Now</button>
                        </h3>
                      </div>
                    </div>
                  </div>
                </Slide>
                <Slide index={2}>
                  <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                    <img
                      src="https://i.ibb.co/f9YTfGh/Screenshot-3.png"
                      alt="sitting area"
                      className="object-cover object-center w-full h-96"
                    />
                    <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                      <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
                        Price 25$
                      </h2>
                      <div className="flex h-full items-end pb-6">
                        <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                         <button className="btn btn-primary">Buy Now</button>
                        </h3>
                      </div>
                    </div>
                  </div>
                </Slide>
                <Slide index={3}>
                  <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                    <img
                      src="https://i.ibb.co/W6xcbqX/Screenshot-4.png"
                      alt="sitting area"
                      className="object-cover object-center w-full h-96"
                    />
                    <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                      <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
                        Price 22$
                      </h2>
                      <div className="flex h-full items-end pb-6">
                        <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                         <button className="btn btn-primary">Buy Now</button>
                        </h3>
                      </div>
                    </div>
                  </div>
                </Slide>
                <Slide index={4}>
                  <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                    <img
                      src="https://i.ibb.co/1rhzStw/Screenshot-5.png"
                      alt="black chair and white table"
                      className="object-cover object-center w-full h-96"
                    />
                    <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                      <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
                       price 33$
                      </h2>
                      <div className="flex h-full items-end pb-6">
                        <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                         <button className="btn btn-primary">Buy Now</button>
                        </h3>
                      </div>
                    </div>
                  </div>
                </Slide>
                <Slide index={5}>
                  <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                    <img
                      src="https://i.ibb.co/vdjszct/Screenshot-6.png"
                      alt="sitting area"
                      className="object-cover object-center w-full h-96"
                    />
                    <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                      <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
                        price 15$
                      </h2>
                      <div className="flex h-full items-end pb-6">
                        <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                         <button className="btn btn-primary">Buy Now</button>
                        </h3>
                      </div>
                    </div>
                  </div>
                </Slide>
                <Slide index={6}>
                  <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                    <img
                      src="https://i.ibb.co/0KVqyxQ/Screenshot-7.png"
                      alt="sitting area"
                      className="object-cover object-center w-full h-96"
                    />
                    <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                      <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
                        price 40$
                      </h2>
                      <div className="flex h-full items-end pb-6">
                        <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                         <button className="btn btn-primary">Buy Now</button>
                        </h3>
                      </div>
                    </div>
                  </div>
                </Slide>
                <Slide index={7}>
                  <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                    <img
                      src="https://i.ibb.co/f9YTfGh/Screenshot-3.png"
                      alt="sitting area"
                      className="object-cover object-center w-full"
                    />
                    <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                      <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
                       Price 30$
                      </h2>
                      <div className="flex h-full items-end pb-6">
                        <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                         <button className="btn btn-primary">Buy Now</button>
                        </h3>
                      </div>
                    </div>
                  </div>
                </Slide>
                <Slide index={8}>
                  <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                    <img
                      src="https://i.ibb.co/sCPYT3s/Screenshot-8.png"
                      alt="black chair and white table"
                      className="object-cover object-center w-full h-96"
                    />
                    <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                      <h2 className="texlg:t-xl le leading-4 text-basealg:ding-tight text-white">
                        Price 50$
                      </h2>
                      <div className="flex h-full items-end pb-6">
                        <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                         <button className="btn btn-primary">Buy Now</button>
                        </h3>
                      </div>
                    </div>
                  </div>
                </Slide>
                <Slide index={9}>
                  <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                    <img
                      src="https://i.ibb.co/kx0jn2k/Screenshot-9.png"
                      alt="sitting area"
                      className="object-cover object-center w-full h-96"
                    />
                    <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                      <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
                        Catalog 2
                      </h2>
                      <div className="flex h-full items-end pb-6">
                        <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                         <button className="btn btn-primary">Buy Now</button>
                        </h3>
                      </div>
                    </div>
                  </div>
                </Slide>
                <Slide index={10}>
                  <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                    <img
                      src="https://i.ibb.co/gb1jD6X/Screenshot-53.png"
                      alt="sitting area"
                      className="object-cover object-center w-full h-96"
                    />
                    <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                      <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
                        Price 60$
                      </h2>
                      <div className="flex h-full items-end pb-6">
                        <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                         <button className="btn btn-primary">Buy Now</button>
                        </h3>
                      </div>
                    </div>
                  </div>
                </Slide>
              </div>
            </Slider>
          </div>
          <ButtonNext
            role="button"
            aria-label="slide forward"
            className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
            id="next"
          >
            <svg
              width={8}
              height={14}
              viewBox="0 0 8 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1L7 7L1 13"
                stroke="white"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </ButtonNext>
        </div>
      </CarouselProvider>
    </div>
  );
};

export default ShopToy;

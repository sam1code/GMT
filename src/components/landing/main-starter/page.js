import React, { useState } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const SlideshowWithDetails = () => {
  const divStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundSize: "cover",
    height: "250px",
  };
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleSlideChange = (oldIndex, newIndex) => {
    setCurrentIndex(newIndex);
  };

  const slideImages = [
    {
      url: "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    },
  ];

  return (
    <div className="flex flex-wrap md:flex-nowrap  items-center justify-around gap-10 mt-8 relative">
      <div
        className="w-full md:w-1/2 p-4"
        style={{
          maxWidth: "450px",
        }}
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-8  z-10">
          Reshaping Personal & Family Financial Planning
        </h2>
        <p className="text-gray-600 text-justify text-sm  mb-8">
          Empowering Futures, One Plan at a Time: Reshaping Personal & Family
          Financial & Investment Planning...
        </p>
        <div className="flex items-center mt-4 gap-8">
          <button
            className="bg-blue-700 text-white px-4 py-2 "
            style={{
              borderTopRightRadius: 200,
              borderBottomRightRadius: 60,
              borderTopLeftRadius: 60,
              borderBottomLeftRadius: 200,
              padding: "10px 40px",
              backgroundColor: "#2639ED",
              zIndex: 10,
            }}
          >
            Call Now
          </button>
          <button
            className=" text-white px-4 py-2 z-10"
            style={{
              borderTopRightRadius: 200,
              borderBottomRightRadius: 60,
              borderTopLeftRadius: 60,
              borderBottomLeftRadius: 200,
              padding: "10px 40px",
              backgroundColor: "#FF9900",
              zIndex: 10,
            }}
          >
            Chat Now
          </button>
        </div>
        <div
          className="absolute -bottom-20"
          style={{
            zIndex: 0,
          }}
        >
          <svg
            width="404"
            height="154"
            viewBox="0 0 404 154"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="211.5" cy="3.5" r="3.5" fill="#F4F4F4" />
            <circle cx="211.5" cy="24.5" r="3.5" fill="#F4F4F4" />
            <circle cx="211.5" cy="45.5" r="3.5" fill="#F4F4F4" />
            <circle cx="211.5" cy="66.5" r="3.5" fill="#F4F4F4" />
            <circle cx="211.5" cy="87.5" r="3.5" fill="#F4F4F4" />
            <circle cx="211.5" cy="108.5" r="3.5" fill="#F4F4F4" />
            <circle cx="211.5" cy="129.5" r="3.5" fill="#F4F4F4" />
            <circle cx="211.5" cy="150.5" r="3.5" fill="#F4F4F4" />
            <circle cx="232.5" cy="3.5" r="3.5" fill="#F4F4F4" />
            <circle cx="232.5" cy="24.5" r="3.5" fill="#F4F4F4" />
            <circle cx="232.5" cy="45.5" r="3.5" fill="#F4F4F4" />
            <circle cx="232.5" cy="66.5" r="3.5" fill="#F4F4F4" />
            <circle cx="232.5" cy="87.5" r="3.5" fill="#F4F4F4" />
            <circle cx="232.5" cy="108.5" r="3.5" fill="#F4F4F4" />
            <circle cx="232.5" cy="129.5" r="3.5" fill="#F4F4F4" />
            <circle cx="232.5" cy="150.5" r="3.5" fill="#F4F4F4" />
            <circle cx="253.5" cy="3.5" r="3.5" fill="#F4F4F4" />
            <circle cx="253.5" cy="24.5" r="3.5" fill="#F4F4F4" />
            <circle cx="253.5" cy="45.5" r="3.5" fill="#F4F4F4" />
            <circle cx="253.5" cy="66.5" r="3.5" fill="#F4F4F4" />
            <circle cx="253.5" cy="87.5" r="3.5" fill="#F4F4F4" />
            <circle cx="253.5" cy="108.5" r="3.5" fill="#F4F4F4" />
            <circle cx="253.5" cy="129.5" r="3.5" fill="#F4F4F4" />
            <circle cx="253.5" cy="150.5" r="3.5" fill="#F4F4F4" />
            <circle cx="274.5" cy="3.5" r="3.5" fill="#F4F4F4" />
            <circle cx="274.5" cy="24.5" r="3.5" fill="#F4F4F4" />
            <circle cx="274.5" cy="45.5" r="3.5" fill="#F4F4F4" />
            <circle cx="274.5" cy="66.5" r="3.5" fill="#F4F4F4" />
            <circle cx="274.5" cy="87.5" r="3.5" fill="#F4F4F4" />
            <circle cx="274.5" cy="108.5" r="3.5" fill="#F4F4F4" />
            <circle cx="274.5" cy="129.5" r="3.5" fill="#F4F4F4" />
            <circle cx="274.5" cy="150.5" r="3.5" fill="#F4F4F4" />
            <circle cx="295.5" cy="3.5" r="3.5" fill="#F4F4F4" />
            <circle cx="295.5" cy="24.5" r="3.5" fill="#F4F4F4" />
            <circle cx="295.5" cy="45.5" r="3.5" fill="#F4F4F4" />
            <circle cx="295.5" cy="66.5" r="3.5" fill="#F4F4F4" />
            <circle cx="295.5" cy="87.5" r="3.5" fill="#F4F4F4" />
            <circle cx="295.5" cy="108.5" r="3.5" fill="#F4F4F4" />
            <circle cx="295.5" cy="129.5" r="3.5" fill="#F4F4F4" />
            <circle cx="295.5" cy="150.5" r="3.5" fill="#F4F4F4" />
            <circle cx="316.5" cy="3.5" r="3.5" fill="#F4F4F4" />
            <circle cx="316.5" cy="24.5" r="3.5" fill="#F4F4F4" />
            <circle cx="316.5" cy="45.5" r="3.5" fill="#F4F4F4" />
            <circle cx="316.5" cy="66.5" r="3.5" fill="#F4F4F4" />
            <circle cx="316.5" cy="87.5" r="3.5" fill="#F4F4F4" />
            <circle cx="316.5" cy="108.5" r="3.5" fill="#F4F4F4" />
            <circle cx="316.5" cy="129.5" r="3.5" fill="#F4F4F4" />
            <circle cx="316.5" cy="150.5" r="3.5" fill="#F4F4F4" />
            <circle cx="337.5" cy="3.5" r="3.5" fill="#F4F4F4" />
            <circle cx="337.5" cy="24.5" r="3.5" fill="#F4F4F4" />
            <circle cx="337.5" cy="45.5" r="3.5" fill="#F4F4F4" />
            <circle cx="337.5" cy="66.5" r="3.5" fill="#F4F4F4" />
            <circle cx="337.5" cy="87.5" r="3.5" fill="#F4F4F4" />
            <circle cx="337.5" cy="108.5" r="3.5" fill="#F4F4F4" />
            <circle cx="337.5" cy="129.5" r="3.5" fill="#F4F4F4" />
            <circle cx="337.5" cy="150.5" r="3.5" fill="#F4F4F4" />
            <circle cx="358.5" cy="3.5" r="3.5" fill="#F4F4F4" />
            <circle cx="358.5" cy="24.5" r="3.5" fill="#F4F4F4" />
            <circle cx="358.5" cy="45.5" r="3.5" fill="#F4F4F4" />
            <circle cx="358.5" cy="66.5" r="3.5" fill="#F4F4F4" />
            <circle cx="358.5" cy="87.5" r="3.5" fill="#F4F4F4" />
            <circle cx="358.5" cy="108.5" r="3.5" fill="#F4F4F4" />
            <circle cx="358.5" cy="129.5" r="3.5" fill="#F4F4F4" />
            <circle cx="358.5" cy="150.5" r="3.5" fill="#F4F4F4" />
            <circle cx="379.5" cy="3.5" r="3.5" fill="#F4F4F4" />
            <circle cx="379.5" cy="24.5" r="3.5" fill="#F4F4F4" />
            <circle cx="379.5" cy="45.5" r="3.5" fill="#F4F4F4" />
            <circle cx="379.5" cy="66.5" r="3.5" fill="#F4F4F4" />
            <circle cx="379.5" cy="87.5" r="3.5" fill="#F4F4F4" />
            <circle cx="379.5" cy="108.5" r="3.5" fill="#F4F4F4" />
            <circle cx="379.5" cy="129.5" r="3.5" fill="#F4F4F4" />
            <circle cx="379.5" cy="150.5" r="3.5" fill="#F4F4F4" />
            <circle cx="400.5" cy="3.5" r="3.5" fill="#F4F4F4" />
            <circle cx="400.5" cy="24.5" r="3.5" fill="#F4F4F4" />
            <circle cx="400.5" cy="45.5" r="3.5" fill="#F4F4F4" />
            <circle cx="400.5" cy="66.5" r="3.5" fill="#F4F4F4" />
            <circle cx="400.5" cy="87.5" r="3.5" fill="#F4F4F4" />
            <circle cx="400.5" cy="108.5" r="3.5" fill="#F4F4F4" />
            <circle cx="400.5" cy="129.5" r="3.5" fill="#F4F4F4" />
            <circle cx="400.5" cy="150.5" r="3.5" fill="#F4F4F4" />
            <circle cx="3.5" cy="3.5" r="3.5" fill="#F4F4F4" />
            <circle cx="3.5" cy="24.5" r="3.5" fill="#F4F4F4" />
            <circle cx="3.5" cy="45.5" r="3.5" fill="#F4F4F4" />
            <circle cx="3.5" cy="66.5" r="3.5" fill="#F4F4F4" />
            <circle cx="3.5" cy="87.5" r="3.5" fill="#F4F4F4" />
            <circle cx="3.5" cy="108.5" r="3.5" fill="#F4F4F4" />
            <circle cx="3.5" cy="129.5" r="3.5" fill="#F4F4F4" />
            <circle cx="3.5" cy="150.5" r="3.5" fill="#F4F4F4" />
            <circle cx="24.5" cy="3.5" r="3.5" fill="#F4F4F4" />
            <circle cx="24.5" cy="24.5" r="3.5" fill="#F4F4F4" />
            <circle cx="24.5" cy="45.5" r="3.5" fill="#F4F4F4" />
            <circle cx="24.5" cy="66.5" r="3.5" fill="#F4F4F4" />
            <circle cx="24.5" cy="87.5" r="3.5" fill="#F4F4F4" />
            <circle cx="24.5" cy="108.5" r="3.5" fill="#F4F4F4" />
            <circle cx="24.5" cy="129.5" r="3.5" fill="#F4F4F4" />
            <circle cx="24.5" cy="150.5" r="3.5" fill="#F4F4F4" />
            <circle cx="45.5" cy="3.5" r="3.5" fill="#F4F4F4" />
            <circle cx="45.5" cy="24.5" r="3.5" fill="#F4F4F4" />
            <circle cx="45.5" cy="45.5" r="3.5" fill="#F4F4F4" />
            <circle cx="45.5" cy="66.5" r="3.5" fill="#F4F4F4" />
            <circle cx="45.5" cy="87.5" r="3.5" fill="#F4F4F4" />
            <circle cx="45.5" cy="108.5" r="3.5" fill="#F4F4F4" />
            <circle cx="45.5" cy="129.5" r="3.5" fill="#F4F4F4" />
            <circle cx="45.5" cy="150.5" r="3.5" fill="#F4F4F4" />
            <circle cx="66.5" cy="3.5" r="3.5" fill="#F4F4F4" />
            <circle cx="66.5" cy="24.5" r="3.5" fill="#F4F4F4" />
            <circle cx="66.5" cy="45.5" r="3.5" fill="#F4F4F4" />
            <circle cx="66.5" cy="66.5" r="3.5" fill="#F4F4F4" />
            <circle cx="66.5" cy="87.5" r="3.5" fill="#F4F4F4" />
            <circle cx="66.5" cy="108.5" r="3.5" fill="#F4F4F4" />
            <circle cx="66.5" cy="129.5" r="3.5" fill="#F4F4F4" />
            <circle cx="66.5" cy="150.5" r="3.5" fill="#F4F4F4" />
            <circle cx="87.5" cy="3.5" r="3.5" fill="#F4F4F4" />
            <circle cx="87.5" cy="24.5" r="3.5" fill="#F4F4F4" />
            <circle cx="87.5" cy="45.5" r="3.5" fill="#F4F4F4" />
            <circle cx="87.5" cy="66.5" r="3.5" fill="#F4F4F4" />
            <circle cx="87.5" cy="87.5" r="3.5" fill="#F4F4F4" />
            <circle cx="87.5" cy="108.5" r="3.5" fill="#F4F4F4" />
            <circle cx="87.5" cy="129.5" r="3.5" fill="#F4F4F4" />
            <circle cx="87.5" cy="150.5" r="3.5" fill="#F4F4F4" />
            <circle cx="108.5" cy="3.5" r="3.5" fill="#F4F4F4" />
            <circle cx="108.5" cy="24.5" r="3.5" fill="#F4F4F4" />
            <circle cx="108.5" cy="45.5" r="3.5" fill="#F4F4F4" />
            <circle cx="108.5" cy="66.5" r="3.5" fill="#F4F4F4" />
            <circle cx="108.5" cy="87.5" r="3.5" fill="#F4F4F4" />
            <circle cx="108.5" cy="108.5" r="3.5" fill="#F4F4F4" />
            <circle cx="108.5" cy="129.5" r="3.5" fill="#F4F4F4" />
            <circle cx="108.5" cy="150.5" r="3.5" fill="#F4F4F4" />
            <circle cx="129.5" cy="3.5" r="3.5" fill="#F4F4F4" />
            <circle cx="129.5" cy="24.5" r="3.5" fill="#F4F4F4" />
            <circle cx="129.5" cy="45.5" r="3.5" fill="#F4F4F4" />
            <circle cx="129.5" cy="66.5" r="3.5" fill="#F4F4F4" />
            <circle cx="129.5" cy="87.5" r="3.5" fill="#F4F4F4" />
            <circle cx="129.5" cy="108.5" r="3.5" fill="#F4F4F4" />
            <circle cx="129.5" cy="129.5" r="3.5" fill="#F4F4F4" />
            <circle cx="129.5" cy="150.5" r="3.5" fill="#F4F4F4" />
            <circle cx="150.5" cy="3.5" r="3.5" fill="#F4F4F4" />
            <circle cx="150.5" cy="24.5" r="3.5" fill="#F4F4F4" />
            <circle cx="150.5" cy="45.5" r="3.5" fill="#F4F4F4" />
            <circle cx="150.5" cy="66.5" r="3.5" fill="#F4F4F4" />
            <circle cx="150.5" cy="87.5" r="3.5" fill="#F4F4F4" />
            <circle cx="150.5" cy="108.5" r="3.5" fill="#F4F4F4" />
            <circle cx="150.5" cy="129.5" r="3.5" fill="#F4F4F4" />
            <circle cx="150.5" cy="150.5" r="3.5" fill="#F4F4F4" />
            <circle cx="171.5" cy="3.5" r="3.5" fill="#F4F4F4" />
            <circle cx="171.5" cy="24.5" r="3.5" fill="#F4F4F4" />
            <circle cx="171.5" cy="45.5" r="3.5" fill="#F4F4F4" />
            <circle cx="171.5" cy="66.5" r="3.5" fill="#F4F4F4" />
            <circle cx="171.5" cy="87.5" r="3.5" fill="#F4F4F4" />
            <circle cx="171.5" cy="108.5" r="3.5" fill="#F4F4F4" />
            <circle cx="171.5" cy="129.5" r="3.5" fill="#F4F4F4" />
            <circle cx="171.5" cy="150.5" r="3.5" fill="#F4F4F4" />
            <circle cx="192.5" cy="3.5" r="3.5" fill="#F4F4F4" />
            <circle cx="192.5" cy="24.5" r="3.5" fill="#F4F4F4" />
            <circle cx="192.5" cy="45.5" r="3.5" fill="#F4F4F4" />
            <circle cx="192.5" cy="66.5" r="3.5" fill="#F4F4F4" />
            <circle cx="192.5" cy="87.5" r="3.5" fill="#F4F4F4" />
            <circle cx="192.5" cy="108.5" r="3.5" fill="#F4F4F4" />
            <circle cx="192.5" cy="129.5" r="3.5" fill="#F4F4F4" />
            <circle cx="192.5" cy="150.5" r="3.5" fill="#F4F4F4" />
          </svg>
        </div>
      </div>
      <div className="w-full lg:w-2/6 md:w-1/2 relative rounded-2xl z-10">
        <div className="absolute z-1 -top-10 -left-10">
          <svg
            width="129"
            height="129"
            viewBox="0 0 129 129"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="64.5" cy="64.5" r="64.5" fill="#DAE9FF" />
          </svg>
        </div>
        <div className="absolute z-1 -bottom-10 -right-10">
          <svg
            width="178"
            height="178"
            viewBox="0 0 178 178"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 0H59.3333C124.871 0 178 53.1289 178 118.667C178 151.436 151.436 178 118.667 178H0V0Z"
              fill="#FFF5DB"
            />
          </svg>
        </div>
        <div
          style={{
            borderTopRightRadius: 50,
            borderBottomLeftRadius: 200,
          }}
          className="rounded-2xl overflow-hidden"
        >
          <Slide
            arrows={false}
            autoplay={true}
            canSwipe={true}
            infinite={true}
            duration={3000}
            className="relative"
            onChange={handleSlideChange}
          >
            {slideImages.map((slideImage, index) => (
              <div key={index}>
                <div
                  style={{
                    ...divStyle,
                    backgroundImage: `url(${slideImage.url})`,
                  }}
                ></div>
              </div>
            ))}
          </Slide>
        </div>
        <div className="flex justify-center items-center mt-2 absolute z-50 w-full">
          {slideImages.map((slideImage, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full mx-1 ${
                currentIndex === index ? "bg-blue-700" : "bg-black"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SlideshowWithDetails;

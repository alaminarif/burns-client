import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Loading from "../Share/Loading";
import Review from "./Review";

import { Navigation, Pagination, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const Reviews = () => {
  // const [reviews, setReview] = useState([]);
  // useEffect(() => {
  //   fetch("https://immense-wave-88332.herokuapp.com/review")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setReview(data);
  //     });
  // }, []);
  const {
    data: reviews,
    isLoading,
    refetch,
  } = useQuery("reviews", () => {
    return fetch("https://immense-wave-88332.herokuapp.com/review").then((res) => res.json());
  });

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className=" mx-auto max-w-7xl">
      <h3 className="text-center text-4xl tracking-widest font-bold uppercase">Review</h3>

      <div className="w-24 mt-4 mx-auto rounded h-1 bg-primary mb-20 mySwiper"></div>
      <Swiper
        className=""
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={2}
        slidesPerView={3}
        centeredSlides={false}
        autoplay={{
          delay: 2000,
          disableOnInteraction: true,
        }}
        navigation={false}
        pagination={{
          dynamicBullets: false,
        }}
      >
        <div className=" justify-items-center ">
          {reviews.map((review) => (
            <SwiperSlide key={review._id}>
              <Review key={review._id} review={review} />
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
};

export default Reviews;

import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Loading from "../Share/Loading";
import Review from "./Review";

// import { Navigation, Pagination, Autoplay } from "swiper";
import { Autoplay, EffectCoverflow, Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const Reviews = () => {
  // const [reviews, setReview] = useState([]);
  // useEffect(() => {
  //   fetch("https://hand-tools.onrender.com/review")
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
    return fetch("https://hand-tools.onrender.com/review").then((res) => res.json());
  });

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className=" mx-auto max-w-7xl">
      <h3 className="text-center text-4xl tracking-widest font-bold uppercase">Review</h3>

      <div className="w-24 mt-4 mx-auto rounded h-1 bg-primary mb-20 mySwiper"></div>
      <Swiper
        // className=""
        // modules={[Navigation, Pagination, Autoplay]}
        // spaceBetween={2}
        // slidesPerView={3}
        // centeredSlides={false}
        // autoplay={{
        //   delay: 2000,
        //   disableOnInteraction: true,
        // }}
        // navigation={false}
        // pagination={{
        //   dynamicBullets: false,
        // }}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={false}
        slidesPerView={3}
        autoplay={{
          delay: 3500,
          disableOnInteraction: true,
        }}
        coverflowEffect={{
          rotate: 65,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 justify-items-center  ">
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

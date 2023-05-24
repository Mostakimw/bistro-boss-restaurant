import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Rating } from "@smastrom/react-rating";
import { FaQuoteLeft } from "react-icons/fa";

import "@smastrom/react-rating/style.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/review")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div className="my-20 max-w-screen-xl mx-auto">
      <SectionTitle
        subtitle="what our client say"
        title={"Testimonials"}
      ></SectionTitle>
      <div className="flex">
        <Swiper
          navigation={true}
          modules={[Navigation]}
          className="mySwiper text-center"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review._id}>
              <Rating
                style={{ maxWidth: 180 }}
                value={review.rating}
                readOnly
                className="mx-auto"
              />
              <i className="flex justify-center pt-6 text-7xl text-black">
                <FaQuoteLeft />
              </i>
              <p className="py-6 px-40">{review.details}</p>
              <h3 className="text-2xl text-[#CD9003]">{review.name}</h3>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;

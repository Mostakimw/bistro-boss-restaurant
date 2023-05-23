import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

import slider1 from "../../../assets/home/slide1.jpg";
import slider2 from "../../../assets/home/slide2.jpg";
import slider3 from "../../../assets/home/slide3.jpg";
import slider4 from "../../../assets/home/slide1.jpg";
import slider5 from "../../../assets/home/slide4.jpg";
import slider6 from "../../../assets/home/slide2.jpg";

const Category = () => {
  return (
    <div className="mb-20 mt-12">
      <SectionTitle
        subtitle="from 11:00am to 10:00 pm"
        title="order online"
      ></SectionTitle>

      <Swiper
        slidesPerView={4}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={slider1} alt="" />
          <div className="relative">
            <h4 className="uppercase text-2xl text-white -mt-16 text-center italic">
              Salads
            </h4>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider2} alt="" />
          <h4 className="uppercase text-2xl text-white -mt-16 text-center italic">
            Pizzas
          </h4>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider3} alt="" />
          <h4 className="uppercase text-2xl text-white -mt-16 text-center italic">
            Coffees
          </h4>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider4} alt="" />
          <h4 className="uppercase text-2xl text-white -mt-16  text-center italic">
            Salads
          </h4>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider5} alt="" />
          <h4 className="uppercase text-2xl text-white -mt-16  text-center italic">
            Deserts
          </h4>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider6} alt="" />
          <h4 className="uppercase text-2xl text-white -mt-16  text-center italic">
            Pizzas
          </h4>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Category;

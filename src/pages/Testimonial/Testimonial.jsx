import { useEffect, useState } from "react";
import ReactStars from "react-stars";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SectionHeading from "../shared/SectionHeading/SectionHeading";

const Testimonial = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div className="bg-white py-10">
      <section className="w-[75%] mx-auto max-md:w-[95%]">
        {/* Section Heading */}
        <SectionHeading
          heading={"Testimonials"}
          subHeading={
            "Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit"
          }
        ></SectionHeading>
        <Swiper
          navigation={true}
          modules={[Navigation]}
          className="mySwiper my-20 text-center"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.id}>
              <p className="mx-16">{review.comments}</p>
              <div>
                <img
                  width={50}
                  height={50}
                  src={review.image}
                  alt="person-1"
                  className="mx-auto rounded-full mt-5"
                />
              </div>
              <div className="flex justify-center mt-2">
                <ReactStars
                  count={5}
                  value={review.rating}
                  size={24}
                  activeColor="#ffd700"
                  edit={false}
                />
              </div>
              <p className="mt-2">{review.name}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
    // <div className="bg-white text-black py-10">
    //   <div className="w-8/12 mx-auto max-md:w-11/12 text-black">
    //     <h2 className="text-center text-4xl font-semibold my-5">
    //       Testimonials
    //     </h2>
    //     <Swiper
    //       navigation={true}
    //       modules={[Navigation]}
    //       className="mySwiper my-20 text-center"
    //     >
    //       {reviews.map((review) => (
    //         <SwiperSlide key={review.id}>
    //           <p className="mx-16">{review.comments}</p>
    //           <img
    //             src={review.image}
    //             alt="person-1"
    //             className="max-w-[80px] block mx-auto rounded-full mt-5"
    //           />
    //           <div className="flex justify-center mt-2">
    //             <ReactStars
    //               count={5}
    //               value={review.rating}
    //               size={24}
    //               activeColor="#ffd700"
    //               edit={false}
    //             />
    //           </div>
    //           <p className="mt-2">{review.name}</p>
    //         </SwiperSlide>
    //       ))}
    //     </Swiper>
    //   </div>
    // </div>
  );
};

export default Testimonial;

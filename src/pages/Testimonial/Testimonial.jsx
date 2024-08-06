import { useEffect, useState } from "react";
import ReactStars from "react-stars";
import 'swiper/css';
import 'swiper/css/autoplay';
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Testimonial = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div className="py-10 bg-blue-100">
      <section className="w-[75%] mx-auto max-md:w-[95%]">
        <Swiper
          navigation={true}
          modules={[Navigation]}
          className="mySwiper my-20 text-center"
          autoplay={{
            delay: 3000, // Delay between slides in milliseconds
            disableOnInteraction: false, // Continue autoplay after user interactions
          }}
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.id}>
              <div className="text-center max-md:mx-10">
                <div className="h-[100px] w-[100px] mx-auto flex justify-center items-center mb-2">
                  <img
                    src={review.image}
                    alt="person-1"
                    className="inline-block w-full h-full rounded-full"
                  />
                </div>
                <p className="mt-2 text-black font-semibold">{review.name}</p>
                <p className="text-black">{review.comments}</p>
                <div className="flex justify-center mt-2">
                  <ReactStars
                    count={5}
                    value={review.rating}
                    size={24}
                    activeColor="#ffd700"
                    edit={false}
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
};

export default Testimonial;

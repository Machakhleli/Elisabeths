import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function TestimonialSlider({ reviews }) {
  return (
    <div className="max-w-4xl mx-auto py-24 border-t border-zinc-900">
      <h3 className="text-center text-zinc-500 uppercase tracking-[0.3em] text-xs mb-12">
        What clients are saying
      </h3>

      <style>{`
        .swiper-button-next, .swiper-button-prev { color: white !important; transform: scale(0.4); }
        .swiper-pagination-bullet { background: #555 !important; }
        .swiper-pagination-bullet-active { background: white !important; }
      `}</style>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 6000 }}
        className="pb-12"
      >
        {reviews.map((review) => (
          <SwiperSlide key={review.id}>
            <div className="flex flex-col items-center text-center px-12">
              <p className="text-xl md:text-2xl font-light italic text-zinc-300 mb-6">
                "{review.text}"
              </p>
              <span className="text-xs tracking-widest uppercase text-white">
                — {review.author}
              </span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { FaQuoteLeft } from 'react-icons/fa';
import Hero from '../assets/Test1 (1).png'
import Testimonial1 from '../assets/Test (2).png'
import Testimonial2 from '../assets/Test (1).png'
import Testimonial3 from '../assets/Test (4).png'
import Testimonial4 from '../assets/Test1 (3).png'
// Sample testimonial data
const testimonials = [
  {
    id: 1,
    name: 'John Doe',
    comment: 'Barkey helped me find the perfect pet sitter!',
    image: Hero,
  },
  {
    id: 2,
    name: 'Jane Smith',
    comment: 'Excellent service! Highly recommend.',
    image: Testimonial1,
  },
  {
    id: 3,
    name: 'Alice Johnson',
    comment: 'Professional and caring pet sitters.',
    image: Testimonial2,
  },
  {
    id: 4,
    name: 'Mike Brown',
    comment: 'Barkey made finding a pet sitter so easy.',
    image: Testimonial3,
  },
  {
    id: 5,
    name: 'Sarah Wilson',
    comment: 'Very satisfied with the service. Will use again!',
    image: Testimonial4,
  },
];

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
  };

  return (
    <div className="lg:w-[35%] mx-auto mt-10 lg:mb-20 font-gaya sm:mb-10 sm:w-[75%]">
      <h3 className="text-3xl font-bold mb-6 text-center font-gaya">Testimonials</h3>
      <Slider {...settings}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id}>
            <div className="bg-white rounded border border-gray-500 p-6 h-[300px] shadow-inner shadow-blue-500  ">
              <div className="relative mb-4">
                <img
                  src={testimonial.image}
                  alt="Testimonial Image"
                  className="w-[50%] h-[150px] object-fit rounded-t-lg"
                />
                <div className="absolute inset-0 bg-black opacity-40 rounded-t-lg"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-white text-lg font-medium">{testimonial.comment}</p>
                </div>
              </div>
              <p className="text-gray-500 font-semibold text-center text-2x1 mt-20">- {testimonial.name}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonial;
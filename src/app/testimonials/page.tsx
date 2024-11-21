"use client";
import React from 'react';
import TestimonialItem from '../../components/TestimonialItems';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const TestimonialsData = [
  {
    id: 1,
    img: '/images/person/p1.jpg',
    name: 'Angelie Jul',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est tenetur ducimus dolor nulla natus obcaecati',
    aosDelay: '100',
  },
  {
    id: 2,
    img: '/images/person/p7.jpg',
    name: 'Peper Pods',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est tenetur ducimus dolor nulla natus obcaecati',
    aosDelay: '200',
  },
  {
    id: 3,
    img: '/images/person/p8.jpg',
    name: 'Bruce Wayne',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est tenetur ducimus dolor nulla natus obcaecati',
    aosDelay: '300',
  },
  {
    id: 4,
    img: '/images/person/p3.jpg',
    name: 'Amelia',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est tenetur ducimus dolor nulla natus obcaecati',
    aosDelay: '400',
  },
  {
    id: 5,
    img: '/images/person/p2.jpg',
    name: 'Angel Wick',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est tenetur ducimus dolor nulla natus obcaecati',
    aosDelay: '500',
  },
  {
    id: 6,
    img: '/images/person/p4.jpg',
    name: 'Jennie',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est tenetur ducimus dolor nulla natus obcaecati',
    aosDelay: '600',
  },
  {
    id: 7,
    img: '/images/person/p6.jpg',
    name: 'Jimin',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est tenetur ducimus dolor nulla natus obcaecati',
    aosDelay: '700',
  },
];

function Testimonials() {
  return (
    <div className="testimonials-container">
      <div className="container">
        <div className="testimonials-header">
          <h1 className="testimonials-title">Testimonials</h1>
          <div className="separator"></div>
        </div>

        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 40,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {TestimonialsData.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <TestimonialItem
                aosDelay={testimonial.aosDelay}
                description={testimonial.description}
                img={testimonial.img}
                name={testimonial.name}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Testimonials;

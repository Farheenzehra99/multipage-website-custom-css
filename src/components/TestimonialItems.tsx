import Image from 'next/image';
import React from 'react';

interface TestimonialItemProps {
  img: string;
  name: string;
  description: string;
  aosDelay: string;
}

const TestimonialItem: React.FC<TestimonialItemProps> = ({ aosDelay, description, img, name }) => {
  return (
    <div
      data-aos="fade-down"
      data-aos-once="false"
      data-aos-delay={aosDelay}
      className="testimonial-item"
    >
      <div className="testimonial-image-container">
        <Image alt="" src={img} width={200} className="testimonial-image" height={200} />
      </div>

      <div className="testimonial-info">
        <div className="testimonial-info-content">
          <h1 className="testimonial-name">{name}</h1>
          <p className="testimonial-description">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialItem;

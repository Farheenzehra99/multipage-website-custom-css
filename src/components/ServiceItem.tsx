import Image from 'next/image';
import React from 'react';

interface ServiceItemProps {
  img: string;
  name: string;
  description: string;
  aosDelay: string;
}

const ServiceItem: React.FC<ServiceItemProps> = ({ aosDelay, description, img, name }) => {
  return (
    <div
      data-aos="fade-down"
      data-aos-once="false"
      data-aos-delay={aosDelay}
      className="service-item"
    >
      <div className="service-image-container">
        <Image alt="" src={img} width={200} className="service-image" height={200} />
      </div>

      <div className="service-info">
        <div className="service-info-content">
          <h1 className="service-title">{name}</h1>
          <p className="service-description">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceItem;

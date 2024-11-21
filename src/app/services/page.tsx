import React from 'react';
import ServiceItem from '../../components/ServiceItem';

const ServiceData = [
  {
    id: 1,
    img: '/images/expresso.jpg',
    name: 'Expresso',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est tenetur ducimus dolor nulla natus obcaecati',
    aosDelay: '100',
  },
  {
    id: 2,
    img: '/images/capachino.jpg',
    name: 'Cappicuno',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est tenetur ducimus dolor nulla natus obcaecati',
    aosDelay: '300',
  },
  {
    id: 3,
    img: '/images/americano.jpg',
    name: 'Americano',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est tenetur ducimus dolor nulla natus obcaecati',
    aosDelay: '500',
  },
  {
    id: 4,
    img: '/images/latte-coffee.jpg',
    name: 'Latte',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est tenetur ducimus dolor nulla natus obcaecati',
    aosDelay: '700',
  },
];

function Services() {
  return (
    <div className="services-container">
      <div className="container">
        <div className="services-header">
          <h1 className="services-title">Best Coffee For you</h1>
          <div className="separator"></div>
        </div>

        <div className="services-grid">
          {ServiceData.map((service) => (
            <ServiceItem
              aosDelay={service.aosDelay}
              description={service.description}
              img={service.img}
              name={service.name}
              key={service.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;

import Image from 'next/image';
import React from 'react';
import { GiFoodTruck } from 'react-icons/gi';
import { GrSecure } from 'react-icons/gr';
import { IoFastFood } from 'react-icons/io5';

function Banner() {
  return (
    <div className="banner-Background">
      <div className="banner-Container">
        <div className="container">
          <div data-aos="zoom-in" className="banner-image">
            <Image src="/images/2.png" alt="Premium Coffee" width={420} height={420} />
          </div>
          <div className="banner-Text">
            <h1 className="title" data-aos="fade-up">Premium Coffee</h1>
            <p data-aos="fade-up" className="banner-Description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem similique officia, quaerat explicabo ea quae eum. Quisquam nobis, quod facere minima veritatis aut quaerat velit sed, praesentium libero iusto nam!
            </p>
            <div className="features">
              <div className="textList">
                <div data-aos="fade-up" data-aos-delay="100" className="feature">
                  <GrSecure className={`${'icon'} ${'redIcon'}`} />
                  <span className="featureText">Premium Coffee</span>
                </div>
                <div data-aos="fade-up" data-aos-delay="300" className="feature">
                  <IoFastFood className={`${'icon'} ${'greenIcon'}`} />
                  <span className="featureText">Hot Coffee</span>
                </div>
                <div data-aos="fade-up" data-aos-delay="500" className="feature">
                  <GiFoodTruck className={`${'icon'} ${'blueIcon'}`} />
                  <span className="featureText">Cold Coffee</span>
                </div>
              </div>
              <div data-aos="slide-left" className="teaLover">
                <h1 className="teaLoverTitle">Tea Lover</h1>
                <p className="teaLoverDescription">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium architecto amet eveniet qui obcaecati distinctio explicabo laudantium assumenda sequi unde quas, provident nemo quod! Debitis dolores ex dolor provident obcaecati?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;

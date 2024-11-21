import Image from 'next/image';
import React from 'react';
import { GiFoodTruck } from 'react-icons/gi';
import { GrSecure } from 'react-icons/gr';
import { IoFastFood } from 'react-icons/io5';

function Banner() {
  return (
    <div className="bannerBackground">
      <div className="bannerContainer">
        <div className={'styles."gridContainer"'}>
          <div data-aos="zoom-in" className="imageWrapper">
            <Image src="/images/2.png" alt="Premium Coffee" width={420} height={420} className="spinningImage" />
          </div>
          <div className="content">
            <h1 className="title" data-aos="fade-up">Premium Coffee</h1>
            <p data-aos="fade-up" className="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem similique officia, quaerat explicabo ea quae eum. Quisquam nobis, quod facere minima veritatis aut quaerat velit sed, praesentium libero iusto nam!
            </p>
            <div className="features">
              <div className="featureList">
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

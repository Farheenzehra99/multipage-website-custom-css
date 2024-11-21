// HeroItem.tsx
import React from 'react';
import HeroButton from '../Buttons/HeroButton';
import { BiChevronRight } from 'react-icons/bi';
import Image from 'next/image';

interface HeroItemProps {
  label1: string;
  label2: string;
  label3: string;
  src: string;
  text1: string;
  text2: string;
}

const HeroItem: React.FC<HeroItemProps> = ({ label1, label2, label3, src, text1, text2 }) => {
  return (
    <div className="hero-item">
      <div className="hero-text">
        <h1 className="hero-title">
          {label1}
          <span className="hero-highlight">{label2}</span>
          {label3}
        </h1>
        <div className="hero-button-container">
          <HeroButton label="Visit" icon={BiChevronRight} />
        </div>
      </div>
      <div className="hero-image-container">
        <Image src={src} alt="" width={420} height={420} className="hero-image" />
        <div className="hero-badge left">{text1}</div>
        <div className="hero-badge right">{text2}</div>
      </div>
    </div>
  );
};

export default HeroItem;

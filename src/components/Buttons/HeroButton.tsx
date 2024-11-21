// HeroButton.tsx
import React from 'react';
import { IconType } from 'react-icons';

interface HeroButtonProps {
  icon: IconType;
  onClick?: () => void;
  label: string;
}

const HeroButton: React.FC<HeroButtonProps> = ({ icon: Icon, label, onClick }) => {
  return (
    <button onClick={onClick} className="hero-button">
      {label}
      {<Icon />}
    </button>
  );
};

export default HeroButton;

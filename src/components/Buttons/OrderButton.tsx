// OrderButton.tsx
import React from 'react';
import { IconType } from 'react-icons';

interface OrderButtonProps {
  icon: IconType;
  onClick?: () => void;
  label: string;
}

const OrderButton: React.FC<OrderButtonProps> = ({ icon: Icon, label, onClick }) => {
  return (
    <button onClick={onClick} className="order-button">
      {label}
      {<Icon />}
    </button>
  );
};

export default OrderButton;

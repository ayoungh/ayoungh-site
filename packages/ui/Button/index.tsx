import React from 'react'

interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode | string;
  className?: string;
}

const Button = ({ onClick = () => {}, className, children}: ButtonProps) => {
  return <button onClick={onClick} className={` cursor-pointer ${className}`}>{children}</button>;
};

export default {Button};

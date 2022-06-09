import React, { ButtonHTMLAttributes, FC, ReactNode } from 'react';
import '@rsup/styles/build/button.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const Button: FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <button className="rsup-button__container" {...props}>
      {children}
    </button>
  );
};

export default Button;

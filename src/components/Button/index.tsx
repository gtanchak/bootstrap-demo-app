import React, { FC } from "react";

const Button: FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  ...props
}) => {
  return (
    <button type='button' {...props}>
      {children}
    </button>
  );
};

export default Button;

import { FC } from "react";

const Checkbox: FC<React.InputHTMLAttributes<HTMLInputElement>> = ({
  ...props
}) => {
  return (
    <div className='form-check'>
      <input {...props} className='form-check-input' type='checkbox' />
      <label className='form-check-label'>Only even</label>
    </div>
  );
};

export default Checkbox;

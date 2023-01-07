import React, { FC } from "react";

const SearchBar: FC<React.InputHTMLAttributes<HTMLInputElement>> = ({
  ...props
}) => {
  return (
    <div className='mb-3'>
      <input
        {...props}
        type='text'
        className='form-control'
        id='exampleFormControlInput1'
        placeholder='Search Contacts'
      />
    </div>
  );
};

export default SearchBar;

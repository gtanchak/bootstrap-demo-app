import { FC } from "react";

const Loader: FC = () => {
  return (
    <div className='spinner-border' role='status'>
      <span className='visually-hidden'>Loading...</span>
    </div>
  );
};

export default Loader;

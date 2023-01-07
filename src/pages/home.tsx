import { FC } from "react";

import { useLocation, useNavigate } from "react-router-dom";
import { ModalA, ModalB } from "src/components";

import "./home.scss";

const Home: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <>
      <div className='layout'>
        <button
          data-bs-toggle='modal'
          type='button'
          className='btn btn-primary border-0 bg-btn-primary'
          data-bs-target='#modalA'
          onClick={() =>
            navigate("modalA", { state: { background: location } })
          }
        >
          Button A
        </button>
        <button
          data-bs-toggle='modal'
          type='button'
          className='btn btn-primary border-0 bg-btn-secondary'
          data-bs-target='#modalB'
          onClick={() =>
            navigate("modalB", { state: { background: location } })
          }
        >
          Button B
        </button>
      </div>
      <ModalA />
      <ModalB />
    </>
  );
};

export default Home;

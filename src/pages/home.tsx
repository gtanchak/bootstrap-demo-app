import { FC, useEffect } from "react";

import { useLocation, useNavigate } from "react-router-dom";
import { getRequest } from "src/apis/utils";
import Button from "src/components/Button";
import { useAppDispatch } from "src/hooks/useAppDispatch";

import { contactList } from "src/store/contactListSlice";

import "./home.scss";
import ModalA from "./modalA";
import ModalB from "./modalB";

const Home: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const dispatch = useAppDispatch();

  useEffect(() => {
    getRequest(171).then((res: any) => {
      dispatch(contactList(res.data));
    });
  }, [dispatch]);

  return (
    <>
      <div className='layout'>
        <Button
          className='btn btn-secondary border-0 bg-btn-primary'
          data-bs-toggle='modal'
          data-bs-target='#modalA'
          onClick={() =>
            navigate("modalA", { state: { background: location } })
          }
        >
          Button A
        </Button>
        <Button
          data-bs-toggle='modal'
          className='btn btn-secondary border-0 bg-btn-secondary'
          data-bs-target='#modalB'
          onClick={() =>
            navigate("modalB", { state: { background: location } })
          }
        >
          Button B
        </Button>
      </div>
      <ModalA />
      <ModalB />
    </>
  );
};

export default Home;

import { FC } from "react";
import { useNavigate } from "react-router-dom";
import Checkbox from "../Checkbox/Checkbox";
import SearchBar from "../SearchBar/SearchBar";
import "./ModalA.scss";
import { useModalA } from "./useModalA";

const ModalA: FC = () => {
  const navigate = useNavigate();

  const { handleChange } = useModalA();

  return (
    <div className='modal' tabIndex={-1} id='modalA'>
      <div className='modal-dialog'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h5 className='modal-title'>Modal A</h5>
            <button
              type='button'
              className='btn-close'
              data-bs-dismiss='modal'
              aria-label='Close'
              onClick={() => navigate(-1)}
            ></button>
          </div>
          <div className='modal-body'>
            <div className='action_menu'>
              <button
                type='button'
                className='btn btn-primary bg-btn-primary border-0'
              >
                All Contacts
              </button>
              <button
                type='button'
                className='btn btn-primary bg-btn-secondary border-0'
              >
                US Contacts
              </button>
              <button
                type='button'
                className='btn btn-transparent border'
                onClick={() => navigate(-1)}
              >
                Close
              </button>
            </div>
            <div>
              <SearchBar />
            </div>
          </div>
          <div className='modal-footer justify-content-start'>
            <Checkbox onChange={handleChange} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalA;

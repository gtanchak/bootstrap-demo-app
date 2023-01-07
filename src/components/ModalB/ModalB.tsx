import { FC } from "react";
import { useNavigate } from "react-router-dom";
import Checkbox from "../Checkbox/Checkbox";
import { useModalB } from "./useModalB";

const ModalB: FC = () => {
  const navigate = useNavigate();
  const { handleChange } = useModalB();

  return (
    <div className='modal' tabIndex={-1} id='modalB'>
      <div className='modal-dialog'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h5 className='modal-title'>Modal B</h5>
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
          </div>
          <div className='modal-footer justify-content-start'>
            <Checkbox onChange={handleChange} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalB;

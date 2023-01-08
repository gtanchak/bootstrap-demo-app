import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import Checkbox from "../Checkbox";
import SearchBar from "../SearchBar";
import { ModalProps } from "./type";
import "./Modal.scss";

const Modal: FC<ModalProps> = ({
  title,
  modalId,
  children,
  handleAllContacts,
  handleCheckbox,
  handleUsContacts,
}) => {
  const navigate = useNavigate();
  return (
    <div className='modal modal-lg' tabIndex={-1} id={modalId}>
      <div className='modal-dialog modal-dialog-scrollable'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h5 className='modal-title'>{title}</h5>
            <button
              type='button'
              className='btn-close'
              data-bs-dismiss='modal'
              onClick={() => navigate("/")}
            ></button>
          </div>
          <div className='modal-body'>
            <div className='action_menu'>
              <button
                type='button'
                data-bs-toggle='modal'
                data-bs-target='#modalA'
                className='btn btn-primary bg-btn-primary border-0'
                onClick={handleAllContacts}
              >
                All Contacts
              </button>
              <button
                type='button'
                data-bs-toggle='modal'
                data-bs-target='#modalB'
                className='btn btn-primary bg-btn-secondary border-0'
                onClick={handleUsContacts}
              >
                US Contacts
              </button>
              <button
                type='button'
                className='btn btn-transparent border'
                data-bs-dismiss='modal'
                onClick={() => navigate("/")}
              >
                Close
              </button>
            </div>
            <div>
              <SearchBar />
            </div>
            {children}
          </div>
          <div className='modal-footer justify-content-start'>
            <Checkbox onChange={handleCheckbox} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;

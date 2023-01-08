import { FC, useEffect, useState } from "react";
import { Modal, Table } from "src/components";
import { useAppSelector } from "src/hooks/useAppSelector";
import useModal from "./useModal";

interface ModalBProps {
  contacts?: any;
}
const ModalB: FC<ModalBProps> = () => {
  const [filterContact, setFilterContact] = useState();

  const { isSuccess, contacts } = useAppSelector((state) => state.contactList);

  const { handleAllContacts, handleUsContacts } = useModal({
    contacts,
    setFilterContact,
  });

  useEffect(() => {
    isSuccess &&
      setFilterContact(
        contacts.contacts_ids
          .map((item: number) => contacts.contacts[item])
          .filter((item: any) => item.country.iso === "US")
          .map((item: any) => {
            return {
              id: item.id,
              first_name: item.first_name,
              last_name: item.last_name,
              CountryId: item.country.id,
              phoneNo: item.phone_number,
              email: item.email,
            };
          })
      );
  }, [contacts, isSuccess]);

  return (
    <>
      <Modal
        title='US Contacts'
        modalId='modalB'
        handleAllContacts={handleAllContacts}
      >
        <Table filterContact={filterContact} modalId='detailsModalB' />
      </Modal>
      <div className='modal fade' id='detailsModalB' tabIndex={-1}>
        <div className='modal-dialog modal-dialog-centered'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h1 className='modal-title fs-5' id='exampleModalToggleLabel2'>
                Modal B
              </h1>
              <button
                type='button'
                className='btn-close'
                data-bs-target='#modalB'
                aria-label='Close'
              ></button>
            </div>
            <div className='modal-body'>
              Hide this modal and show the first with the button below.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalB;

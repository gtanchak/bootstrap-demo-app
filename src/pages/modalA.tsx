import { FC, useEffect, useState } from "react";
import { Modal, Table } from "src/components";
import { useAppSelector } from "src/hooks/useAppSelector";
import useModal from "./useModal";

interface ModalAProps {
  contacts?: any;
}
const ModalA: FC<ModalAProps> = () => {
  const { contacts, isSuccess } = useAppSelector((state) => state.contactList);
  const [filterContact, setFilterContact] = useState();

  const { handleUsContacts } = useModal({
    contacts,
    setFilterContact,
  });

  useEffect(() => {
    isSuccess &&
      setFilterContact(
        contacts.contacts_ids
          .map((item: number) => contacts.contacts[item])
          .map((item: any) => {
            return {
              id: item.id,
              first_name: item.first_name,
              last_name: item.last_name,
              CountryId: item.country.id,
              phoneNo: item.phone_number,
            };
          })
      );
  }, [contacts, isSuccess]);

  return (
    <>
      <Modal
        title='All Contacts'
        modalId='modalA'
        handleUsContacts={handleUsContacts}
      >
        <Table filterContact={filterContact} modalId='detailsModalA' />
      </Modal>
      <div className='modal fade' id='detailsModalA' tabIndex={-1}>
        <div className='modal-dialog modal-dialog-centered'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h1 className='modal-title fs-5' id='exampleModalToggleLabel2'>
                Modal A
              </h1>
              <button
                type='button'
                className='btn-close'
                data-bs-target='#modalA'
                data-bs-toggle='modal'
              ></button>
            </div>
            <div className='modal-body'></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalA;

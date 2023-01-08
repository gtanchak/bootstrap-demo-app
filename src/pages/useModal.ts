import { useNavigate } from "react-router-dom";

export interface ModalHookType {
  contacts?: any;
  setFilterContact: React.Dispatch<React.SetStateAction<undefined>>;
}

const useModal = ({ contacts, setFilterContact }: ModalHookType) => {
  const navigate = useNavigate();

  const handleAllContacts = () => {
    navigate("/modalA");
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
  };

  const handleUsContacts = () => {
    navigate("/modalB");
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
          };
        })
    );
  };

  return { handleAllContacts, handleUsContacts };
};

export default useModal;

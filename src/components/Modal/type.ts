export interface ModalProps {
  title: string;
  modalId: string;
  children?: React.ReactNode;
  handleCheckbox?: () => void;
  handleAllContacts?: () => void;
  handleUsContacts?: () => void;
}

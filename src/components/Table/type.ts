export interface TableProps {
  filterContact: any;
  modalId: string;
}

export interface FilterContact {
  id: number;
  first_name: string;
  last_name: string;
  CountryId: number;
  phoneNo: number;
  email: string;
}

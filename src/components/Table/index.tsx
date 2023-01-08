import { FC } from "react";
import { useAppSelector } from "src/hooks/useAppSelector";

import { FilterContact, TableProps } from "./type";
import "./Table.scss";
import { Loader } from "..";

const Table: FC<TableProps> = ({ filterContact, modalId }) => {
  const { isSuccess } = useAppSelector((state) => state.contactList);

  return (
    <>
      <table className='table'>
        <thead>
          <tr>
            <th scope='col'>ID</th>
            <th scope='col'>Country ID</th>
            <th scope='col'>First Name</th>
            <th scope='col'>Last Name</th>
            <th scope='col'>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {!isSuccess ? (
            <tr>
              <td className='loader' colSpan={5}>
                <Loader />
              </td>
            </tr>
          ) : (
            filterContact &&
            filterContact.map((item: FilterContact) => (
              <tr key={item.id} onClick={() => ""}>
                <td>{item.id}</td>
                <td>{item.CountryId}</td>
                <td>{item.first_name || "-"}</td>
                <td>{item.last_name || "-"}</td>
                <td>{item.phoneNo}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </>
  );
};

export default Table;

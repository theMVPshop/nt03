import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import { Table } from 'react-bootstrap';
import { contacts } from '../DummyData';

const AddressBook = () => {
  return (
    <div className='table-container'>
      <Table className='table' bordered hover>
        <thead>
          <th></th>
          <th>Office Name</th>
          <th>Address</th>
          <th>Phone Number</th>
          <th className='contacted'>Contacted?</th>
        </thead>
        <tbody>
          {contacts.map((contact, index) => (
            <tr key={index}>
              <td>
                <DeleteIcon />
              </td>
              <td>{contact['officeName']}</td>
              <td>{contact['address']}</td>
              <td>{contact['phoneNumber']}</td>
              <td>
                <input type='checkbox' />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default AddressBook;

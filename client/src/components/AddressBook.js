import React from 'react';
import { Table } from 'react-bootstrap';

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
          <th className='notes'>Notes</th>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Dental Office</td>
            <td>787 Dental Avenue, Austin TX</td>
            <td>(817)-555-5555</td>
            <td>
              <input type='checkbox' />
            </td>
            <td>
              {' '}
              <input type='text' className='form-control' />
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Dental Office</td>
            <td>787 Dental Avenue, Austin TX</td>
            <td>(817)-555-5555</td>
            <td>
              <input type='checkbox' />
            </td>
            <td>
              {' '}
              <input type='text' className='form-control' />
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>Dental Office</td>
            <td>787 Dental Avenue, Austin TX</td>
            <td>(817)-555-5555</td>
            <td>
              <input type='checkbox' />
            </td>
            <td>
              {' '}
              <input type='text' className='form-control' />
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default AddressBook;

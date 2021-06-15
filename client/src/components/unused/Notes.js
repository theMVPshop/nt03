import React, { useState } from 'react';
import produce from 'immer';
import _uniqueId from 'lodash/uniqueId';

const Notes = (props) => props.data.map((note) => <div>{note.text}</div>);

export default () => {
  const [id] = useState(_uniqueId('prefix-'));
  const initialData = [{ text: '' }];
  const [data, setData] = useState(initialData);

  const handleClick = () => {
    const text = document.querySelector('.noteinput').value.trim();
    if (text) {
      const nextState = produce(data, (draftState) => {
        draftState.push({ text });
      });
      document.querySelector('.noteinput').value = '';
      setData(nextState);
    }
  };

  return (
    <>
      <input
        id={id}
        className='note-input noteinput'
        type='text'
        placeholder='Enter a new note'
      />

      <button className='add-note' onClick={() => handleClick()}>
        Add note
      </button>

      <Notes data={data} />
    </>
  );
};

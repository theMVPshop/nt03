import React from 'react';

function ResumePaper(props) {
  return (
    <div size='A4' className='page'>
      <h1>{props.name}</h1>
    </div>
  );
}

export default ResumePaper;

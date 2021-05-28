import React from 'react';

function ResumePaper(props) {
  return (
    <div className='right'>
      <div size='A4' className='page'>
        <h1>{props.name}</h1>
        <p>{props.address}</p>
        <p>{props.city}</p>
        <p>{props.state}</p>
        <p>{props.zip}</p>
        <p>{props.phone}</p>
        <p>{props.email}</p>
        <p>{props.summary}</p>
        <p>{props.company}</p>
        <p>{props.location}</p>
        <p>{props.position}</p>
        <p>{props.start}</p>
        <p>{props.end}</p>
        <p>{props.proData}</p>
      </div>
    </div>
  );
}

export default ResumePaper;

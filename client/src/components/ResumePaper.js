import React from 'react';

function ResumePaper(props) {
  // const proData = props.proData;
  return (
    <div className='right'>
      <div size='A4' className='page'>
        {/* HEADER */}
        <h1>{props.name}</h1>
        <p>{props.address}</p>
        <p>{props.city}</p>
        <p>{props.state}</p>
        <p>{props.zip}</p>
        <p>{props.phone}</p>
        <p>{props.email}</p>
        <p>{props.summary}</p>
        {/* PROFESSIONAL */}
        <p>{props.company}</p>
        <p>{props.location}</p>
        <p>{props.position}</p>
        <p>{props.start}</p>
        <p>{props.end}</p>
        {/* <p>
          {props.proData.map((index) => (
            <p key={index}>{pro.company}</p>
          ))}
        </p> */}
        {/* EDUCATION */}
        <p>{props.institute}</p>
        <p>{props.instLocation}</p>
        <p>{props.major}</p>
        <p>{props.graduation}</p>
        <p>{props.info}</p>
        {/* ADDITIONAL SKILLS */}
        <p>{props.skill1}</p>
        <p>{props.skill2}</p>
        <p>{props.skill3}</p>
        <p>{props.skill4}</p>
        <p>{props.skill5}</p>
      </div>
    </div>
  );
}

export default ResumePaper;

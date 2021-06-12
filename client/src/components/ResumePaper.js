import React from 'react';
import Pdf from 'react-to-pdf';
// import { SavePDF } from './SavePDF';

const ref = React.createRef();

function ResumePaper(props) {
  console.log(props.formData);
  console.log(props.isChecked);
  //If there is no data, the Title of the section will not be displayed
  let proTitle;
  if (props.proData.length < 1) {
    proTitle = '';
  } else {
    proTitle = (
      <div>
        <h3 className='resume-titles'>Professional Experience</h3>
        <hr className='divider' />
      </div>
    );
  }

  let eduTitle;
  if (props.eduData.length === 0) {
    eduTitle = '';
  } else {
    eduTitle = (
      <div>
        <h3 className='resume-titles'>Education</h3>
        <hr className='divider' />
      </div>
    );
  }

  let skillsTitle;
  if (props.addSkillsData.length === 0) {
    skillsTitle = '';
  } else {
    skillsTitle = (
      <div>
        <h3 className='resume-titles'>Additional Skills</h3>
        <hr className='divider' />
      </div>
    );
  }

  let headerDivider;
  if (props.name.length > 0) {
    headerDivider = <hr className='resume-divider' />;
  } else {
    headerDivider = '';
  }

  return (
    <div className='right'>
      <Pdf targetRef={ref} filename='resume.pdf'>
        {({ toPdf }) => <button onClick={toPdf}>Save Resume</button>}
      </Pdf>
      <div size='A4' className='page' ref={ref}>
        <div className='preview-container'>
          {/* HEADER */}
          <div className='resume-header'>
            <div className='content-header'>
              <h1 className='header-h1'>{props.name}</h1>
              <p>
                {props.address} <br />
                {props.city} {props.state} {props.zip} <br />
                {props.phone} <br />
                {props.email} <br />
              </p>
              <p>{props.summary}</p>

              {headerDivider}
            </div>
          </div>

          <div className='content'>
            {/* PROFESSIONAL */}
            <div className='work-exp'>
              {proTitle}
              {/* This maps over the proData array */}
              <div className='work-content'>
                <div className='work-single'>
                  <p>
                    {props.company}
                    <br />
                    {props.location}
                    <br />
                    {props.position} <br />
                    {props.start === '' ? '' : `${props.start} -`}
                    {props.end} <br />
                    {props.desc1 === '' ? '' : <li>{props.desc1}</li>}
                    {props.desc2 === '' ? '' : <li>{props.desc2}</li>}
                    {props.desc3 === '' ? '' : <li>{props.desc3}</li>}
                  </p>
                  <p>
                    {props.company2}
                    <br />
                    {props.location2}
                    <br />
                    {props.position2} <br />
                    {props.start2 === '' ? '' : `${props.start2} -`}{' '}
                    {props.end2} <br />
                    {props.desc11 === '' ? '' : <li>{props.desc11}</li>}
                    {props.desc22 === '' ? '' : <li>{props.desc22}</li>}
                    {props.desc33 === '' ? '' : <li>{props.desc33}</li>}
                  </p>
                </div>

                {/* {props.proData.map((pro) => (
                  <div>
                    <p className='work-single' key={pro.id}>
                      <strong>{pro.company}</strong>
                      <br />
                      {pro.location}
                      <br />
                      {pro.position} <br />
                      {pro.start} - {pro.end}
                      {pro.desc1 === '' ? '' : <li>{pro.desc1}</li>}
                      {pro.desc2 === '' ? '' : <li>{pro.desc2}</li>}
                      {pro.desc3 === '' ? '' : <li>{pro.desc3}</li>}
                    </p>
                  </div>
                ))} */}
              </div>
            </div>

            {/* EDUCATION */}
            <div className='education'>
              {eduTitle}

              <div className='edu-content'>
                {/* This maps over the eduData array */}
                {props.eduData.map((edu, index) => (
                  <p className='edu-single' key={index}>
                    <strong>{edu.institute}</strong>
                    <br />
                    {edu.instLocation}
                    <br />
                    {edu.major}
                    <br />
                    {edu.graduation}
                    <br />
                    {edu.info}
                  </p>
                ))}
              </div>
            </div>

            {/* ADDITIONAL SKILLS */}
            <div className='additional'>
              {skillsTitle}
              <div className='additional-content'>
                {props.addSkillsData.map((add) => (
                  <p className='additional-single' key={add.id}>
                    <li>{add.skill1}</li>
                  </p>
                ))}
                {/* {props.formData.map((skill, index) => (
                  <p key={index}>
                    {props.isChecked === false ? '' : <li>{skill.name}</li>}
                  </p>
                ))} */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResumePaper;

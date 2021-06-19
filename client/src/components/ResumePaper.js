import React from 'react';
import Pdf from 'react-to-pdf';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import Avatar from '@material-ui/core/Avatar';
import Tooltip from '@material-ui/core/Tooltip';
import { green } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  green: {
    color: '#fff',
    backgroundColor: green[500],
    margin: 10,
  },
}));

const ref = React.createRef();

function ResumePaper(props) {
  const classes = useStyles();
  // Work Experience Title
  let proTitle;
  if (props.company.length < 1) {
    proTitle = '';
  } else {
    proTitle = (
      <div>
        <h3 className='resume-titles'>Professional Experience</h3>
        <hr className='divider' />
      </div>
    );
  }

  // Education Title
  let eduTitle;
  if (props.institute.length < 1) {
    eduTitle = '';
  } else {
    eduTitle = (
      <div>
        <h3 className='resume-titles'>Education</h3>
        <hr className='divider' />
      </div>
    );
  }

  // Skills Title
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
        {({ toPdf }) => (
          <Tooltip title='Save to PDF' placement='right'>
            <Avatar className={classes.green}>
              <PictureAsPdfIcon onClick={toPdf} />
            </Avatar>
          </Tooltip>
        )}
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
                  <p className='work-one'>
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
                  <p className='work-one'>
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
                  <p className='work-one'>
                    {props.company3}
                    <br />
                    {props.location3}
                    <br />
                    {props.position3} <br />
                    {props.start3 === '' ? '' : `${props.start3} -`}
                    {props.end3} <br />
                    {props.desc111 === '' ? '' : <li>{props.desc111}</li>}
                    {props.desc222 === '' ? '' : <li>{props.desc222}</li>}
                    {props.desc333 === '' ? '' : <li>{props.desc333}</li>}
                  </p>
                </div>
              </div>
            </div>

            {/* EDUCATION */}
            <div className='education'>
              {eduTitle}

              <div className='edu-content'>
                {/* EDU 1 */}
                <p className='edu-single'>
                  <strong>{props.institute}</strong>
                  <br />
                  {props.instLocation}
                  <br />
                  {props.major}
                  <br />
                  {props.graduation}
                  <br />
                  {props.info}
                </p>
                {/* EDU 2 */}
                <p className='edu-single'>
                  <strong>{props.institute2}</strong>
                  <br />
                  {props.instLocation2}
                  <br />
                  {props.major2}
                  <br />
                  {props.graduation2}
                  <br />
                  {props.info2}
                </p>
                {/* EDU 3 */}
                <p className='edu-single'>
                  <strong>{props.institute3}</strong>
                  <br />
                  {props.instLocation3}
                  <br />
                  {props.major3}
                  <br />
                  {props.graduation3}
                  <br />
                  {props.info3}
                </p>
              </div>
            </div>

            {/* ADDITIONAL SKILLS */}
            <div className='additional'>
              {skillsTitle}

              <div>
                {props.skills.map((skill, id) => (
                  <p key={id}>
                    {skill.select === false ? '' : <li>{skill.name}</li>}
                  </p>
                ))}
                <div className='additional-content'>
                  {props.addSkillsData.map((add) => (
                    <p className='additional-single' key={add.id}>
                      <li>{add.skill1}</li>
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResumePaper;

import { useState } from 'react';
import { Accordion, Card } from 'react-bootstrap';
import { BsChevronUp, BsChevronDown, BsBookmark, BsBookmarkFill } from 'react-icons/bs';

const JobCard = (props) => { 
  console.log(props.user) 
  const [collapse, setCollapse] = useState(true);
  const [jobToSave, setJobToSave] = useState({});
  const [jobSaved, setJobSaved] = useState(false)

  const collapseCard = () => {
    setCollapse(!collapse);
  }

  const saveJobPosting = () => {
    if (jobSaved) {
      return
  }

    setJobToSave({ 
      ...jobToSave,
      url: props.link,
      user_id: props.user.user_id
    })

    fetch('/jobs', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(jobToSave)
    })
    .then(response => {
      if (response.ok) {
          setJobSaved(true)
      } else {
          alert('There was an error and job posting was not saved');
      }
  })
  }

  return (
    <div className='job-card-container'>
      <Accordion>
        <Card>
          <Accordion.Toggle 
            as={Card.Header} 
            eventKey='0' 
            className='job-card-header'
            onClick={collapseCard}
          >
            <div className='bookmark-header'>
              <BsBookmark onClick={saveJobPosting} />
              <div className='header-content'>
                <h2>{props.title}</h2>
                <h3>{props.company}</h3>
                <h4>{props.location}</h4>
              </div>
            </div>
            <div>
              {collapse ? <BsChevronDown/> : <BsChevronUp/>}
            </div>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey='0'>
            <Card.Body>
              <p className='card-body'>{props.description}</p>
              <a href={props.link} target='blank' className='btn sm-btn'>MORE INFO</a>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  )
}

export default JobCard;
import { useState } from 'react';
import { Accordion, Card } from 'react-bootstrap';
import { BsChevronUp, BsChevronDown, BsBookmark, BsBookmarkFill } from 'react-icons/bs';

const JobCard = (props) => { 
  const [collapse, setCollapse] = useState(true);
  const [jobSaved, setJobSaved] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

  const collapseCard = () => {
    setCollapse(!collapse);
  }

  const toggleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  }

  const saveJobPosting = () => {
    if (jobSaved) {
      return
    }

    toggleBookmark();

    let userJob = {
      user_id: 1,
      job: {
      company: props.company,
      position: props.title,
      location: props.location,
      url: props.link,
    }}

    fetch('/jobs/jobs', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(userJob)
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
        <div className='bookmark-header'>
          {isBookmarked 
            ? <BsBookmarkFill onClick={toggleBookmark} />
            : <BsBookmark onClick={saveJobPosting} />
          }
        </div>
          <Accordion.Toggle 
            as={Card.Header} 
            eventKey='0' 
            className='job-card-header'
            onClick={collapseCard}
          >
              <div className='header-content'>
                <h2>{props.title}</h2>
                <h3>{props.company}</h3>
                <h4>{props.location}</h4>
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
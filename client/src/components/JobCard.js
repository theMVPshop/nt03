import { useState } from 'react';
import { Accordion, Card } from 'react-bootstrap';
import { BsChevronUp, BsChevronDown } from 'react-icons/bs';

const JobCard = (props) => {
  const [collapse, setCollapse] = useState(true);

  const collapseCard = () => {
    setCollapse(!collapse);
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
            <div>
              <h2>{props.title}</h2>
              <h3>{props.company}</h3>
              <h4>{props.location}</h4>
            </div>
            <div>
              {collapse ? <BsChevronDown/> : <BsChevronUp/>}
            </div>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey='0'>
            <Card.Body className='card-body'>
              {props.description}
              <br/>
              <a href={props.link} target='blank' className='btn sm-btn'>MORE INFO</a>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  )
}

export default JobCard;
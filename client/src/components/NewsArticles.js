import React from 'react';
import { Carousel } from 'react-bootstrap';
import dentalOffice from '../images/dental-office.jpeg';

// id='divRss'

const NewsArticles = (props) => {
  
  return (
    <div className='news-container'>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={dentalOffice}
            alt="dental office"
          />
          <Carousel.Caption>
            <h3>News Headline</h3>
            <p>News article descrption...</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={dentalOffice}
            alt="dental office"
          />
          <Carousel.Caption>
            <h3>Another News Headline</h3>
            <p>Another news article descrption...</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )

}

export default NewsArticles;
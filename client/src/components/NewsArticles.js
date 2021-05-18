import React from 'react';
import { Carousel } from 'react-bootstrap';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import dentalOffice from '../images/dental-office.jpeg';

// id='divRss'

const NewsArticles = (props) => {
  
  return (
    <a href='https://newsarticlelink.com' target='blank'>
      <div className='news-container'>
        <Carousel prevLabel={BsChevronLeft} nextLabel={BsChevronRight} interval={null}>
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
    </a>
  )

}

export default NewsArticles;
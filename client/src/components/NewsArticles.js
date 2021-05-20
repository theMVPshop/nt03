import React from 'react';
import { Carousel } from 'react-bootstrap';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import dentalOffice from '../images/dental-office.jpeg';

// id='divRss'

const NewsArticles = (props) => {
  
  return (
    <div className='carousel-container'>
      <Carousel prevLabel={BsChevronLeft} nextLabel={BsChevronRight} interval={null} indicators={false}>
        <Carousel.Item>
          <a href='https://newsarticlelink.com' target='blank'>
            <img
              className="d-block w-100"
              src={dentalOffice}
              alt="dental office"
            />
            <Carousel.Caption>
              <h3>News Headline 1</h3>
              <p>News article descrption...</p>
            </Carousel.Caption>
          </a>
        </Carousel.Item>
        <Carousel.Item>
          <a href='https://newsarticlelink.com' target='blank'>
            <img
              className="d-block w-100"
              src={dentalOffice}
              alt="dental office"
            />
            <Carousel.Caption>
              <h3>News Headline 2</h3>
              <p>News article descrption...</p>
            </Carousel.Caption>
          </a>
        </Carousel.Item>
        <Carousel.Item>
          <a href='https://newsarticlelink.com' target='blank'>
            <img
              className="d-block w-100"
              src={dentalOffice}
              alt="dental office"
            />
            <Carousel.Caption>
              <h3>News Headline 3</h3>
              <p>News article descrption...</p>
            </Carousel.Caption>
          </a>
        </Carousel.Item>
        <Carousel.Item>
          <a href='https://newsarticlelink.com' target='blank'>
            <img
              className="d-block w-100"
              src={dentalOffice}
              alt="dental office"
            />
            <Carousel.Caption>
              <h3>News Headline 4</h3>
              <p>News article descrption...</p>
            </Carousel.Caption>
          </a>
        </Carousel.Item>
        <Carousel.Item>
          <a href='https://newsarticlelink.com' target='blank'>
            <img
              className="d-block w-100"
              src={dentalOffice}
              alt="dental office"
            />
            <Carousel.Caption>
              <h3>News Headline 5</h3>
              <p>News article descrption...</p>
            </Carousel.Caption>
          </a>
        </Carousel.Item>
        <Carousel.Item>
          <a href='https://newsarticlelink.com' target='blank'>
            <img
              className="d-block w-100"
              src={dentalOffice}
              alt="dental office"
            />
            <Carousel.Caption>
              <h3>News Headline 6</h3>
              <p>News article descrption...</p>
            </Carousel.Caption>
          </a>
        </Carousel.Item>
        <Carousel.Item>
          <a href='https://newsarticlelink.com' target='blank'>
            <img
              className="d-block w-100"
              src={dentalOffice}
              alt="dental office"
            />
            <Carousel.Caption>
              <h3>News Headline 7</h3>
              <p>News article descrption...</p>
            </Carousel.Caption>
          </a>
        </Carousel.Item>
        <Carousel.Item>
          <a href='https://newsarticlelink.com' target='blank'>
            <img
              className="d-block w-100"
              src={dentalOffice}
              alt="dental office"
            />
            <Carousel.Caption>
              <h3>News Headline 8</h3>
              <p>News article descrption...</p>
            </Carousel.Caption>
          </a>
        </Carousel.Item>
        <Carousel.Item>
          <a href='https://newsarticlelink.com' target='blank'>
            <img
              className="d-block w-100"
              src={dentalOffice}
              alt="dental office"
            />
            <Carousel.Caption>
              <h3>News Headline 9</h3>
              <p>News article descrption...</p>
            </Carousel.Caption>
          </a>
        </Carousel.Item>
        <Carousel.Item>
          <a href='https://newsarticlelink.com' target='blank'>
            <img
              className="d-block w-100"
              src={dentalOffice}
              alt="dental office"
            />
            <Carousel.Caption>
              <h3>News Headline 10</h3>
              <p>News article descrption...</p>
            </Carousel.Caption>
          </a>
        </Carousel.Item>
      </Carousel>
    </div>
  )

}

export default NewsArticles;
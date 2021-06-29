import React from 'react';

const NewsArticles = (props) => {
  
  return (
    <section className="carousel" aria-label="Gallery">
      <ol className="carousel__viewport">
        <li id="carousel__slide1"
            className="carousel__slide news-article">
          <a className='news-link' href='https://newsarticlelink.com' target='blank'>
            <div>
              <h4 className='news-title'>News Headline</h4>
              <p className='news-description'>News article descrption...</p>
            </div>
          </a>
            <div className="carousel__snapper">
              <a href="#carousel__slide4"
                className="carousel__prev">Go to last slide</a>
              <a href="#carousel__slide2"
                className="carousel__next">Go to next slide</a>
            </div>
        </li>
        <li id="carousel__slide2"
            className="carousel__slide news-article">
          <a className='news-link' href='https://newsarticlelink.com' target='blank'>
            <div>
              <h4 className='news-title'>News Headline</h4>
              <p className='news-description'>News article descrption...</p>
            </div>
          </a>
          <div className="carousel__snapper"></div>
          <a href="#carousel__slide1"
            className="carousel__prev">Go to previous slide</a>
          <a href="#carousel__slide3"
            className="carousel__next">Go to next slide</a>
        </li>
        <li id="carousel__slide3"
            className="carousel__slide news-article">
          <a className='news-link' href='https://newsarticlelink.com' target='blank'>
            <div>
              <h4 className='news-title'>News Headline</h4>
              <p className='news-description'>News article descrption...</p>
            </div>
          </a>
          <div className="carousel__snapper"></div>
          <a href="#carousel__slide2"
            className="carousel__prev">Go to previous slide</a>
          <a href="#carousel__slide4"
            className="carousel__next">Go to next slide</a>
        </li>
        <li id="carousel__slide4"
            className="carousel__slide news-article">
          <a className='news-link' href='https://newsarticlelink.com' target='blank'>
            <div>
              <h4 className='news-title'>News Headline</h4>
              <p className='news-description'>News article descrption...</p>
            </div>
          </a>
          <div className="carousel__snapper"></div>
          <a href="#carousel__slide3"
            className="carousel__prev">Go to previous slide</a>
          <a href="#carousel__slide5"
            className="carousel__next">Go to next slide</a>
        </li>
        <li id="carousel__slide5"
            className="carousel__slide news-article">
          <a className='news-link' href='https://newsarticlelink.com' target='blank'>
            <div>
              <h4 className='news-title'>News Headline</h4>
              <p className='news-description'>News article descrption...</p>
            </div>
          </a>
          <div className="carousel__snapper"></div>
          <a href="#carousel__slide4"
            className="carousel__prev">Go to previous slide</a>
          <a href="#carousel__slide6"
            className="carousel__next">Go to next slide</a>
        </li>
        <li id="carousel__slide6"
            className="carousel__slide news-article">
          <a className='news-link' href='https://newsarticlelink.com' target='blank'>
            <div>
              <h4 className='news-title'>News Headline</h4>
              <p className='news-description'>News article descrption...</p>
            </div>
          </a>
          <div className="carousel__snapper"></div>
          <a href="#carousel__slide5"
            className="carousel__prev">Go to previous slide</a>
          <a href="#carousel__slide7"
            className="carousel__next">Go to next slide</a>
        </li>
        <li id="carousel__slide7"
            className="carousel__slide news-article">
          <a className='news-link' href='https://newsarticlelink.com' target='blank'>
            <div>
              <h4 className='news-title'>News Headline</h4>
              <p className='news-description'>News article descrption...</p>
            </div>
          </a>
          <div className="carousel__snapper"></div>
          <a href="#carousel__slide6"
            className="carousel__prev">Go to previous slide</a>
          <a href="#carousel__slide8"
            className="carousel__next">Go to next slide</a>
        </li>
        <li id="carousel__slide8"
            className="carousel__slide news-article">
          <a className='news-link' href='https://newsarticlelink.com' target='blank'>
            <div>
              <h4 className='news-title'>News Headline</h4>
              <p className='news-description'>News article descrption...</p>
            </div>
          </a>
          <div className="carousel__snapper"></div>
          <a href="#carousel__slide7"
            className="carousel__prev">Go to previous slide</a>
          <a href="#carousel__slide9"
            className="carousel__next">Go to next slide</a>
        </li>
        <li id="carousel__slide9"
            className="carousel__slide news-article">
          <a className='news-link' href='https://newsarticlelink.com' target='blank'>
            <div>
              <h4 className='news-title'>News Headline</h4>
              <p className='news-description'>News article descrption...</p>
            </div>
          </a>
          <div className="carousel__snapper"></div>
          <a href="#carousel__slide8"
            className="carousel__prev">Go to previous slide</a>
          <a href="#carousel__slide10"
            className="carousel__next">Go to next slide</a>
        </li>
        <li id="carousel__slide10"
            className="carousel__slide news-article">
          <a className='news-link' href='https://newsarticlelink.com' target='blank'>
            <div>
              <h4 className='news-title'>News Headline</h4>
              <p className='news-description'>News article descrption...</p>
            </div>
          </a>
          <div className="carousel__snapper"></div>
          <a href="#carousel__slide9"
            className="carousel__prev">Go to previous slide</a>
          <a href="#carousel__slide1"
            className="carousel__next">Go to first slide</a>
        </li>
      </ol>
  </section>
  )

}

export default NewsArticles;
import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const fadeImages  = [
  {
    url: 'https://d1z88p83zuviay.cloudfront.net/BannerImages/30c36f71-c01f-41eb-bbbb-a56a1f438c39_1320x376.jpg',
    caption: 'Slide 1'
  },
  {
    url: 'https://d1z88p83zuviay.cloudfront.net/BannerImages/fdcaf9c5-e607-40db-9ad7-e4373da72fad_1320x376.jpg',
    caption: 'Slide 2'
  },
  {
    url: 'https://d1z88p83zuviay.cloudfront.net/BannerImages/11092523-5dc0-417c-926f-c34ac29006b7_1320x376.jpg',
    caption: 'Slide 3'
  },
];

const Slideshow = () => {
    return (
      <div className="slide-container" style={{marginTop : "10px"}}>
        <Fade>
          {fadeImages.map((fadeImage, index) => (
            <div className="each-fade" key={index}>
              <div className="image-container">
                <img src={fadeImage.url} style={{borderRadius:"10px"}} />
              </div>
              {/* <h2>{fadeImage.caption}</h2> */}
            </div>
          ))}
        </Fade>
      </div>
    )
  }

export default Slideshow 
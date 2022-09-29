import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const fadeImages  = [
  {
    url: 'https://www.naturesbasket.co.in/Images/homepageblogbanner/NB_paneerBlog_banner.jpg',
    caption: 'Slide 1'
  },
  {
    url: 'https://www.naturesbasket.co.in/Images/homepageblogbanner/NB_pastaBlog_banner.jpg',
    caption: 'Slide 2'
  },
  {
    url: 'https://www.naturesbasket.co.in/Images/homepageblogbanner/NB_1320x355-blog2.jpg',
    caption: 'Slide 3'
  },
];

const Slideshow2 = () => {
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

export default Slideshow2
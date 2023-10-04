import React from 'react'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import ProductSlide from '../Productslide/ProductSlide';

function Home() {

    const slideImages = [
        {
          url:  'https://images-eu.ssl-images-amazon.com/images/G/31/img22/wearables/BAU_GW/Tall_Hero_3000X1200_BAU._CB596910925_.jpg',
          
        },
        {
          url: 'https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/Shreyansh/BAU/Unrexc/D70978891_INWLD_BAU_Unrec_Uber_PC_Hero_3000x1200._CB594707876_.jpg'
        },
        {
          url: 'https://images-eu.ssl-images-amazon.com/images/G/31/img22/Toys/GW/GW-Hero-PC_BBAug23_Soft-toys_with-Apay_Lifestyle_2x._CB597740150_.jpg'
        },
      ];
      
      const divStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundSize: 'cover',
        height: '500px'
      }

    return (
        <div className="container">
             <div className="slide-container">
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div key={index}>
              <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
              </div>
            </div>
          ))} 
        </Slide>
      </div>
      <ProductSlide/>
        </div>
    )
}

export default Home
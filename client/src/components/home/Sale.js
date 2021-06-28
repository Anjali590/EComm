import React from 'react';
import { Carousel } from 'antd';
import img1 from '../../images/1.jpg';
import img2 from '../../images/2.jpg';
import img3 from '../../images/3.jpg';
import img4 from '../../images/4.jpg';




const contentStyle = {
  height:'370px',
  width:'100%',
  padding:'2%'
  
};

const Sale = () =>{
return(
  <>
  <Carousel autoplay>
    <div>
      <img src={img1} alt="Banner" style={contentStyle}/>
    </div>
    <div>
      <img src={img2} alt="Banner" style={contentStyle}/>
    </div>
    <div>
      <img src={img3} alt="Banner" style={contentStyle}/>
    </div>
    <div>
      <img src={img4} alt="Banner" style={contentStyle}/>
    </div>
    
  </Carousel>
  </>
);
};
export default Sale;

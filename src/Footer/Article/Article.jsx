
import React from 'react';
import './Article.scss'; 
import Button from '../../ReusableComponents/ReusableComponents';


const Article = () => {
  return (
<div className="footerArticle">
  <div className="containerArticle">
    <div className="backgroundLeft"></div>
    <div className="backgroundRight"></div>
    <div className="textOverlay">
      <div className="textOverlay--description">
      <h2>Start Your Real Estate Journey Today</h2>
      <p>Your dream property is just a click away. Whether you're looking for a new home, a strategic investment, or expert real estate advice, Estatein is here to assist you every step of the way. Take the first step towards your real estate goals and explore our available properties or get in touch with our team for personalized assistance.</p>
      </div>
      <div className="buttonArticle">
      <Button text="Explore Properties" onClick={() => alert('Small')} />
      </div>
    </div>
  </div>
</div>

  );
}

export default Article;
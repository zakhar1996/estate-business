import React from "react";
import "@/components/modules/MainPage/Footer/Article/Article.scss";
import Button from "@/components/Elements/Button/Button";

const Article = () => {
  return (
    <div className="footerArticle">
      <div className="containerArticle">
        <div className="backgroundLeft">
          <img src="/images/FooterbackgroundLeft.png" alt="" />
        </div>

        <div className="backgroundRight">
          <img src="/images/FooterbackgroundRight.png" alt="" />
        </div>

        <div className="textOverlay">
          <div className="textOverlay--description">
            <h2>Start Your Real Estate Journey Today</h2>
            <p>
              Your dream property is just a click away. Whether you're looking
              for a new home, a strategic investment, or expert real estate
              advice, Estatein is here to assist you every step of the way. Take
              the first step towards your real estate goals and explore our
              available properties or get in touch with our team for
              personalized assistance.
            </p>
          </div>
          <div className="buttonArticle">
            <Button type="secondary" fullWidth={true}>Explore Properties</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;

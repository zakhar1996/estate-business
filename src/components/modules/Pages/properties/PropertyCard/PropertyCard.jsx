import React from "react";
import "@/components/modules/Pages/properties/PropertyCard/PropertyCard.scss";

const bedIcon = "/images/propertyCard--bed.png";
const bathIcon = "/images/propertyCard--bath.png";
const areaIcon = "/images/propertyCard--area.png";
const lightningIcon = "/images/propertyCard--lightning.png";

const DetailItem = ({ label, value, icon }) => {
  return (
    <div className="detail-item--wrapper">
      <div className="detail-item">
        <div className="detail-icon--wrapper">
          <div className="detail-icons">
            <img src={icon} alt={label} className="detail-icon" />
          </div>
          <p> {label}</p>
        </div>

        <p className="detail-item--value">{value}</p>
      </div>
    </div>
  );
};

const FeatureItem = ({ featureicon, featuretext }) => {
  return (
    <div className="feature-item">
      <div className="feature-item--images">
        <img src={featureicon} alt="icon" className="feature-icon" />
      </div>
      <p className="feature-text">{featuretext}</p>
    </div>
  );
};

const PropertyCard = () => {
  return (
    <div className="property-card--wrapper">
      <div className="property-card">
        <div className="property-card--description">
          <div className="description--header">
            <h2>Description</h2>
            <p>
              Discover your own piece of paradise with the Seaside Serenity
              Villa. With an open floor plan, breathtaking ocean views from
              every room, and direct access to a pristine sandy beach, this
              property is the epitome of coastal living.
            </p>
          </div>
          <div className="property-details">
            <DetailItem label="Bedrooms" value="04" icon={bedIcon} />
            <DetailItem label="Bathrooms" value="03" icon={bathIcon} />
            <DetailItem
              label="Area"
              value="2,500 Square Feet"
              icon={areaIcon}
            />
          </div>
        </div>
        <div className="key-features">
          <h2>Key Features and Amenities</h2>
          <div className="key-features--description">
            <FeatureItem
              featureicon={lightningIcon}
              featuretext={
                "Expansive oceanfront terrace for outdoor entertaining"
              }
            />
            <FeatureItem
              featureicon={lightningIcon}
              featuretext={"Gourmet kitchen with top-of-the-line appliances"}
            />
            <FeatureItem
              featureicon={lightningIcon}
              featuretext={
                "Private beach access for morning strolls and sunset views"
              }
            />
            <FeatureItem
              featureicon={lightningIcon}
              featuretext={
                "Master suite with a spa-inspired bathroom and ocean-facing balcony"
              }
            />
            <FeatureItem
              featureicon={lightningIcon}
              featuretext={"Private garage and ample storage space"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;

import React from "react";
import "@/components/modules/Pages/properties/CostsOverview/CostItem.scss";

const CostItem = ({ title, amount, description, last }) => {
  const itemClass = `cost-item ${last ? "cost-item--last" : ""}`;
   

  return (
   <div className={itemClass}>
      <div className="cost-item__header">
        <h4 className="cost-item__title">{title}</h4>
      </div>
      <div className="cost-item--price">
        <p className="cost-item__amount">{amount}</p>
        {description && (
          <div className="cost-item__description">{description}</div>
        )}

      </div>
    </div>
  );
};

export default CostItem;

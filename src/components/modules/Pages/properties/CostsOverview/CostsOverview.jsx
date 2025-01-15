import React from "react";
import CostItem from "@/components/modules/Pages/properties/CostsOverview/CostItem";
import "@/components/modules/Pages/properties/CostsOverview/CostsOverview.scss";
import Button from "@/components/Elements/Button/Button.jsx";

const CostsOverview = () => {
  return (
    <div className="costs-overview">
      <div className="costs-overview--header--logo">
        <img src="/images/testimonialsLogo.png" alt="Logo" />
      </div>
      <div className="costs-overview--header">
        <h2 className="costs-overview--header--title">
          Comprehensive Pricing Details
        </h2>
        <p className="costs-overview--header--description">
          At Estatein, transparency is key. We want you to have a clear
          understanding of all costs associated with your property investment.
          Below, we break down the pricing for Seaside Serenity Villa to help
          you make an informed decision
        </p>
      </div>
      <div className="costs--note-box">
        <p className="costs--note-box--titlle">Note</p>
        <p className="costs--note-box--description">
          The figures provided above are estimates and may vary depending on the
          property, location, and individual circumstances.
        </p>
      </div>
      <div className="costs-overview--form">
        <div className="costs-overview--form--price">
          <p className="costs-overview--form--price--text">Listing Price</p>
          <p className="costs-overview--form--price--cost">$1,250,000</p>
        </div>
        <div className="costs-section--wrapper">
          <section className="costs-section">
            <div className="costs-section__title--wrapper">
              <h2 className="costs-section__title">Additional Fees</h2>
              <Button type="tertiary">Learn More</Button>
            </div>
            <div className="costs-section--items">
              <div className="costs-section--special">
                <CostItem
                  title="Property Transfer Tax"
                  amount="$25,000"
                  description="Based on the sale price and local regulations"
                />
                <CostItem
                  title="Legal Fees"
                  amount="$3,000"
                  description="Approximate cost for legal services, including title transfer"
                />
              </div>
              <div className="costs-section--special">
                <CostItem
                  title="Home Inspection"
                  amount="$500"
                  description="Recommended for due diligence"
                />
                <CostItem
                  title="Property Insurance"
                  amount="$1,200"
                  description="Annual cost for comprehensive property insurance"
                />
              </div>
              
              <div className="costs-section--special">
                <CostItem
                  last={true} ///для відміни відступа останнього елемента
                  title="Mortgage Fees"
                  amount="Varies"
                  description="If applicable, consult with your lender for specific details"
                />
              </div>
            </div>
          </section>

          <section className="costs-section">
            <div className="costs-section__title--wrapper">
              <h2 className="costs-section__title">Monthly Costs</h2>
              <Button type="tertiary">Learn More</Button>
            </div>
            <div className="costs-section--special">
              <CostItem
                title="Property Taxes"
                amount="$1,250"
                description="Approximate monthly property tax based on the sale price and local rates"
              />
            </div>
            <div className="costs-section--special">
              <CostItem
                last={true} ///для відміни відступа останнього елемента
                title="Homeowners' Association Fee"
                amount="$300"
                description="Monthly fee for common area maintenance and security"
              />
            </div>
          </section>

          <section className="costs-section">
            <div className="costs-section__title--wrapper">
              <h2 className="costs-section__title">Total Initial Costs</h2>
              <Button type="tertiary">Learn More</Button>
            </div>
            <div className="costs-section--items">
              <div className="costs-section--special">
                <CostItem title="Listing Price" amount="$1,250,000" />
                <CostItem
                  title="Additional Fees"
                  amount="$29,700"
                  description="Property transfer tax, legal fees, inspection, insurance"
                />
              </div>
              <div className="costs-section--special">
                <CostItem
                  title="Down Payment"
                  amount="$250,000"
                  description="20%"
                />
                <CostItem
                  title="Mortgage Amount"
                  amount="$1,000,000"
                  description="If applicable"
                />
              </div>
            </div>
          </section>

          <section className="costs-section">
            <div className="costs-section__title--wrapper">
              <h2 className="costs-section__title">Monthly Expenses</h2>
              <Button type="tertiary">Learn More</Button>
            </div>
            <div className="costs-section--items">
              <div className="costs-section--special">
                <CostItem title="Property Taxes" amount="$1,250" />
                <CostItem title="Homeowners' Association Fee" amount="$300" />
              </div>
              <div className="costs-section--special">
                <CostItem
                  title="Mortgage Payment"
                  amount="Varies based on terms and interest rate"
                  description="If applicable"
                />
                <CostItem
                  last={true}
                  title="Property Insurance"
                  amount="$100"
                  description="Approximate monthly cost"
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CostsOverview;

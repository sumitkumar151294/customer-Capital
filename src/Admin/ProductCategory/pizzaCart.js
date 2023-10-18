import React from 'react';
import pizz1 from '../../assets/img/pizz1.jpg'
const PizzaCard = ({ title, description, price }) => {
  return (
    <div className="col-lg-12 col-xl-6">
      <div className="card">
        <div className="card-body">
          <div className="menu-product d-flex">
            <img src={pizz1} alt={title} />
            <div className="content-detail-wrap">
              <div>
                <h4>{title}</h4>
                <span>{description}</span>
              </div>
              <div className="mt-4 d-flex justify-content-between align-items-center">
                <div>
                  <h5 className="mb-0"><span className="fs-14 me-2">start From</span>{price}</h5>
                  <span className="text-danger">Customization available</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PizzaCard;

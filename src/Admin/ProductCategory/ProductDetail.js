import React from 'react';
import PizzaCard from './pizzaCart';
import pizz1 from '../../assets/img/pizz1.jpg'

const ProductDetail = () => {
  return (
    <div className="content-body">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12 col-xl-6">
            <div className="card">
              <div className="card-body">
                <div className="menu-product d-flex">
                  <img src={pizz1} alt="Margherita Pizza" />
                  <div className="content-detail-wrap">
                    <div>
                      <h4>Margherita Pizza</h4>
                      <span>Lots of cheese</span>
                    </div>
                    <div className="mt-4 d-flex justify-content-between align-items-center">
                      <div>
                        <h5 className="mb-0"><span className="fs-14 me-2">start From</span>$15.00</h5>
                        <span className="text-danger">Customization available</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
          <div className="col-lg-12 col-xl-6">
            <div className="card">
              <div className="card-body">
                <div className="menu-product d-flex">
                  <img src={pizz1} alt="Margherita Pizza" />
                  <div className="content-detail-wrap">
                    <div>
                      <h4>American Heat Pizza
a</h4>
                      <span>Cheese, Green Pepper, Tomato, Onions.
</span>
                    </div>
                    <div className="mt-4 d-flex justify-content-between align-items-center">
                      <div>
                        <h5 className="mb-0"><span className="fs-14 me-2">start From</span>$15.00</h5>
                        <span className="text-danger">Customization available</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
          <div className="row">
      <PizzaCard
        title="Mushroom Riot Pizza"
        description="Cheese, Mushroom, Cheese, Garlic, Chili"
        price="$15.00"
      />
      <PizzaCard
        title="American Heat Pizza"
        description="Cheese, green pepper, onion, baby corn, jalapeno"
        price="$15.00"
      />
      <PizzaCard
        title="Mexican Delight Pizza"
        description="Cheese, chilly, sweet corn, tomato, olives"
        price="$15.00"
      />
      <PizzaCard
        title="Spicytreat Pizza"
        description="Cheese, Green Pepper, Spicy Paneer, Olives, Jalapeno."
        price="$15.00"
      />
    </div>        </div>
      </div>
      
      <div className="modal fade" id="reviewModal">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Review</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="text-center mb-4">
                </div>
                <div className="mb-3">
                  <div className="rating-widget mb-4 text-center">
                    <div className="rating-stars">
                      <ul id="stars">
                        <li className="star" title="Poor" data-value="1">
                          <i className="fa fa-star fa-fw"></i>
                        </li>
                        {/* ... Repeat for other stars */}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <textarea className="form-control" placeholder="Comment" rows="5"></textarea>
                </div>
                <button className="btn btn-success btn-block">RATE</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;

import React from "react";

function Card() {
  return (
    <section id="pricing" className="bg-light mt-5">
      <div className="container-lg">
        <div className="text-center">
          <h2>Pricing Plans</h2>
          <p className="lead text-muted">Choose a pricing plan to suit you</p>
        </div>
        <div className="row my-5 alignitems-center justify-content-center g-0">
          <div className="col-8 col-lg-4 col-xl-3">
            <div className="card border-0">
              <div className="card-body text-center py-4">
                <h4 className="card-title">Starter Edition</h4>
                <p className="lead card-subtitle">eBook download only</p>
                <p className="display-5 my-4 text-primary fw-bold">$12.99</p>
                <p className="card-text mx-5 text-muted d-none d-lg-block">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
                <a href="#" className="btn btn-outline-primary btn-lg mt-3">
                  Buy Now
                </a>
              </div>
            </div>
          </div>

          <div className="col-9 col-lg-4 ">
            <div className="card border-primary border-2">
              <div className="card-header text-center text-primary">
                Most Popular
              </div>
              <div className="card-body text-center py-5">
                <h4 className="card-title">Complete Edition</h4>
                <p className="lead card-subtitle">
                  eBook download & all updates
                </p>
                <p className="display-4 my-4 text-primary fw-bold">$18.99</p>
                <p className="card-text mx-5 text-muted d-none d-lg-block">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi
                  delectus numquam sunt aliquid, rem repellat reiciendis.
                </p>
                <a href="#" className="btn btn-outline-primary btn-lg mt-3">
                  Buy Now
                </a>
              </div>
            </div>
          </div>

          <div className="col-8 col-lg-4 col-xl-3">
            <div className="card border-0">
              <div className="card-body text-center py-4">
                <h4 className="card-title">Ultimate Edition</h4>
                <p className="lead card-subtitle">download,update & extras</p>
                <p className="display-5 my-4 text-primary fw-bold">$24.99</p>
                <p className="card-text mx-5 text-muted d-none d-lg-block">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
                <a href="#" className="btn btn-outline-primary btn-lg mt-3">
                  Buy Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Card;

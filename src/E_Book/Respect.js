import React from "react";
import "./E_Book.css";
import Book from "./images/ebook-cover.png";
import OffCanvas from "./OffCanvas";

function Respect() {
  return (
    <section id="intro">
      <div className="container-lg">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-5 text-center text-md-start">
            <h1>
              <div className="display-2">Black-Belt</div>
              <div className="display-5 text-muted">Your Coding Skills</div>
            </h1>
            <p className="lead my-4 text-muted">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <a href="#pricing" className="btn btn-secondary btn-lg mb-4">
              Buy Now
            </a>
            <OffCanvas className="d-block mt-3" />
          </div>

          <div className="col-md-5 text-center d-none d-md-block">
            <span
              data-tip="Designed by Kiyoonewton"
              data-type="info"
              data-place="bottom"
            >
              <img className="img-fluid" src={Book} alt="ebook-cover" />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Respect;

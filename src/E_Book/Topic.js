import React from "react";
import Accord from "./Accord";
import kindle from "./images/kindle.png";

function Topic() {
  return (
    <section className="topics">
      <div className="container-md">
        <div className="text-center">
          <h2>Inside the Book...</h2>
          <p className="lead text-muted">
            A quick glance at the topic you'll learn
          </p>
        </div>
        <div className="row my-5 g-5 justify-content-around align-items-center">
          <div className="col-6 col-lg-4">
            <img src={kindle} className="img-fluid" alt="kindle" />
          </div>
          <div className="col-lg-6">
            <Accord />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Topic;

import React from "react";
import ReactModal from "./ReactModal";

function ModalTrigger() {
  return (
    <section className="bg-light p-xl-5 m-5 ">
      <div className="container ">
        <div className="text-center">
          <h2>Stay in The Loop</h2>
          <p className="lead">Get the latest updates as they happen ...</p>
        </div>
        <div className="row justify-content-center ">
          <div className="col-md-8 text-center">
            <p className="text-muted mx-5 my-4">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Recusandae aperiam dolore dolores quasi, non totam minus maxime
              accusantium molestiae perferendis animi distinctio veniam
              praesentium iusto doloribus corporis eos rem beatae.
            </p>
            <div>
              <ReactModal />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ModalTrigger;

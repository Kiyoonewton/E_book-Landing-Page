import React, { useState } from "react";
import Modal from "react-modal";
import { MdCancel } from "react-icons/md";

const customStyles = {
  content: {
    top: "0",
    margin: "0",
    bottom: "50",
    border: "0",
  },
};

function ReactModal() {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <button className="btn btn-primary" onClick={openModal}>
        Register for Updates
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header justify-content-between">
              <h5 className="modal-title ">Get the Latest Updates</h5>
              <span>
                <MdCancel
                  onClick={closeModal}
                  style={{
                    color: "red",
                    cursor: "pointer",
                    fontSize: "15px",
                  }}
                />
              </span>
            </div>

            <div className="modal-body">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Quibusdam enim veniam eaque iure ipsa sequi quo, repellat
                officiis, ducimus voluptatem cum obcaecati aliquam perferendis?
                Fuga magnam odio nobis optio consequuntur!
              </p>
              <label htmlFor="modal-email" className="form-label">
                Your email address:
              </label>
              <input
                type="email"
                className="form-control"
                id="modal-email"
                placeholder="e.g. Kiyoonewton41@gmail.com"
              />
            </div>
            <div className="modal-footer">
              <button className="btn btn-primary"  >Submit</button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default ReactModal;

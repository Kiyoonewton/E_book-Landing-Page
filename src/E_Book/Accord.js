import React from "react";
// import { Accordion } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";

function Accord() {
  return (
    <div>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Chapter 1 - Your First Web Page</Accordion.Header>
          <Accordion.Body>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Chapter 2 - Mastering CSS</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            Chapter 3 - The Power of JavaScript
          </Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>
            Chapter 4 - Storing Data (Firebase Databases and MongoDB)
          </Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>Chapter 5 - User Authentication</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
    //  <h2 className="accordion-header" id="header-1">
    //     <button
    //       className="accordion-button"
    //       type="button"
    //       data-bs-toggle="collapse"
    //       data-bs-target="#chapter-1"
    //       aria-expanded="true"
    //       aria-controls="chapter-1"
    //     ></button>
    //   </h2>
    //   <div
    //     className="accordion-collapse collapse hide"
    //     id="chapter-1"
    //     aria-labelledby="heading-1"
    //     data-bs-parent="#chapters"
    //   >
    //     <div className="accordion-body">
    //       <p>
    //         Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
    //         dignissimos mollitia cumque, illo iste quidem aliquid architecto
    //         aperiam velit suscipit aspernatur ducimus unde eveniet non beatae
    //         corrupti voluptates fuga quam.
    //       </p>
    //       <p>
    //         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus
    //         temporibus nisi fuga illum velit. Suscipit, saepe mollitia
    //         distinctio est molestiae impedit. Tempore velit earum repudiandae,
    //         esse provident omnis ullam libero!
    //       </p>
    //     </div>
    //   </div>
    // </div>

    // <div className="accordion-item">
    //   <h2 className="accordion-header" id="header-2">
    //     <button
    //       className="accordion-button"
    //       type="button"
    //       data-bs-toggle="collapse"
    //       data-bs-target="#chapter-2"
    //       aria-expanded="true"
    //       aria-controls="chapter-2"
    //     >
    //       Chapter 2 - Mastering CSS
    //     </button>
    //   </h2>
    //   <div
    //     className="accordion-collapse collapse hide"
    //     id="chapter-2"
    //     aria-labelledby="heading-2"
    //     data-bs-parent="#chapters"
    //   >
    //     <div className="accordion-body">
    //       <p>
    //         Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
    //         dignissimos mollitia cumque, illo iste quidem aliquid architecto
    //         aperiam velit suscipit aspernatur ducimus unde eveniet non beatae
    //         corrupti voluptates fuga quam.
    //       </p>
    //       <p>
    //         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus
    //         temporibus nisi fuga illum velit. Suscipit, saepe mollitia
    //         distinctio est molestiae impedit. Tempore velit earum repudiandae,
    //         esse provident omnis ullam libero!
    //       </p>
    //     </div>
    //   </div>
    // </div>

    // <div className="accordion-item">
    //   <h2 className="accordion-header" id="header-3">
    //     <button
    //       className="accordion-button"
    //       type="button"
    //       data-bs-toggle="collapse"
    //       data-bs-target="#chapter-3"
    //       aria-expanded="true"
    //       aria-controls="chapter-3"
    //     >
    //       Chapter 3 - The Power of JavaScript
    //     </button>
    //   </h2>
    //   <div
    //     className="accordion-collapse collapse hide"
    //     id="chapter-3"
    //     aria-labelledby="heading-3"
    //     data-bs-parent="#chapters"
    //   >
    //     <div className="accordion-body">
    //       <p>
    //         Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
    //         dignissimos mollitia cumque, illo iste quidem aliquid architecto
    //         aperiam velit suscipit aspernatur ducimus unde eveniet non beatae
    //         corrupti voluptates fuga quam.
    //       </p>
    //       <p>
    //         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus
    //         temporibus nisi fuga illum velit. Suscipit, saepe mollitia
    //         distinctio est molestiae impedit. Tempore velit earum repudiandae,
    //         esse provident omnis ullam libero!
    //       </p>
    //     </div>
    //   </div>
    // </div>

    // <div className="accordion-item">
    //   <h2 className="accordion-header" id="header-4">
    //     <button
    //       className="accordion-button"
    //       type="button"
    //       data-bs-toggle="collapse"
    //       data-bs-target="#chapter-4"
    //       aria-expanded="true"
    //       aria-controls="chapter-4"
    //     >
    //       Chapter 4 - Storing Data (Firebase Databases and MongoDB)
    //     </button>
    //   </h2>
    //   <div
    //     className="accordion-collapse collapse hide"
    //     id="chapter-4"
    //     aria-labelledby="heading-4"
    //     data-bs-parent="#chapters"
    //   >
    //     <div className="accordion-body">
    //       <p>
    //         Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
    //         dignissimos mollitia cumque, illo iste quidem aliquid architecto
    //         aperiam velit suscipit aspernatur ducimus unde eveniet non beatae
    //         corrupti voluptates fuga quam.
    //       </p>
    //       <p>
    //         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus
    //         temporibus nisi fuga illum velit. Suscipit, saepe mollitia
    //         distinctio est molestiae impedit. Tempore velit earum repudiandae,
    //         esse provident omnis ullam libero!
    //       </p>
    //     </div>
    //   </div>
    // </div>

    // <div className="accordion-item">
    //   <h2 className="accordion-header" id="header-5">
    //     <button
    //       className="accordion-button"
    //       type="button"
    //       data-bs-toggle="collapse"
    //       data-bs-target="#chapter-5"
    //       aria-expanded="true"
    //       aria-controls="chapter-5"
    //     >

    //     </button>
    //   </h2>
    //   <div
    //     className="accordion-collapse collapse hide"
    //     id="chapter-5"
    //     aria-labelledby="heading-5"
    //     data-bs-parent="#chapters"
    //   >
    //     <div className="accordion-body">
    //       <p>
    //         Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
    //         dignissimos mollitia cumque, illo iste quidem aliquid architecto
    //         aperiam velit suscipit aspernatur ducimus unde eveniet non beatae
    //         corrupti voluptates fuga quam.
    //       </p>
    //       <p>
    //         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus
    //         temporibus nisi fuga illum velit. Suscipit, saepe mollitia
    //         distinctio est molestiae impedit. Tempore velit earum repudiandae,
    //         esse provident omnis ullam libero!
    //       </p>
    //     </div>
    //   </div>
    //  </div>
    // </div>
  );
}

export default Accord;

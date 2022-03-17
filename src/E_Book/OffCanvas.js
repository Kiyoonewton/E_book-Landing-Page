import { Dropdown, Offcanvas } from "react-bootstrap";
import React, { useState } from "react";

function OffCanvas() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <h6
        style={{
          cursor: "pointer",
          color: "blue",
          textDecoration: "underline",
        }}
        onClick={handleShow}
      >
        Explore my other books
      </h6>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>My Other Books</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
          <Dropdown>
            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
              Choose a book title
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Become a React Superhero</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Conquering Vue.js</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Levelling up Your Next.js</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export default OffCanvas;

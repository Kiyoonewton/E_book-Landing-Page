import React from "react";
import Respect from "./Respect";
import NavBar from "./NavBar";
import Card from "./Card";
import Topic from "./Topic";
import Reviews from "./Reviews";
import Contact from "./Contact";
import ModalTrigger from "./ModalTrigger";

function E_Book() {
  return (
    <div>
      <NavBar />
      <Respect />
      <Card />
      <Topic />
      <Reviews />
      <Contact />
      <ModalTrigger />
    </div>
  );
}

export default E_Book;

import React, { Component } from "react";
import PropTypes from "prop-types";
import Card from "./Card";

const Cards = props => {
  // console.log(props);
  return (
    <div className="cards-container">
      {/* Using the cards prop, map over the list creating a 
          new Card component for each passing the card as the only prop*/}

      {props.cards.map(card => {
        // console.log("inside map");
        return <Card card={card} />;
      })}
    </div>
  );
};

// Make sure you include prop types for all of your incoming props
Cards.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object)
};

export default Cards;

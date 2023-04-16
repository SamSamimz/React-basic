import React, { Component } from "react";
import { Cards } from "./allcards";

export class Home extends React.Component {
  state = {
    name: "",
  };

  render() {
    return (
      <div className="container">
        <Cards />
      </div>
    );
  }
}

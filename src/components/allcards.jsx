import React, { Component } from "react";
import { Card } from "./card";
import { findAllInRenderedTree } from "react-dom/test-utils";

export class Cards extends React.Component {
  state = {
    data: [
      {
        id: 1,
        name: "Samim",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem officiis vitae recusandae distinctio sunt totam cumque facere molestiae debitis consequatur",
      },
      {
        id: 2,
        name: "Devil",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem officiis vitae recusandae distinctio sunt totam cumque facere molestiae debitis consequatur",
      },
      {
        id: 3,
        name: "Xenon",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem officiis vitae recusandae distinctio sunt totam cumque facere molestiae debitis consequatur",
      },
    ],
  };

  render() {
    return (
      <div className="container">
        <h2 className="text-center py-2">All Cards</h2>
        <div className="row col-12 gap-2">
          {this.state.data.map((item, index) => (
            <Card key={index} name={item.name} desc={item.desc} />
          ))}
        </div>
      </div>
    );
  }
}

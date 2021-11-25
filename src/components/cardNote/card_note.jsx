import React, { Component } from "react";
import "./card_note.css"

export default class CardNote extends Component {
  render() { 
    return (
      <section className="card_note">
        <header className="title_note">
          <h3 className="title">{this.props.title}</h3>
        </header>
        <p className="note">{this.props.text}</p>
      </section>
    )
  }
}

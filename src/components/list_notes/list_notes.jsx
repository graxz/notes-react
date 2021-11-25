import React, { Component } from "react";
import CardNote from "../cardNote/card_note"
import "./list_notes.css"

export default class ListNotes extends Component {
  render() {
    return (
      <ul className="list-of-notes">
        {this.props.notes.map((note, index) => {
          return (
            <li className="note" key={index}>
              <CardNote title={note.title} text={note.notes} />
            </li>
          )
        })}
      </ul>
    )
  }
}

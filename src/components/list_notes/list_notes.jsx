import React, { Component } from "react";
import CardNote from "../cardNote/card_note"
import "./list_notes.css"

export default class ListNotes extends Component {
  constructor() {
    super()

    this.state = { 
      notes: [] 
    }
    this._newNote = this._newNotes.bind(this)
  }

  componentDidMount() {
    this.props.notes.follow(this._newNote)
  }

  componentWillUnmount() {
    this.props.notes.unfollow(this._newNote)
  }

  _newNotes(notes) {
    this.setState({ ...this.state, notes })
  }

  render() {
    return (
      <ul className="list-of-notes">
        {this.state.notes.map((note, index) => {
          return (
            <li className="note" key={index}>
              <CardNote
                noteIndex={index}
                title={note.title} 
                text={note.text} 
                deleteNote={this.props.deleteNote}
                category={note.category}
              />
            </li>
          )
        })}
      </ul>
    )
  }
}

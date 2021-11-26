import React, { Component } from "react"
import { ReactComponent as DeleteSVG } from '../../assets/img/delete.svg'
import "./card_note.css"

export default class CardNote extends Component {
  delete() {
    const index = this.props.noteIndex
    this.props.deleteNote(index)
  }

  render() {
    return (
      <section className="card_note">
        <DeleteSVG className="delete_icon" onClick={this.delete.bind(this)}/>
        <div className="card">
          <header className="title_note">
            <h3 className="title">{this.props.title}</h3>
            <h4 className="category">{this.props.category}</h4>
          </header>
          <p className="note">{this.props.text}</p>
        </div>
      </section>
    )
  }
}

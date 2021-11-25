import React, { Component } from "react";
import "./form.css"

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.title = "";
    this.note = "";
  }

  _handlerChangeTitle(event) {
    this.title = event.target.value;
  }

  _handlerChangeNote(event) {
    this.note = event.target.value;
  }

  _createNote(event) {
    event.preventDefault();
    event.stopPropagation();
    this.props.createNote(this.title, this.note);
  }

  render() {
    return (
      <form className="form"
        onSubmit={this._createNote.bind(this)}
      >
        <input 
          className="input" 
          type="text" 
          placeholder="Titulo" 
          onChange={this._handlerChangeTitle.bind(this)} 
        />
        <textarea 
          rows={15} 
          className="textarea-note" 
          placeholder="Digite sua nota"
          onChange={this._handlerChangeNote.bind(this)}
        >
        </textarea>
        <button 
          className="btn-submit" 
          type="submit">
            Salvar
        </button>
      </form>
    )
  }
}

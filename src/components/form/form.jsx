import React, { Component } from "react";
import "./form.css"

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.title = "";
    this.note = "";
    this.category = "Sem categoria";
    this.state = {
      categories: []
    }
    this._newCategory = this._newCategories.bind(this);

  }

  componentDidMount() {
    this.props.categories.follow(this._newCategory);
  }

  componentWillUnmount() {
    this.props.categories.unfollow(this._newCategory);
  }

  _newCategories(categories) {
    this.setState({ ...this.state, categories });
  }

  _handlerChangeTitle(event) {
    event.stopPropagation();
    this.title = event.target.value;
  }

  _handlerChangeNote(event) {
    event.stopPropagation();
    this.note = event.target.value;
  }

  _createNote(event) {
    event.preventDefault();
    event.stopPropagation();
    this.props.createNote(this.title, this.note, this.category);
  }

  _handlerChangeCategory(event) {
    event.stopPropagation();
    this.category = event.target.value;
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
        <select className="select" onChange={this._handlerChangeCategory.bind(this)}>
          <option value="Sem categoria">Sem categoria</option>
          {this.state.categories.map((category, index) => {
            return <option key={index}>{category}</option>
          })}
        </select>
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

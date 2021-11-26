import React, { Component } from 'react';

export default class ListCategories extends Component {
  constructor() {
    super();

    this.state = {
      categories: []
    }
    this._newCategory = this._newCategories.bind(this)
  }

  componentDidMount() {
    this.props.categories.follow(this._newCategory)
  }

  componentWillUnmount() {
    this.props.categories.unfollow(this._newCategory)
  }

  _newCategories(categories) {
    this.setState({...this.state, categories})
  }

  _handlerEventInput(e) {
    if (e.code === 'Enter') {
      let valueCategory = e.target.value
      this.props.addCategory(valueCategory)
    }
  }

  render() { 
    return (
      <section className="list-categories">
        <ul>
          {this.state.categories.map((category, index) => {
            return <li key={index} className="list-categories__item">{category}</li>
          })}
        </ul>
        <input onKeyUp={this._handlerEventInput.bind(this)} placeholder="Adicionar categoria" className="list-categories-input" type="text"></input>
      </section>
    );
  }
}
 
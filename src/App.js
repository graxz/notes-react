import React, { Component } from 'react';
import ListNotes from './components/list_notes/list_notes.jsx';
import Form from './components/form/form.jsx';
import ListCategories from './components/listCategories/list_categories.jsx';
import Categories from './data/categories'
import Notes from './data/notes'

class App extends Component {
  constructor() {
    super();

    this.categories = new Categories()
    this.notes = new Notes()
  }

  render() {
    return (
      <section>
        <Form 
          categories={this.categories} 
          createNote={this.notes.addNote.bind(this.notes)}
        />
        <main className="principal">
          <ListCategories
            addCategory={this.categories.addCategory.bind(this.categories)}
            categories={this.categories}
          />
          <ListNotes
          notes={this.notes}
          deleteNote={this.notes.deleteNote.bind(this.notes)}
        />
        </main>
      </section>
    )
  }
};

export default App;

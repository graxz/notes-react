import React, { Component } from 'react';
import ListNotes from './components/list_notes/list_notes.jsx';
import Form from './components/form/form.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.notes = []
    this.state = {
      notes: []
    }
  }

  createNote(title, notes) {
    const newNote = { title, notes }
    const newArrNotes = [...this.state.notes, newNote]
    const newState = { 
      notes: newArrNotes
     }
    this.setState(newState)
  }

  render() {
    return (
      <section>
        <Form createNote={this.createNote.bind(this)}/>
        <ListNotes notes={this.state.notes}/>
      </section>
    )
  }
};

export default App;

export default class arrNotes {
  constructor() {
    this.notes = []
    this._followers = []
  }

  addNote(title, text, category) {
    const note = new Note(title, text, category);

    this.notes.push(note);
    this.notify();
  }

  deleteNote(index) {
    this.notes.splice(index, 1);
    this.notify();
  }

  unfollow(func) {
    this._followers = this._followers.filter(follower => follower !== func)
  }

  follow(func) {
    this._followers.push(func)
  }

  notify() {
    this._followers.forEach(func => func(this.notes))
  }
}

class Note {
  constructor(title, text, category) {
    this.title = title;
    this.text = text;
    this.category = category;
  }
}
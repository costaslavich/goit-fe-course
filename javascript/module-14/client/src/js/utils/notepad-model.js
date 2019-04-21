import { PRIORITIES } from './constants';
import * as api from '../../services/api';

export default class Notepad {
  static getPriorityName(priorityId) {
    Notepad.PRIORITIES = PRIORITIES;

    return PRIORITIES[priorityId].name;
  }

  constructor(notes = []) {
    this._notes = notes;
  }

  get notes() {
    return this._notes;
  }

  get() {
    return api.getNotes().then(notes => {
      this._notes = notes;

      return this._notes;
    });
  }

  findNoteById(id) {
    const noteId = this._notes.find(note => note.id === id);

    return noteId;
  }

  saveNote(note) {
    return api.saveNotes(note).then(newNote => {
      this._notes.push(newNote);

      return newNote;
    });
  }

  deleteNote(id) {
    return api.deleteNoteId(id).then(() => {
      this._notes = this._notes.filter(note => note.id !== id);

      return id;
    });
  }

  updateNoteContent(id, updateContent) {
    return api.updateNotes(id, updateContent).then(updatedNotes => {
      this._notes = this._notes.map(note => {
        note.id === updatedNotes.id ? updatedNotes : note;
      });
      return updatedNotes;
    });
  }

  updateNotePriority(id, priority) {
    for (const note of this.notes) {
      if (note.id === id) {
        note.priority = priority;
        return note.priority;
      }
    }
  }

  filterNotesByQuery(query = '') {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const newArrayNotes = [];
        for (const note of this._notes) {
          const arrayWordsTitle = note.title.toLowerCase();
          const arrayWordsBody = note.body.toLowerCase();

          if (
            arrayWordsTitle.includes(query) ||
            arrayWordsBody.includes(query)
          ) {
            newArrayNotes.push(note);
          }
          resolve(newArrayNotes);
        }
      }, 200);
    });
  }

  filterNotesByPriority(priority) {
    const newArrayNotesByPriority = this._notes.filter(
      note => note.priority === priority,
    );

    return newArrayNotesByPriority;
  }
}

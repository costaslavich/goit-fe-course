import { Notyf } from 'notyf';
import Micromodal from 'micromodal';
import productTemplate from '../templates/notes.hbs';
import Notepad from './utils/notepad-model';
import { NOTIFICATION_MESSAGES, NOTE_ACTIONS } from './utils/constants';
import {
  refs,
  renderNoteList,
  addItemToList,
  findParentListItem,
  removeListItem,
} from './utils/view';
import '../sass/libs/micromodal.scss';
import 'notyf/notyf.min.css';

const notepad = new Notepad();
const notyf = new Notyf();

notepad
  .get()
  .then(serverNote =>
    renderNoteList(refs.list, serverNote.map(note => productTemplate(note))),
  );

//  HANDLERS

const handleEditorSubmit = event => {
  event.preventDefault();

  const [input, textarea] = event.currentTarget.elements;

  const inputValue = input.value;
  const textareaValue = textarea.value;

  if (inputValue === '' || textareaValue === '') {
    return notyf.error(NOTIFICATION_MESSAGES.EDITOR_FIELDS_EMPTY);
  }

  const submitNote = {
    title: inputValue,
    body: textareaValue,
    priority: Notepad.getPriorityName(0),
  };

  notepad
    .saveNote(submitNote)
    .then(saveItem => {
      addItemToList(refs.list, saveItem);
    })
    .catch(Error => {
      notyf.error(Error);
    });

  notyf.success(NOTIFICATION_MESSAGES.NOTE_ADDED_SUCCESS);

  Micromodal.close('note-editor-modal');
  event.currentTarget.reset();
};

const handleFilterChange = ({ target }) => {
  notepad.filterNotesByQuery(target.value).then(note => {
    renderNoteList(refs.list, note.map(item => productTemplate(item)));
  });
};

const handleListClick = ({ target }) => {
  if (target.parentNode.nodeName !== 'BUTTON') return;

  const actionIcon = target.parentNode.dataset.action;

  switch (actionIcon) {
    case NOTE_ACTIONS.DELETE:
      const listItem = findParentListItem(target);

      notepad
        .deleteNote(listItem.dataset.id)
        .then(() => removeListItem(listItem))
        .catch(error => {
          notyf.error(error);
        });
      notyf.success(NOTIFICATION_MESSAGES.NOTE_DELETED_SUCCESS);

      break;

    case NOTE_ACTIONS.EDIT:
      notyf.success(NOTE_ACTIONS.EDIT);
      break;

    case NOTE_ACTIONS.INCREASE_PRIORITY:
      notyf.error(NOTE_ACTIONS.INCREASE_PRIORITY);
      break;

    case NOTE_ACTIONS.DECREASE_PRIORITY:
      notyf.error(NOTE_ACTIONS.DECREASE_PRIORITY);
      break;

    default:
      notyf.error('Not a BUTTON !!!');
  }
};

const handleOpenModal = () => {
  Micromodal.show('note-editor-modal');
};

//  LISTENERS

refs.editor.addEventListener('submit', handleEditorSubmit);
refs.filter.addEventListener('input', handleFilterChange);
refs.list.addEventListener('click', handleListClick);
refs.openModalBtn.addEventListener('click', handleOpenModal);

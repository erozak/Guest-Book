import {
  BOOK_OFFSET,
  EDITOR_TOGGLE,
} from '../../types';

export default {
  [BOOK_OFFSET](state, { offset }) {
    state.offsetTop = offset;
  },
  [EDITOR_TOGGLE](state, { status }) {
    state.editorToggler = status || (!status && state.editorToggler);
  },
};

import {
  MAIN_OFFSET,
  EDITOR_TOGGLE,
} from '../../types';

export default {
  [MAIN_OFFSET](state, { offset }) {
    state.offsetTop = offset;
  },
  [EDITOR_TOGGLE](state, payload) {
    const status = payload ? payload.status : false;

    state.editorToggler = status || (!status && !state.editorToggler);
  },
};

import {
  MAIN_OFFSET,
  WINDOW_RESIZE,
} from '../../types';

export default {
  [WINDOW_RESIZE]({ state, commit }, { el }) {
    const height = el.getBoundingClientRect().bottom;

    if (state.offsetTop !== height) {
      commit(MAIN_OFFSET, {
        offset: height,
      });
    }
  },
};

import {
  MAIN_OFFSET,
  WINDOW_RESIZE,
} from '../../types';

export default {
  [WINDOW_RESIZE]({ state, commit }, { height }) {
    if (state.offsetTop !== height) {
      commit(MAIN_OFFSET, {
        offset: height,
      });
    }
  },
};

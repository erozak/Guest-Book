import {
  TIMESTAMP_UPDATE,
  TIME_TICK,
} from '../../types';

export default {
  [TIME_TICK]({ commit }) {
    commit(TIMESTAMP_UPDATE, {
      now: Date.now(),
    });
  },
};

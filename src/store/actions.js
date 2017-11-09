import { MSG_ADD, TIME_TICK } from './types';

export default {
  addMsg({ commit }, msg) {
    commit(MSG_ADD, msg);
  },
  tickTime({ commit }, timestamp) {
    commit(TIME_TICK, timestamp);
  },
};

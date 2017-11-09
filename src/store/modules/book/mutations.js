import {
  MSG_ADD,
  TIMER_CLEAR,
  TIMER_SET,
  TIMESTAMP_UPDATE,
} from '../../types';

export default {
  [MSG_ADD](state, { message }) {
    state.messages.unshift(message);
  },
  [TIMESTAMP_UPDATE](state, { now }) {
    state.now = now;
  },
  [TIMER_SET](state, { timer }) {
    state.timer = timer;
  },
  [TIMER_CLEAR]({ timer }) {
    clearInterval(timer);
  },
};

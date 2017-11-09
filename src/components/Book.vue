<template lang="pug">
  .book.flex-gorw(:class="{'flex-jc-center': isEmpty}")
    template(v-if="isEmpty")
      .self-center.text-muted.size-lg
        p.m-0
          | No messages here
    template(v-else)
      Message(
        v-for="msg in messages"
        v-bind="msg"
        :key="msg.id"
        :nowtime="now"
      )
</template>

<script>
import { mapGetters, mapState, mapMutations } from 'vuex';

import Message from './Message';

import { TIME_TICK, TIMER_SET, TIMER_CLEAR } from '../store/types';

export default {
  name: 'Book',
  computed: {
    ...mapState([
      'now',
      'messages',
    ]),
    ...mapGetters([
      'isEmpty',
    ]),
  },
  methods: {
    ...mapMutations({
      setTimer: TIMER_SET,
      clearTimer: TIMER_CLEAR,
    }),
  },
  created() {
    this.setTimer(setInterval(this.$state.dispatch(TIME_TICK), 500));
  },
  beforeDestroy() {
    this.clearTimer();
  },
  components: {
    Message,
  },
};
</script>

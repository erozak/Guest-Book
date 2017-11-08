<template lang="pug">
  .book.flex-gorw(:class="{'flex-mid': messages.length <= 0}")
    .container
      template(v-if="messages.length <= 0")
        .self-center.text-muted.size-lg
          p.m-0
            | No messages here.
            br
            | Come leave some!
      template(v-else)
        Message(
          v-for="msg in messages"
          v-bind="msg"
          :key="msg.id"
          :nowtime="now"
        )
</template>

<script>
import Message from './Message';

export default {
  name: 'Book',
  props: {
    messages: {
      type: Array,
      default: [],
    },
  },
  data() {
    return {
      now: Date.now(),
      timer: undefined,
    };
  },
  methods: {
    updateTime() {
      this.now = Date.now();
    },
  },
  created() {
    this.timer = setInterval(this.updateTime, 500);
  },
  beforeDestroy() {
    clearInterval(this.timer);
  },
  components: {
    Message,
  },
};
</script>

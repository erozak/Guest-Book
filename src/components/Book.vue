<template lang="pug">
  .book
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

<style lang="scss" scoped>
</style>

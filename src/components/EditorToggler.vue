<template lang="pug">
  button#editor-toggler(
    type="button"
    :title="title"
    :class="{'actived': status}"
    @click="toggle"
  )
    Icon(:name="icon")
</template>

<script>
import Icon from 'vue-awesome/components/Icon';
import 'vue-awesome/icons/comment';
import 'vue-awesome/icons/times';

export default {
  name: 'EditorToggler',
  props: {
    status: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    title() {
      return this.status ? 'Close comment editor' : 'Open comment editor';
    },
    icon() {
      return this.status ? 'times' : 'comment';
    },
  },
  methods: {
    toggle() {
      this.$emit('on-editor-toggle', {
        status: !this.status,
      });
    },
  },
  components: {
    Icon,
  },
};
</script>

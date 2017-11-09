<template lang="pug">
  button#editor-toggler(
    type="button"
    :title="title"
    :class="{actived: status}"
    @click="toggle"
  )
    Icon(:name="icon")
</template>

<script>
import { mapState, mapMutations } from 'vuex';

import Icon from 'vue-awesome/components/Icon';
import 'vue-awesome/icons/comment';
import 'vue-awesome/icons/times';

import { EDITOR_TOGGLE } from '../store/types';

export default {
  name: 'EditorToggler',
  props: {
    status: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    ...mapState({
      status: 'editorToggler',
    }),
    title() {
      return this.status ? 'Close comment editor' : 'Open comment editor';
    },
    icon() {
      return this.status ? 'times' : 'comment';
    },
  },
  methods: {
    ...mapMutations({
      toggle: EDITOR_TOGGLE,
    }),
  },
  components: {
    Icon,
  },
};
</script>

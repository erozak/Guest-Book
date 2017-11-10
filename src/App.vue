<template lang="pug">
  #app
    .body-wrap
      #header-wrap
        App-header
        .container.d-flex.flex-column
          Editor-toggler
          #greet(ref="greetEl") {{greet}}
          Editor
      main#main.body-inner.container.flex-gorw(
        :style="{'padding-top': paddingTop}"
      )
        Book
      App-footer(v-bind="author")
</template>

<script>
import { mapGetters, mapState, mapMutations, mapActions } from 'vuex';

import AppHeader from './frame/Header';
import AppFooter from './frame/Footer';
import Editor from './components/Editor';
import EditorToggler from './components/EditorToggler';
import Book from './components/Book';

import { MAIN_OFFSET, WINDOW_RESIZE } from './store/types';

export default {
  name: 'App',
  computed: {
    ...mapState('frame', [
      'greet',
      'author',
    ]),
    ...mapGetters('frame', [
      'paddingTop',
    ]),
  },
  methods: {
    ...mapActions('frame', {
      onWindowResize: WINDOW_RESIZE,
    }),
    ...mapMutations('frame', {
      updateMainOffset: MAIN_OFFSET,
    }),
  },
  mounted() {
    this.updateMainOffset({
      offset: this.$refs.greetEl.getBoundingClientRect().bottom,
    });
    window.addEventListener('resize', () => {
      this.onWindowResize({
        el: this.$refs.greetEl,
      });
    });
  },
  components: {
    AppHeader,
    AppFooter,
    Book,
    Editor,
    EditorToggler,
  },
};
</script>

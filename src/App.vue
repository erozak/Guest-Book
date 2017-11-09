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
      App-footer
</template>

<script>
import { mapGetters, mapState, mapMutations } from 'vuex';

import AppHeader from './frame/Header';
import AppFooter from './frame/Footer';
import Editor from './components/Editor';
import EditorToggler from './components/EditorToggler';
import Book from './components/Book';

import { MAIN_OFFSET, WINDOW_RESIZE } from './store/types';

export default {
  name: 'App',
  computed: {
    ...mapState([
      'greet',
    ]),
    ...mapGetters([
      'paddingTop',
    ]),
  },
  methods: {
    ...mapMutations({
      updateMainOffset: MAIN_OFFSET,
    }),
  },
  mounted() {
    this.updateMainOffset(this.$refs.greetEl.getBoundingClientRect().bottom);
    window.addEventListener('resize', () => {
      this.$store.dispatch(WINDOW_RESIZE, {
        height: this.$refs.greetEl.getBoundingClientRect().bottom,
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

<template lang="pug">
  #app
    .body-wrap
      #header-wrap
        App-header
        .container.d-flex.flex-column
          Editor-toggler(:status="ui.toggler.editor" @on-editor-toggle="onEditorToggle")
          #greet(ref="greetEl") {{greet}}
          Editor(
            :toggler="ui.toggler.editor"
            @on-signin-msg="onSigninMsg"
            @on-editor-toggle="onEditorToggle"
          )
      main#main.body-inner.container.flex-gorw(:style="{'padding-top': ui.offset.mainTop + 'px'}")
        Book(:messages="messages")
      App-footer(v-bind="author")
</template>

<script>
import AppHeader from './frame/Header';
import AppFooter from './frame/Footer';
import Editor from './components/Editor';
import EditorToggler from './components/EditorToggler';
import Book from './components/Book';

export default {
  name: 'App',
  data() {
    return {
      greet: 'Come Leave some message to us!',
      author: {
        name: 'Erozak',
        website: 'https://github.erozak.com',
        repo: 'https://github.com/erozak/Guest-Book',
        timestamp: '2017',
      },
      messages: [],
      ui: {
        offset: {
          mainTop: 0,
        },
        toggler: {
          editor: false,
        },
      },
    };
  },
  computed: {
    editorTogglerIcon() {
      return this.ui.toggler.editor ? 'times' : 'comment';
    },
    editorTogglerTitle() {
      return this.ui.toggler.editor ? 'Close comment editor' : 'Open comment editor';
    },
  },
  methods: {
    onWindowResize() {
      const newHeight = this.$refs.greetEl.getBoundingClientRect().bottom;

      if (newHeight !== this.ui.offset.mainTop) {
        this.ui.offset.mainTop = newHeight;
      }
    },
    onSigninMsg(msg) {
      this.messages.unshift(msg);
    },
    onEditorToggle({ status }) {
      this.ui.toggler.editor = status;
    },
  },
  mounted() {
    this.ui.offset.mainTop = this.$refs.greetEl.getBoundingClientRect().bottom;
    window.addEventListener('resize', this.onWindowResize);
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

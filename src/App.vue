<template lang="pug">
  #app
    .body-wrap
      App-header
      main#main.body-inner.flex-gorw
        Editor-toggler(:status="ui.toggler.editor" @on-editor-toggle="onEditorToggle")
        Editor(
          :toggler="ui.toggler.editor"
          @on-signin-msg="onSigninMsg"
          @on-editor-toggle="onEditorToggle"
        )
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
      author: {
        name: 'Erozak',
        website: 'https://github.erozak.com',
        repo: 'https://github.com/erozak/Guest-Book',
        timestamp: '2017',
      },
      ui: {
        toggler: {
          editor: false,
        },
      },
      messages: [],
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
    onSigninMsg(msg) {
      this.messages.unshift(msg);
    },
    onEditorToggle({ status }) {
      this.ui.toggler.editor = status;
    },
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

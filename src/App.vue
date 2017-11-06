<template lang="pug">
  #app
    .body-wrap
      App-header
      .body-inner
        Editor(@on-sign-in="signinMsg")
        hr
        Book(:messages="messages")
      App-footer(v-bind="author")
</template>

<script>
import AppHeader from './frame/Header';
import AppFooter from './frame/Footer';
import Editor from './components/Editor';
import Book from './components/Book';

export default {
  name: 'App',
  data() {
    return {
      author: {
        name: 'Erozak',
        website: 'https://github.erozak.com',
        repo: 'https://github.com/erozak/Guest-Book',
        timestamp: 'Nov 2017',
      },
      messages: [],
    };
  },
  methods: {
    signinMsg(msg) {
      this.messages.push(msg);
    },
  },
  components: {
    AppHeader,
    AppFooter,
    Editor,
    Book,
  },
};
</script>

<style lang="scss">
@import './styles/variables';

body {
  font-family: $font;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: color('secondary');
}
</style>

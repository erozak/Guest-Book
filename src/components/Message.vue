<template lang="pug">
  section.msg
    header.d-flex
      .gender(
        :class="{'male': gender === 1, 'female': gender === 0}"
        v-once
      )
        Icon(:name="genderIcon")
      .d-flex.flex-gorw.flex-column.text-left
        template(v-if="mailHref.length > 0")
          a.name(
            :href="mailHref"
            title="title"
            :title="mailHrefTitle"
            v-once
          )
            | {{nickname}}
            Icon(:name="'envelope'" labels="Has contact infomation")
        template(v-else)
          span.name(v-once)
            | {{nickname}}
            Icon(:name="'envelope-o'" lable="No contact infomation")
        time.timestamp(
          :datetime="isoTime"
          :title="dateTime"
        ) {{relativeTime}}
    .content.text-left(v-once) {{content}}
</template>

<script>
import moment from 'moment';
import Icon from 'vue-awesome/components/Icon';

import 'vue-awesome/icons/envelope';
import 'vue-awesome/icons/envelope-o';
import 'vue-awesome/icons/genderless';
import 'vue-awesome/icons/mars';
import 'vue-awesome/icons/venus';

export default {
  name: 'Message',
  props: {
    nowtime: {
      type: Number,
      default: Date.now(),
    },
    nickname: {
      type: String,
      default: 'Anonymous',
    },
    gender: {
      type: Number,
      default: -1,
    },
    mail: {
      type: String,
      default: '',
    },
    timestamp: {
      type: Number,
      default: Date.now,
    },
    content: {
      type: String,
      default: 'Ooops! Something error ...',
    },
  },
  computed: {
    mailHref() {
      return (this.mail && this.mail.length > 0) ? `mailto: ${this.mail}` : '';
    },
    mailHrefTitle() {
      return (this.mail && this.mail.length > 0) ? `Send mail to ${this.nickname}` : '';
    },
    genderIcon() {
      const icons = ['genderless', 'venus', 'mars'];

      return icons[this.gender + 1];
    },
    momentTime() {
      return moment(this.timestamp);
    },
    isoTime() {
      return this.momentTime.format();
    },
    dateTime() {
      return this.momentTime.format('h:mm:ss a, MMMM Do YYYY');
    },
    relativeTime() {
      return this.momentTime.from(this.nowtime, false);
    },
  },
  components: {
    Icon,
  },
};
</script>


<template lang="pug">
  .msg
    span.gender
      Icon(:name="genderIcon")
    template(v-if="mail")
      a.name(
        :href="mailHref"
        title="title"
        :title="mailHrefTitle"
        v-once
      ) {{name}}
    template(v-else)
      span.name(v-once) {{name}}
    time.timestamp(
      :datetime="isoTime"
      :title="dateTime"
    ) {{relativeTime}}
    .content(v-once) {{content}}
</template>

<script>
import Icon from 'vue-awesome/components/Icon';

import 'vue-awesome/icons/genderless';
import 'vue-awesome/icons/mars';
import 'vue-awesome/icons/venus';

import messageContainer from '../containers/Message';

export default {
  name: 'Message',
  props: {
    nowtime: {
      type: Number,
      default: Date.now(),
    },
    name: {
      type: String,
      default: 'Anonymous',
    },
    gender: {
      type: Number,
      default: -1,
    },
    mail: {
      type: String,
      default: undefined,
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
  components: {
    Icon,
  },
  ...messageContainer,
};
</script>


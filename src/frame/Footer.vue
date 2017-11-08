<template lang="pug">
  footer#footer.flex-static(v-once)
    p.m-0
      a.mr-3(
        :href="repo"
        rel="nofollow noopener noreferrer"
        target="_blank"
        title="repo at Github"
      )
        Icon(name="github")
      a(
        :href="website"
        rel="nofollow noopener noreferrer"
        target="_blank"
        title="Erozak personal website"
      ) {{name}}
      | &nbsp;&copy;&nbsp;{{timestamp}}
</template>

<script>
import Icon from 'vue-awesome/components/Icon';
import 'vue-awesome/icons/github';

export default {
  name: 'Foot',
  props: {
    name: String,
    website: String,
    repo: String,
    timestamp: String,
  },
  components: {
    Icon,
  },
};
</script>

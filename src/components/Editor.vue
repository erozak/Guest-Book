<template lang="pug">
  form.editor(v-show="toggler")
    .container
      h2.mt-0.mb-4.d-flex.flex-ai-center.title.text-left Comment
      .input-group.groupon
        //- Name
        .addon.input-group.flex-gorw
          label.lb(for="editor-name")
            input#editor-name.input(
              type="text"
              name="name"
              placeholder="I'm ..."
              v-model="name"
              v-validate.initial="'alpha_spaces|max:56'"
              :class="{invalid: errors.has('name') }"
            )

        //- Gender
        .addon.cb-group
          //- Male
          input#gender-male.cb(type="radio" name="gender" value="1" v-model="gender")
          label.lb-cb(for="gender-male" title="Male")
            Icon(name="mars")

          //- Neutral
          input#gender-mystery.cb(type="radio" name="gender" value="-1" v-model="gender" checked)
          label.lb-cb(for="gender-mystery" title="Neutral")
            Icon(name="genderless")

          //- Female
          input#gender-female.cb(type="radio" name="gender" value="0" v-model="gender")
          label.lb-cb(for="gender-female" title="Female")
            Icon(name="venus")

      //- Email
      .input-group
        label.lb(for="editor-mail")
          input#editor-mail.input(
            type="mail"
            name="mail"
            placeholder="Contact me at ..."
            v-model="mail"
            v-validate.initial="'email'"
            :class="{invalid: errors.has('mail') }"
          )

      //- Message
      .input-group.flex-gorw
        label.lb(for="editor-msg")
          input#editor-msg.input(
            type="text"
            name="msg"
            placeholder="Type somthimg ..."
            v-model="message"
            v-validate="'max:140|required'"
            :class="{invalid: errors.has('msg') }"
          )

      p.msgbox
        span.d-block {{errors.first('name')}}
        span.d-block {{errors.first('mail')}}
        span.d-block {{errors.first('msg')}}

      button.btn.flex-static.mb-5(
        type="button"
        @click="onSignIn"
        :disabled="errors.any() || message.length <= 0"
      ) Sign in

</template>

<script>
import Icon from 'vue-awesome/components/Icon';
import shortid from 'shortid';

import 'vue-awesome/icons/genderless';
import 'vue-awesome/icons/mars';
import 'vue-awesome/icons/venus';

export default {
  name: 'Editor',
  props: {
    toggler: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      name: '',
      mail: '',
      gender: '-1',
      message: '',
    };
  },
  methods: {
    onSignIn() {
      this.$validator.validateAll()
        .then((isDone) => {
          if (isDone) {
            const name = this.name;
            const gender = Number(this.gender);
            const mail = this.mail;
            const content = this.message;

            this.$emit('on-signin-msg', {
              id: shortid.generate(),
              timestamp: Date.now(),
              name: name.length ? name : undefined,
              mail: mail.lenth ? mail : undefined,
              gender,
              content,
            });

            this.$emit('on-editor-toggle', {
              status: false,
            });
          } else return false;

          return true;
        })
        .then((isDone) => {
          if (isDone) {
            this.name = '';
            this.gender = '-1';
            this.mail = '';
            this.message = '';

            this.$nextTick(() => this.errors.clear());
          }
        });
    },
  },
  components: {
    Icon,
  },
};
</script>

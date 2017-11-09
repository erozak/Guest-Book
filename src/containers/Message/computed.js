import moment from 'moment';

export default {
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
};

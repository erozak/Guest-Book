import moment from 'moment';

export default {
  mailHref() {
    return (this.mail) ? `mailto: ${this.mail}` : '';
  },
  mailHrefTitle() {
    return `Send mail to ${this.name}`;
  },
  genderIcon() {
    const icons = ['genderless', 'mars', 'venus'];

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

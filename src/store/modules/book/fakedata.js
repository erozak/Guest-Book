export default [
  {
    nickname: undefined,
    gender: -1,
    mail: undefined,
    timestamp: 1452209411000,
    content: 'Be careful.',
  },
  {
    nickname: 'Chris',
    gender: 1,
    mail: 'chris@test.mail.addr',
    timestamp: 1509834296000,
    content: 'Have a nice day!',
  },
  {
    nickname: 'Mary',
    gender: -1,
    mail: undefined,
    timestamp: 1507211292000,
    content: 'Ciao!',
  },
  {
    nickname: 'Mark',
    gender: -1,
    mail: 'mark@test.mail.addr',
    timestamp: (new Date()).valueOf() - ((60 * 3) * 1000),
    content: 'Buenos tardes. ¿Cómo está?',
  },
  {
    nickname: 'Eva',
    gender: 0,
    mail: undefined,
    timestamp: (new Date()).valueOf() - ((60 * 5) * 60 * 1000),
    content: 'Hahahahahaha! Cya!',
  },
  {
    nickname: undefined,
    gender: -1,
    mail: undefined,
    timestamp: (new Date()).valueOf() - (8 * 24 * 60 * 60 * 1000),
    content: 'YOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOoooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo!',
  },
].sort((a, b) => a.timestamp <= b.timestamp);

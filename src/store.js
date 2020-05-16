const uuid = require('uuid/v4')

const bookmarks = [
  { id: uuid(),
    title: 'Github',
    url: 'https://www.github.com',
    description: 'Collaborate with your coding projects',
    rating: 5 },
  { id: uuid(),
    title: 'Google',
    url: 'https://www.google.com',
    description: 'Where we find everything else',
    rating: 4 },
  { id: uuid(),
    title: 'MDN',
    url: 'https://developer.mozilla.org',
    description: 'The place to find web documentation',
    rating: 5 },
]

module.exports = { bookmarks }
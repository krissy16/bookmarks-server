const { v4: uuidv4 } = require('uuid')

const bookmarks = [
  { id: uuidv4(),
    title: 'Github',
    url: 'https://www.github.com',
    description: 'Collaborate with your coding projects',
    rating: 5 },
  { id: uuidv4(),
    title: 'Google',
    url: 'https://www.google.com',
    description: 'Where we find everything else',
    rating: 4 },
  { id: uuidv4(),
    title: 'MDN',
    url: 'https://developer.mozilla.org',
    description: 'The place to find web documentation',
    rating: 5 },
]

module.exports = { bookmarks }
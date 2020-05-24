function makeBookmarksArray() {
    return [
      {
        id: 1,
        title: 'Google', 
        url: 'www.google.com', 
        description: null,
        rating: '5'
      },
      {
        id: 2,
        title: 'Yahoo',
        url: 'www.yahoo.com',
        description: null,
        rating: '3'
      },
      {
        id: 3,
        title: 'GitHub',
        url: 'www.github.com',
        description: null,
        rating: '5'
      },
      {
        id: 4,
        title: 'Walmart',
        url: 'www.walmart.com',
        description: null,
        rating: '4'
      },
    ];
  }
  
  module.exports = {
    makeBookmarksArray,
  }
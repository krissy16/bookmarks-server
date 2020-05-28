function makeBookmarksArray() {
    return [
      {
        id: 1,
        title: 'Google', 
        url: 'www.google.com', 
        description: 'sample text',
        rating: 5
      },
      {
        id: 2,
        title: 'Yahoo',
        url: 'www.yahoo.com',
        description: 'sample text',
        rating: 3
      },
      {
        id: 3,
        title: 'GitHub',
        url: 'www.github.com',
        description: 'sample text',
        rating: 5
      },
      {
        id: 4,
        title: 'Walmart',
        url: 'www.walmart.com',
        description: 'sample text',
        rating: 4
      },
    ];
}
  
function makeMaliciousBookmark() {
  const maliciousBookmark = {
    id: 911,
    title: 'Naughty naughty very naughty <script>alert("xss");</script>',
    url: 'https://www.hackers.com',
    description: `Bad image <img src="https://url.to.file.which/does-not.exist" onerror="alert(document.cookie);">. But not <strong>all</strong> bad.`,
    rating: 1,
  }
  const expectedBookmark = {
    ...maliciousBookmark,
    title: 'Naughty naughty very naughty &lt;script&gt;alert(\"xss\");&lt;/script&gt;',
    description: `Bad image <img src="https://url.to.file.which/does-not.exist">. But not <strong>all</strong> bad.`
  }
  return {
    maliciousBookmark,
    expectedBookmark,
  }
}

module.exports = {
  makeBookmarksArray,
  makeMaliciousBookmark,
}
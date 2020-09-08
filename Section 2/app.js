const fs = require('fs')


fs.writeFileSync('notes.txt', 'My name is Shanjay KM.')



Challenge in Section I

Append a data in fileStream

const fs = require('fs')

// fs.writeFileSync('notes.txt', 'My name is Shanjay.')

fs.appendFileSync('notes.txt', ' I live in Tamil Nadu.')

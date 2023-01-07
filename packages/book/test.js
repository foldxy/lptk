var LP = require("./index.js")

console.group('BOOK')
// console.log(LP.book())
console.log('Is book populated?', LP.book().length > 0)
console.groupEnd()

console.group('SECTIONS')
// console.log(LP.sections())
console.log('Are there 18 sections?', LP.sections().length === 18)
console.groupEnd()

console.group('PAGES')
// console.log(LP.pages())
console.log('Are there 75 pages w/ plain text?', LP.pages().length === 75)
console.groupEnd()

console.group('BOOK LINES')
console.log('Is book words list populated?', LP.bookLines().length > 0)
console.log('Are there 797 lines?', LP.bookLines().length === 797)
// LP.bookLines().forEach(x=>console.log(x))
console.groupEnd()

console.group('SECTION LINES')
console.log('Are there 18 sections of lines?', LP.sectionLines().length === 18)
// LP.sectionLines().forEach(x=>x.forEach(y=>console.log(y)))
console.groupEnd()

console.group('PAGE LINES')
console.log('Are there 75 pages of lines?', LP.pageLines().length === 75)
// LP.pageLines().forEach(x=>x.forEach(y=>console.log(y)))
console.groupEnd()

console.group('BOOK SENTENCES')
console.log('Is book sentence list populated?', LP.bookSentences().length > 0)
console.log('Are there 263 sentences?', LP.bookSentences().length === 263)
// LP.bookSentences().forEach(x=>console.log(x))
console.groupEnd()

console.group('SECTION SENTENCES')
console.log('Is section sentence list populated?', LP.sectionSentences().length > 0)
console.log('Are there 18 sections of sentences?', LP.sectionSentences().length === 18)
// LP.bookSentences().forEach(x=>console.log(x))
console.groupEnd()

console.group('PAGE SENTENCES')
console.log('Is page sentence list populated?', LP.pageSentences().length > 0)
console.log('Are there 75 pages of sentences?', LP.pageSentences().length === 75)
// LP.bookSentences().forEach(x=>console.log(x))
console.groupEnd()


console.group('BOOK WORDS')
console.log('Is book words list populated?', LP.bookWords().length > 0)
// LP.bookWords().forEach(x=>console.log(x))
console.groupEnd()

console.group('SECTION WORDS')
console.log('Are there 18 sections of words?', LP.sectionWords().length === 18)
// LP.sectionWords().forEach(x=>x.forEach(y=>console.log(y)))
console.groupEnd()

console.group('PAGE WORDS')
console.log('Are there 75 pages of words?', LP.pageWords().length === 75)
// LP.pageWords().forEach(x=>x.forEach(y=>console.log(y)))
console.groupEnd()


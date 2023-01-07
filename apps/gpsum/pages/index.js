const LP = require('@lptk/book')
const T = require('@lptk/translator').factory()
const wordlist = require('@lptk/wordlists/wordlists/english/wordlist')
// const wordlist10 = require('@lptk/wordlists/wordlists/english10/wordlist')
// const wordlist20 = require('@lptk/wordlists/wordlists/english20/wordlist')
// const wordlist35 = require('@lptk/wordlists/wordlists/english35/wordlist')
// const wordlist40 = require('@lptk/wordlists/wordlists/english40/wordlist')
// const wordlist50 = require('@lptk/wordlists/wordlists/english50/wordlist')
// const wordlist60 = require('@lptk/wordlists/wordlists/english60/wordlist')
// const wordlist70 = require('@lptk/wordlists/wordlists/english70/wordlist')
// const wordlist = [
//   ...wordlist10, 
//   ...wordlist20,
//   ...wordlist35,
//   ...wordlist40,
//   ...wordlist50,
//   ...wordlist60,
//   ...wordlist70,
// ]

const sum = (a, b) => a + b

const extender = word => ({
  runic: word,
  latin: T.toLatin(word, true),
  positionTotal: T.toPositions(word).reduce(sum, 0),
  primeTotal: T.toPrimes(word).reduce(sum, 0),
  totientTotal: T.toTotients(word).reduce(sum, 0),
})

const expanded = wordlist.map(extender)

const POSITION = "position"
const PRIME = "prime"
const TOTIENT = "totient"
const ANY = "any"

const applyLens = (lens, value) => {
  switch (lens) {
    case POSITION:
      return ({ positionTotal }) => {
        return positionTotal === value
      }
    case PRIME:
      return ({ primeTotal }) => {
        return primeTotal === value
      }
    case TOTIENT:
      return ({ totientTotal }) => {
        return totientTotal === value
      }
    default:
      return ({ positionTotal, primeTotal, totientTotal }) => {
        return positionTotal === value || primeTotal === value || totientTotal === value
      }
  }
}

const applyRunicLength = (length) => {
  return ({ runic }) => runic.length === length
}
const applyMaxRunicLength = (length) => {
  return ({ runic }) => runic.length <= length
}
const applyMinRunicLength = (length) => {
  return ({ runic }) => runic.length >= length
}

const applySort = (sort) => {
  return (a, b) => a.latin.localeCompare(b.latin)
}

// [ lens, value, runicLength]
// const wordValues = [
//   [PRIME, 110, 0],
//   [PRIME, 487, 0],
//   [PRIME, 145, 0],
//   [PRIME, 124, 0],
//   [PRIME, 395, 0],
//   [PRIME, 430, 0],
//   [PRIME, 457, 0],
//   [PRIME, 354, 0],
//   [PRIME, 290, 0],
//   [PRIME, 573, 0],
//   [PRIME, 79, 0],
//   [PRIME, 533, 0],
//   // [PRIME, 110, 2],
//   // [PRIME, 487, 11],
//   // [PRIME, 145, 3],
//   // [PRIME, 124, 4],
//   // [PRIME, 395, 7],
//   // [PRIME, 430, 7],
//   // [PRIME, 457, 7],
//   // [PRIME, 354, 4],
//   // [PRIME, 290, 6],
//   // [PRIME, 573, 12],
//   // [PRIME, 79, 0],
//   // [PRIME, 533, 9],


// ]

// const wordValues = LP.pageWords()[17].map(extender).map(w => [PRIME, w.primeTotal, w.runic.length, w.runic])
const wordValues = LP.pageWords()[20].map(extender).map(w => [PRIME, w.primeTotal, 0, w.runic])

function SumSetItem({ item }) {
  return (
    <div>{item.latin}</div>
  )
}

function SumSet({ set, value, runic }) {
  const items = set.map(item => (<SumSetItem item={item} />))

  return (
    <div style={{borderRight: '1px solid #999'}}>
      <div><strong>{runic} ({runic.length})</strong></div>
      <div><strong>{value} ({set.length})</strong></div>
      {items}
      </div>
  )
}

export default function Home() {
  const sets = wordValues.map(([lens, value, length, runic]) => {
    let set = expanded.filter(applyLens(lens, value))
    if (length > 0) {
      set = set.filter(applyRunicLength(length))
    }
    set = set.sort(applySort())
    return <SumSet set={set} value={value} runic={runic} />
  })


  return (
    <>
      <main style={{display: 'grid', gridTemplateColumns: 'repeat(12, auto)', gap: '1rem', padding: '0 1rem'}}>
        {sets}
      </main>
    </>
  )
}

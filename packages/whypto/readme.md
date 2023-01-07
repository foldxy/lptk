`\\'  === === * = Crack that whypto = * === ==='//`


```javascript
const Whypto = require('./index')

const a_warning_text = 'ᚱ-ᛝᚱᚪᛗᚹ'
const a_koan_text = 'ᚹ-ᚣᛠᚹᛟ'
const emerge_text = 'ᚪᚾᛞ-ᛖᛗᛖᚱᚷᛖ'

Whypto.factory(a_warning_text)
  .atbash()
  .printLatin('Example 1')

/* output:
Example 1
A-WARNING
*/


Whypto.factory(a_koan_text, { verbose: true })
  .caesar(3)
  .atbash()
  .printLatin()

/* output:
[OP]	Caesar > decipher(3)
[OP]	Atbash
Latin Text
A-COAN
*/

Whypto.factory(emerge_text)
  .printLatin('Example 3')

/* output
Example 3
AND-EMERGE
*/
```
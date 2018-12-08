# ascii-control-char-codes

[![npm version](https://img.shields.io/npm/v/ascii-control-char-codes.svg)](https://www.npmjs.com/package/ascii-control-char-codes)
[![Build Status](https://travis-ci.com/shinnn/ascii-control-char-codes.svg?branch=master)](https://travis-ci.com/shinnn/ascii-control-char-codes)

All character codes of ASCII control characters

```javascript
import asciiControlCharacterCodes from 'ascii-control-char-codes';

asciiControlCharacterCodes; //=> [0, 1, ... 31, 127]

// '\n' is one of the ASCII control characters
asciiControlCharacterCodes.includes('\n'.charCodeAt(0)); //=> true

// 'A' is not a control character
asciiControlCharacterCodes.includes('A'.charCodeAt(0)); //=> false
```

## Installation

[Use](https://docs.npmjs.com/cli/install) [npm](https://docs.npmjs.com/about-npm/).

```
npm install ascii-control-char-codes
```

## API

### caretNotationCharacters

Type: `integer[]`

## License

[Creative Commons Zero v1.0 Universal](https://creativecommons.org/publicdomain/zero/1.0/deed)

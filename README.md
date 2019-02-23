# siffror.js
Parse cardinal numbers in Swedish

## Install

    $ npm install siffror.js

## Usage

```javascript
    const s = require('siffror.js');
    const res = s.parse("åttahundraåttioåttatusenåttahundraåttioåtta");
    console.log(res);
    // > 888888
```

## Limitations

Currently only positive integers are supported. Whitespace should be removed from the input string.

## License

MIT

## Author

Karl Larsaeus, &lt;karl@ninjacontrol.com&gt;



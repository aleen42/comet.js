## comet.js

**comet.js** is a lightweight class implementation for handling continuous Ajax in JavaScript. For instance, we can use such a technology to subscribe topics published when a QR code is scanned by some one.

What after that is actually a polling process, calling methods in an interval.

```js
import Comet from 'comet-js';

const comet = new Comet(
	/** subscribe URL */'xxx',
	/** sleep time */2000,
	/** times for polling */20
);

comet.subscribe(/** post data */{}, /** validate functions */result => !!isValid(result), data => {
	/** callback when result is validated */
}).run();
```

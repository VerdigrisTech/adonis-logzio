# adonis-logzio

Logz.io logger provider for AdonisJs.

This package allows Logz.io as the transporter of your logs. It is intended for
use with AdonisJs framework.

## Installation

```console
adonis install @verdigris/adonis-logzio

# yarn users
adonis install @verdigris/adonis-logzio
```

Next step is to register the provider as shown below:

```javascript
const providers = [
  '@verdigris/adonis-logzio/providers/LogzioProvider'
];
```

Now, you are all set to make use of this provider. Just make sure to define the
required configuration and set transporter=logzio.

## Config

```javascript
module.exports = {
  logger: {
    transport: 'logzio',

    logzio: {
      token: 'LOGZIO_TOKEN',
      host: 'listener.logz.io',
      type: 'YourLogType'     // OPTIONAL (If none is set, it will be 'nodejs')
    }
  }
}
```

Further configuration options are available here:
[https://app.logz.io/#/dashboard/data-sources/nodejs-winston](https://app.logz.io/#/dashboard/data-sources/nodejs-winston)

## License

This software is distributed AS IS WITHOUT WARRANTY under Simplified BSD
license.

Verdigris Technologies Inc. assumes NO RESPONSIBILITY OR LIABILITY UNDER ANY
CIRCUMSTANCES for usage of this software. See the
[LICENSE](https://github.com/VerdigrisTech/adonis-logzio/blob/master/LICENSE)
file for detailed legal information.

---

Copyright © 2018 Verdigris Technologies, Inc. All rights reserved.

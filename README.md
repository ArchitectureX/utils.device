# @architecturex/utils.device

## device

A utility module for detecting device types, brands, orientation, language, and more. Suitable for both client-side and server-side (SSR) scenarios.

### Installation

`npm install @architecturex/utils.device`

### Features

- Detect device type (Mobile, Tablet, Desktop)
- Detect brand (Apple, Android, Microsoft, etc.)
- Determine screen orientation (Portrait or Landscape)
- Fetch preferred language and list of supported languages
- Simplified checking through the is method

### Usage

```javascript
import device from '@architecturex/utils.device'
```

#### Detecting Device Type:

```javascript
const type = device.type()
console.log(type) // Outputs: 'Mobile', 'Tablet', 'Desktop', or 'Unknown'
```

#### Detecting Brand:

```javascript
const brand = device.brand()
console.log(brand) // Outputs: 'Apple', 'Android', 'Microsoft', etc. or null
```

#### Checking Orientation:

```javascript
const orientation = device.orientation()
console.log(orientation) // Outputs: 'Portrait', 'Landscape', or Unknown
```

#### Fetching Language:

```javascript
const language = device.language()
console.log(language) // Outputs: 'en-US', 'en-GB', 'fr-FR', etc. or null
```

#### Fetching Supported Languages:

```javascript
const languages = device.languages()
console.log(languages) // Outputs: ['en-US', 'en-GB', 'fr-FR', etc.]
```

#### Using the `is`` Method:

```javascript
const isMobile = device.is('mobile')
console.log(isMobile) // Outputs: true or false

const isTablet = device.is('tablet')
console.log(isTablet) // Outputs: true or false

const isDesktop = device.is('desktop')
console.log(isDesktop) // Outputs: true or false

const isApple = device.is('apple')
console.log(isApple) // Outputs: true or false

const isAndroid = device.is('android')
console.log(isAndroid) // Outputs: true or false

const isMicrosoft = device.is('microsoft')
console.log(isMicrosoft) // Outputs: true or false

const isPortrait = device.is('portrait')
console.log(isPortrait) // Outputs: true or false

const isLandscape = device.is('landscape')
console.log(isLandscape) // Outputs: true or false

const isEnglish = device.is('english')
console.log(isEnglish) // Outputs: true or false

const isChrome = device.is('chrome')
console.log(isChrome) // Outputs: true or false

const isFirefox = device.is('firefox')
console.log(isFirefox) // Outputs: true or false

const isSafari = device.is('safari')
console.log(isSafari) // Outputs: true or false

const isOpera = device.is('opera')
console.log(isOpera) // Outputs: true or false

const isIE = device.is('ie')
console.log(isIE) // Outputs: true or false

const isEdge = device.is('edge')
console.log(isEdge) // Outputs: true or false

const isBot = device.is('bot')
console.log(isBot) // Outputs: true or false
```

### Notes:

For server-side scenarios, you can pass request headers or user agents as arguments to appropriate methods to simulate the browser context.

### Contribution

Feel free to suggest improvements, report issues, or contribute to enhancing this utility. Your feedback and contributions are welcome!

# Block Button Extension

This is a simple browser extension that adds a "Block" button to every tweet on Twitter. It allows users to easily block a Twitter user directly from their tweets.

## Overview

The extension consists of the following files:

- `manifest.json`: Describes the extension and its settings.
- `block.js`: Contains the JavaScript code to add the "Block" button functionality to tweets.
- `block.css`: Contains the CSS styling for the "Block" button.
- `block-twitter-icon.png`: The icon displayed for the extension.

## Usage

1. Install the extension in your browser.
2. Go to [Twitter](https://twitter.com/) and log in to your account.
3. The "Block" button will be visible on every tweet, next to the "Like" button.
4. Click the "Block" button to block the user who posted the tweet.

## Files

### `manifest.json`

This file is the manifest for the browser extension. It includes the extension's name, version, description, and other settings. It also specifies the JavaScript and CSS files that will be injected into the Twitter website.

### `block.js`

This JavaScript file contains the logic for adding the "Block" button to each tweet on Twitter. It listens for the addition of new tweets to the page, clones the "Like" button, and modifies it to create the "Block" button. The new button is then added next to the "Like" button. When clicked, it will block the user who posted the tweet.

### `block.css`

This CSS file contains the styling for the "Block" button. It defines the color and hover state of the button.

### `block-twitter-icon.png`

This image file is the icon for the browser extension. It is used in various places, such as the browser's toolbar and the extension management page.

## Contributing

We welcome contributions to improve this extension! Please feel free to open an issue or submit a pull request on the project's GitHub repository.
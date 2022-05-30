# card-template

Base card template for [GFT](https://gft.xyz) cards.

## Usage instructions

1. Clone this repository and check it out locally.
1. Run `yarn` to install dependencies.
1. Run `yarn build-watch` in a terminal to build your card and watch for changes
1. Run `yarn serve` in a separate terminal to see how your card looks in the browser at http://localhost:58080. This also watches for changes to the `public` folder where the built card code gets output.
1. Make edits to the files in `src/` _(see "Architecture" below)_.
1. Once your card is ready, commit your changes and push to remote.
1. [Tell us](https://gft.xyz) about your card and we will revew it.

## Architecture

GFT cards are HTML pages. The page contains an `IFRAME` tag that points to the card template HTML. Upon load the root page _injects_ the GFT 
data object into the child frame using [cross-window messaging](https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage). The child 
frame passes this data to the `window.setGift()` method.

When developing your own card you don't have to deal with any of this plumbing. This is all taken care of by our [shared JS lib](https://githhub.com/sendgf/shared.js). This is referenced in `src/index.html` in the following lines (which you should NOT modify):


```html
<!-- BEGIN: DO NOT MODIFY -->
<script type="text/javascript" src="./index.js"></script>
<script type="text/javascript"
src="https://ipfs.gft.xyz/ipfs/QmQvuV3MbZy73bi7GYukfnBf5GupMz8unC4a49op8VHgvp/shared.js"></script>
<!-- END: DO NOT MODIFY -->
```

All the other lines in `src/index.html` can be modified as you see fit.

The `src/index.js` file contains the `window.setGift()` method. Do not change the signature or scope of this method. Feel free to add other 
code and functions as you see fit:

```js
window.setGift = (gift /* typeof gift === Gift */) => {
  /* your code here */
}
```

Feel free to modify the [webpack config](), add more files and external assets, or use a JS framework with different build tooling. Just ensure the following:

* The entrypoint for the card is `public/card/index.html` - this is the file the outer root page expects to exist.
* All assets (images, JS libs, fonts, etc) must be bundled locally into the `publi/card` folder so that they can all be stored on IPFS together. Our cards must be decentralized and thus they cannot be linking to assets not on IPFS.

## License

MIT
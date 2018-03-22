# storybook-decorators

![Latest version in npm](https://img.shields.io/npm/v/storybook-decorators.svg)

**The project is in initial development**. More decorators and documentation will be added.

Storybook-decorators provides common [Storybook](https://storybook.js.org) decorators for enhancing the prototyping experience. Decorators are independent of each other meaning it is possible to use only a subset of the decorators provided. The library also provides a `compose` function for composing decorators in natural order.

## Usage

First, add `storybook-decorators` add a dependency to your project:

`$ npm install --save --dev storybook-decorators`

In your story files, import and use the decorators you want:

```javascript
import {storiesOf} from "@storybook/react";
import {background, centered, compose} from "storybook-decorators";

// Using compose is not required, but it flips the application order for the decorators and thus is more natural to read.
const decorate = compose(background, centered);

storiesOf("SomeComponent", module)
  .addDecorators(decorate)
  .add("Story 1", () => <div>Story 1</div>);
```

## License

MIT

import { configure } from "@storybook/react";

function main() {
  require("../ExampleComponent.story.js");
}

configure(main, module);

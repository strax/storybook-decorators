import { configure } from "@storybook/react";

function main() {
  require("../test/ExampleComponent.story.js");
}

configure(main, module);

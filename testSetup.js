require("jest-styled-components");
const Enzyme = require("enzyme");
const React16Adapter = require("enzyme-adapter-react-16");

Enzyme.configure({ adapter: new React16Adapter });

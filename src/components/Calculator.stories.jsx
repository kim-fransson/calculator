import Calculator from "./Calculator";

export default {
  name: "Calculator",
  component: Calculator,
};

export const Template = (args) => <Calculator {...args} />;

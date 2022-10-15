import Display from "./Display";

export default {
  name: "Display",
  component: Display,
};

const Template = (args) => <Display {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const OneValue = Template.bind({});
OneValue.args = { previousOperand: "9", currentOperand: "9" };

export const Addition = Template.bind({});
Addition.args = { previousOperand: "9+9", currentOperand: "9" };

export const Equals = Template.bind({});
Equals.args = { previousOperand: "9+9=18", currentOperand: "18" };

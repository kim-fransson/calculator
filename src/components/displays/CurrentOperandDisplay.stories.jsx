import CurrentOperandDisplay from "./CurrentOperandDisplay";

export default {
  title: "CurrentOperandDisplay",
  component: CurrentOperandDisplay,
};

const Template = (args) => <CurrentOperandDisplay {...args} />;

export const Minimal = Template.bind({});
Minimal.args = { currentOperand: "9" };

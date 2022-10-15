import PreviousOperandDisplay from "./PreviousOperandDisplay";

export default {
  title: "PreviousOperandDisplay",
  component: PreviousOperandDisplay,
};

const Template = (args) => <PreviousOperandDisplay {...args} />;

export const Minimal = Template.bind({});
Minimal.args = { previousOperand: "9" };

export const Longer = Template.bind({});
Longer.args = { previousOperand: "9+9/6-1=9.5" };

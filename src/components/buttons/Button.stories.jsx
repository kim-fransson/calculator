import Button from "./Button";

export default {
  title: "Button",
  component: Button,
  argTypes: {
    color: {
      options: ["dark-gray", "light-gray", "blue", "red"],
      control: { type: "radio" },
    },
    label: {
      options: [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "AC",
        "/",
        "x",
        "-",
        "+",
        "=",
      ],
    },
    type: {
      options: ["cube", "horizontal", "vertical"],
    },
  },
};

const Template = (args) => <Button {...args} />;

export const Number = Template.bind({});
Number.args = { color: "dark-gray", type: "cube", label: "1" };

export const Clear = Template.bind({});
Clear.args = { color: "red", type: "horizontal", label: "AC" };

export const Equals = Template.bind({});
Equals.args = { color: "blue", type: "vertical", label: "=" };

export const Operator = Template.bind({});
Operator.args = { color: "light-gray", type: "cube", label: "/" };

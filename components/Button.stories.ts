export default {
  title: "Button",
  component: "Button",
  argTypes: {},
};

export const Button = (arg, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `
      <Button />`,
});

// .storybook/main.js

module.exports = {
  stories: [
    "../components/**/*.stories.mdx",
    "../components/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: ["@storybook/addon-essentials"],
  framework: "@storybook/vue3",
  core: {
    builder: "@storybook/builder-vite",
  },
};

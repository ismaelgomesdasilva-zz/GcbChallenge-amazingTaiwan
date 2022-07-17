import { Story, ComponentMeta } from "@storybook/react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { Header } from ".";

export default {
  title: "Components/Header",
  component: Header,
  parameters: {
    layout: "fullscreen",
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
    backgrounds: {
      values: [
        {
          name: "desktop",
          value: "#FFFFF",
        },
        {
          name: "mobile",
          value: "#FFFFF",
        },
      ],
    },
  },
} as ComponentMeta<typeof Header>;

const Template: Story = (args) => (
  <Header {...args}></Header>
);

export const Default = Template.bind({});
Default.args = {
  
};
Default.parameters = {
  backgrounds: { default: "desktop" },
};
Default.decorators = [
  (Story) => {
    return (
      <div
        style={{
          
          display: "flex",
          justifyContent: "center",
          height: "30rem",
          alignItems: "center",
        }}
      >
        <Story />
      </div>
    );
  },
];

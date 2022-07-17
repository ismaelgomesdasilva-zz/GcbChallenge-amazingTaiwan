import { Story, ComponentMeta } from "@storybook/react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { Headeresponsive } from ".";

export default {
  title: "Components/Header",
  component: Headeresponsive,
  parameters: {
    layout: "fullscreen",
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'iphonex'
      
    },
    backgrounds: {
      values: [
        {
          name: "mobile",
          value: "#FFFFF",
        },
      ],
    },
  },
} as ComponentMeta<typeof Headeresponsive>;

const Template: Story = (args) => (
  <Headeresponsive {...args}></Headeresponsive>
);

export const Mobile = Template.bind({});
Mobile.args = {
  
};

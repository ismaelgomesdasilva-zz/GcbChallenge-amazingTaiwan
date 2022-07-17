import { Story, ComponentMeta } from "@storybook/react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { Carousel } from ".";

export default {
  title: "Components/Carousel",
  component: Carousel,
  parameters: {
    layout: "fullscreen",
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
    backgrounds: {
      values: [
        {
          name: "desktop",
          value: "#293241",
        },
        {
          name: "mobile",
          value: "#293241",
        },
      ],
    },
  },
} as ComponentMeta<typeof Carousel>;

const Template: Story = (args) => (
  <Carousel {...args}/>
);

export const Desktop = Template.bind({});
Desktop.args = {
  title: 'Desktop',
  width: 277,
  height: 408,
  traveling:56, 
  starlength:5,
  src:'/uimagehere.svg',
};
Desktop.parameters = {
  backgrounds: { default: "desktop" },
};
Desktop.decorators = [
  (Story) => {
    return (
      <div
        style={{
          margin: '2rem auto',
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

export const Mobile = Template.bind({});
Mobile.args = {
  title: 'Mobile',
  width: 277,
  height: 408,
  traveling:56, 
  starlength:5,
  src:'/uimagehere.svg',
};
Mobile.parameters = {
  viewport: {
    defaultViewport: "iphonex",
  },
  backgrounds: { default: "mobile" },
};
Mobile.decorators = [
  (Story) => {
    return (
      <div
        style={{
          margin: '2rem auto',
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
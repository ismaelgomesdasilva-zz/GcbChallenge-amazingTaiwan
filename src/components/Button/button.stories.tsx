
import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { Button } from '.';


export default {
  title: 'Components/Button',
  component: Button,
  
} as ComponentMeta<typeof Button>;
const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
   title:"Button",
  
};
export const Secondary = Template.bind({});
Secondary.args = {
   title:"Button",
    color:'#293241',
};



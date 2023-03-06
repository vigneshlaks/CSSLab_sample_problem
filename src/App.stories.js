import React from 'react';
import Button from './Button';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Button',
  component: Button,
  args: {
    buttonText: 'click me',
  },
};

const Template = (args) => <Button {...args} onClick={action('clicked')} />;

export const Default = Template.bind({});
Default.args = {
  onClick: () => console.log('Default Button clicked!'),
  buttonText: 'click me',
};

export const ClickMe = Template.bind({});
ClickMe.args = {
  onClick: () => console.log('thanks Button clicked!'),
  buttonText: 'click me',
};

export const DefaultButton = Template.bind({});

export const ThanksButton = Template.bind({});
ThanksButton.args = {
  buttonText: 'thanks',
};
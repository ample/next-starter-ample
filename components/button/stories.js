import React from 'react';

import { component as Button, fixtures } from '.';

export default {
  argTypes: {
    theme: {
      control: { type: 'select' },
    },
    type: {
      control: { type: 'select' },
    },
  },
  component: Button,
  parameters: {
    docs: {
      description: {
        component:
          'The button has several predefined themes and either renders as an `<a>` or `<button>` tag depending on the props that are used.',
      },
    },
  },
  title: 'Components/Button',
};

const Template = (args) => <Button {...args} />;

export const props = Template.bind({});
props.args = fixtures.props;

export const defaultTheme = Template.bind({});
defaultTheme.args = {
  ...props.args,
  ...fixtures.default,
};

export const outlineTheme = Template.bind({});
outlineTheme.args = {
  ...props.args,
  ...fixtures.outline,
};

export const ArrowTheme = Template.bind({});
ArrowTheme.args = {
  ...props.args,
  ...fixtures.arrow,
};

import React from 'react';
import { action } from '@storybook/addon-actions';
import { addDecorator, addParameters } from '@storybook/react';
import { setConsoleOptions } from '@storybook/addon-console';
import { themes } from '@storybook/theming';
import { withTests } from '@storybook/addon-jest';
import results from '../.jest-test-results.json';

// ---------------------------------------------------------

import './storybook.scss';
import '../styles/libs/sanitize.scss';
import '../styles/global-styles.scss';

// ---------------------------------------------------------

// Storybook addon for redirecting console output into action logger panel
setConsoleOptions({
  panelExclude: [],
});

addParameters({
  jest: ['test.spec.js'],
});

addDecorator(
  withTests({
    results,
  })
);

addDecorator((story) => <>{story()}</>);

// ---------------------------------------------------------

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: { sort: 'alpha' },
  backgrounds: {
    default: 'light',
    grid: {
      disable: true,
    },
  },
};

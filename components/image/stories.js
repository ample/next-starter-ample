import React from 'react';

// ---------------------------------------------------------

import { component as Image, fixtures } from '.';

export default {
  component: Image,
  parameters: {
    docs: {
      description: {
        component:
          'The `<Image />` component optimizes and renders either raster or vector graphics and handles if the image is a link.',
      },
    },
  },
  title: 'Components/Image',
};

// ---------------------------------------------------------

const Template = (args) => {
  let layout = args.layout;

  const widthAndHeight = layout === 'fill' || !layout;

  return (
    <div
      style={{
        height: widthAndHeight ? '400px' : undefined,
        minHeight: '500wh',
        minWidth: '50vw',
        width: widthAndHeight ? '600px' : undefined,
      }}
    >
      <Image {...args} />
    </div>
  );
};

// ---------------------------------------------------------

export const componentProps = Template.bind({});
componentProps.args = fixtures.componentProps;

export const layoutIsFill = Template.bind({});
layoutIsFill.args = {
  ...fixtures.layoutIsFill,
};
layoutIsFill.parameters = {
  docs: {
    description: { story: 'Grow in both X and Y axes to fill container.' },
  },
};

export const layoutIsFixed = Template.bind({});
layoutIsFixed.args = fixtures.layoutIsFixed;
layoutIsFixed.parameters = {
  docs: {
    description: { story: 'Sized to width and height exactly.' },
  },
};

export const layoutIsIntrinsic = Template.bind({});
layoutIsIntrinsic.args = fixtures.layoutIsIntrinsic;
layoutIsIntrinsic.parameters = {
  docs: {
    description: {
      story: 'Scale down to fit width of container, up to image size.',
    },
  },
};

export const layoutIsResponsive = Template.bind({});
layoutIsResponsive.args = fixtures.layoutIsResponsive;
layoutIsResponsive.parameters = {
  docs: {
    description: { story: 'Scale to fit width of container.' },
  },
};

export const withLink = Template.bind({});
withLink.args = fixtures.withLink;

export const withSVG = Template.bind({});
withSVG.args = fixtures.withSVG;
withSVG.parameters = {
  docs: {
    description: {
      story:
        'If a .svg is passed into the Image component the SVG is injected into the DOM using react-svg.',
    },
  },
};

const buttonProps = {
  children: 'Call to action',
  theme: 'arrow',
  url: '#',
};

// ---------------------------------------------------------

export default {
  componentProps: {
    ...buttonProps,
  },
  themeArrow: {
    ...buttonProps,
  },
  themeDefault: {
    ...buttonProps,
    theme: 'default',
  },
  themeOutline: {
    ...buttonProps,
    theme: 'outline',
  },
};

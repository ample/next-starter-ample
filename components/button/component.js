import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

// ---------------------------------------------------------

import Icon from '@components/icon';
import Link from '@components/link';

// ---------------------------------------------------------

import {
  button,
  theme_arrow,
  theme_default,
  theme_outline,
} from './styles.module.scss';

const themeOptions = {
  arrow: theme_arrow,
  default: theme_default,
  outline: theme_outline,
};

// ---------------------------------------------------------

const Button = (props) => {
  let { children, className, theme, title, url } = props;

  // -------------------------------------------------------

  const classes = classNames(button, {
    [className]: className,
    [themeOptions[theme]]: themeOptions[theme],
  });

  // -------------------------------------------------------

  return (
    <Link className={classes} title={title} url={url}>
      {children}
      {theme === 'arrow' && <Icon name="arrow-right" />}
    </Link>
  );
};

// ---------------------------------------------------------

Button.propTypes = {
  /**
   * Specifies the content that's rendered inside the button.
   */
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),

  /**
   * Specifies the theme.
   */
  theme: PropTypes.oneOf(Object.keys(themeOptions)),

  /**
   * Specifies additional information about the button.
   */
  title: PropTypes.string,

  /**
   * Specifies where to link.
   */
  url: PropTypes.string.isRequired,
};

Button.defaultProps = {
  theme: 'default',
};

export default Button;

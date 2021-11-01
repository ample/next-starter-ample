import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Link from 'next/link';

// ---------------------------------------------------------

import SVG from '../svg';

// ---------------------------------------------------------

import { button, theme_arrow, theme_default, theme_outline } from './styles.module.scss';

const themeOptions = {
  arrow: theme_arrow,
  default: theme_default,
  outline: theme_outline
};

// ---------------------------------------------------------

const Button = ({ children, className, theme, title, url }) => {
  const classes = classNames(button, {
    [className]: className,
    [themeOptions[theme]]: themeOptions[theme]
  });

  return (
    <Link href={url}>
      <a className={classes} title={title}>
        {children}
        {theme === 'arrow' && <SVG name="angle-right" />}
      </a>
    </Link>
  );
};

Button.propTypes = {
  /**
   * Text rendered to the screen inside the button.
   */
  children: PropTypes.string.isRequired,

  /**
   * Specifies the theme.
   */
  theme: PropTypes.oneOf(Object.keys(themeOptions)),

  /**
   * Specifies the title attribute
   */
  title: PropTypes.string,

  /**
   * Specifies the href attribute
   */
  url: PropTypes.string.isRequired
};

Button.defaultProps = {
  theme: 'default'
};

export default Button;

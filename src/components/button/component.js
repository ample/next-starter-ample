import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"
import Link from "next/link"

import SVG from "../svg"

import styles from "./styles.module.scss"

const Button = ({ children, className, title, theme, url }) => {
  const classes = classNames(styles.button, {
    [className]: className,
    [styles[`theme_${theme}`]]: theme
  })

  return (
    <Link href={url}>
      <a className={classes} title={title}>
        {children}
        {theme === "arrow" && <SVG name="angle-right" />}
      </a>
    </Link>
  )
}

Button.propTypes = {
  /**
   * Specifies additional class names
   */
  className: PropTypes.string,
  /**
   * Text rendered to the screen inside the button.
   */
  children: PropTypes.string.isRequired,
  /**
   * Specifies the theme of button
   */
  theme: PropTypes.oneOf(["arrow", "default", "outline"]),
  /**
   * Specifies the button title attribute
   */
  title: PropTypes.string,
  /**
   * Specifies where the button links
   */
  url: PropTypes.string.isRequired
}

Button.defaultProps = {
  theme: "default"
}

export default Button

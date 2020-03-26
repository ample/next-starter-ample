import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames/bind"
import Link from "next/link"

import styles from "./styles.module.scss"

const Button = ({ className, label, title, url }) => {
  const classes = classNames(styles.button, {
    [className]: className
  })

  return (
    <Link href={url}>
      <a className={classes} title={title}>
        {label}
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
   * Specifies the button text
   */
  label: PropTypes.string.isRequired,
  /**
   * Specifies the button title attribute
   */
  title: PropTypes.string,
  /**
   * Specifies where the button links
   */
  url: PropTypes.string.isRequired
}

Button.defaultProps = {}

export default Button

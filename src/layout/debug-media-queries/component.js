import React, { useState } from "react"

import classNames from "classnames"

import styles from "./styles.module.scss"

import getConfig from "next/config"
const { publicRuntimeConfig } = getConfig()
const { DEBUG_MEDIA_QUERIES } = publicRuntimeConfig

const DebugMediaQueries = () => {
  if (DEBUG_MEDIA_QUERIES !== "true") return null

  const [isOpen, setOpen] = useState(false)

  const classes = classNames(styles.debug, isOpen, {
    [styles.is_showing]: isOpen
  })

  const handleClick = () => {
    setOpen(!isOpen)
  }

  return (
    <div className={classes} onClick={handleClick} aria-hidden="true">
      <div className={styles.debug_media_queries} />
    </div>
  )
}

export default DebugMediaQueries

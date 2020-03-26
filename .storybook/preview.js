import React from "react"
import { addDecorator, addParameters } from "@storybook/react"
import { withA11y } from "@storybook/addon-a11y"

import "./storybook.css"
import "../src/styles/libs/sanitize.css"
import "../src/styles/global-styles.scss"
import "../src/styles/global-utilities.scss"

addParameters({
  options: {
    showRoots: true
  },
  previewTabs: {
    // TODO: Have Docs be the default tab and URL for Storybook
    // order of the tabs
    canvas: null,
    "storybook/docs/panel": null
  }
})

addDecorator(withA11y)
addDecorator((story) => <>{story()}</>)

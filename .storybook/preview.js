import React from "react"
import { addDecorator, addParameters } from "@storybook/react"
import { withA11y } from "@storybook/addon-a11y"

import { withTests } from "@storybook/addon-jest"
import results from "../.jest-test-results.json"

import "./storybook.scss"
import "../src/styles/libs/sanitize.scss"
import "../src/styles/global-styles.scss"
import "../src/styles/global-utilities.scss"

addParameters({
  options: {
    showRoots: true
  },
  jest: ["test.spec.js"]
})

addDecorator(withA11y)
addDecorator(
  withTests({
    results
  })
)
addDecorator((story) => <>{story()}</>)

export const parameters = {
  layout: "centered"
}

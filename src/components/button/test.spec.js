import React from "react"
import renderer from "react-test-renderer"

import Button from "./"

describe("Component", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Button label="testing" url="/" />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})

import React from "react"

import { mount } from "enzyme"

import Section from "./Section.view"

describe(`Section`, () => {
  it(`should render one <section>`, () => {
    const wrapper = mount(<Section>section</Section>)

    expect(wrapper.find("section")).toHaveLength(1)
  })
})

import React from 'react' // import react
import { render, fireEvent } from '@testing-library/react' // import testing library with render method and fireEvent

import Dropdown from '../dropdown' // import the component that you are testing

// the test below is checking when a prop is passed in whether or not the activatorText is set

describe(`Dropdown`, () => {
  it(`renders activatorText`, () => {
    const activatorText = `Hamburgers`
    const { getByText } = render(<Dropdown activatorText={activatorText} />)
    
    const text = getByText(activatorText)
    
    expect(text).toBeInTheDocument()
  })
  it(`renders a focusable button that activates the dropdown`, () => {
    const activatorText = `Dogs`
    const items = [{
      text: 'item1',
      url: '#'
    }, {
      text: 'item2',
      url: '#'
    }]
    const dropdown = render(<Dropdown activatorText={activatorText} items={items} />)

    const activator = dropdown.getByTestId('dropdown-activator')
    activator.focus()

    expect(activator.toHaveFocus)

    fireEvent.click(activator)
  })
})

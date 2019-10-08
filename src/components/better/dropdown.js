import React, { useState, useRef, useEffect } from "react"
import uuid from "uuid"

import "./dropdown.scss"

const Dropdown = ({ activatorText = 'Dropdown', items = [] }) => {
    const activatorRef = useRef(null)
    const dropdownListRef = useRef(null)
    const [isOpen, setIsOpen] = useState(false)

    const keyHandler = (event) => {
        if (event.key === 'Escape' && isOpen) {
            // escape key
            setIsOpen(false)
            activatorRef.current.focus()
        }
    }
    const clickHandler = (event) => {
        setIsOpen(!isOpen)
    }
    const clickOutsideHandler = (event) => {
        if (dropdownListRef.current.contains(event.target) || activatorRef.current.contains(event.target)) {
            return
        }
        setIsOpen(false)
    }
    useEffect(() => { // React hook accepts a callback function https://reactjs.org/docs/hooks-reference.html#useeffect
        if (isOpen) {
            if (dropdownListRef) {
            dropdownListRef.current.querySelector('a').focus() // get the first item in the <ul>
        }
            
            document.addEventListener('mousedown', clickOutsideHandler)
        } else {
            document.removeEventListener('mousedown', clickOutsideHandler)
        }

        return () => {
            document.removeEventListener('mouseup', clickOutsideHandler)
        }
    }, [isOpen])
    return (
        <div
            className="dropdown-wrap"
            onKeyUp={keyHandler}
        >
            <button
                aria-haspopup="true" // aria-haspopup is used to indicate that the button will open the <ul> below FOR Screen Readers
                aria-controls="dropdown1" // mixed support, binds with ID of another element, in this case the <ul> below
                data-testid="dropdown-activator" // an id to use for testing
                onClick={clickHandler}
                ref={activatorRef}
                className="dropdown-activator"
            >
                {activatorText}
            </button>
            <ul
                id="dropdown1"
                ref={dropdownListRef}
                // tabIndex="-1" // makes the list focusable
                className={`dropdown-itemList ${isOpen ? 'active' : ''}`}
                role="list"
                data-testid="dropdown-itemList" // an id to use for testing
                >
                { items.map((item, index) => {
                    return <li key={index} role="listitem">
                        <a href={item.url}>{item.text}</a>
                    </li>
                })}
                { items.length === 0 ? <li>No items</li> : null }
            </ul>
        </div>
    )
}
export default Dropdown

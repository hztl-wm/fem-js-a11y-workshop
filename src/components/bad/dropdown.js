
// there is no focus management or focusability in this component

import React, { useState, useRef, useEffect } from "react"
import uuid from "uuid"

import  "./dropdown.scss"

const Dropdown = ({ activatorText, items = [] }) => {
    const [isOpen, setIsOpen] = useState(false)
    const activatorRef = useRef()
    const listRef = useRef()

    const handleClick = () => {
        setIsOpen(!isOpen)
    }
    const handleClickOutside = (event) => {
        if (listRef.current.contains(event.target) || activatorRef.current.contains(event.target)) {
            return
        }
        setIsOpen(false)
    }
    useEffect(() => {
        if (isOpen) {
          document.addEventListener("mousedown", handleClickOutside)
        } else {
          document.removeEventListener("mousedown", handleClickOutside)
        }
        // clean up on unmount
        return function cleanup() {
          document.removeEventListener("mousedown", handleClickOutside)
        }
      }, [isOpen])
    return (
        <div
            className="wrap"
        >
            {/* A <span> with an onClick is not a focusable element */}
            <span
                ref={activatorRef}
                className="activator"
                onClick={handleClick}
            >
                { activatorText + '' }
            </span>
            {/* items in a <div> are not countable, this is not accessible for screen readers */}
            <div
                ref={listRef}
                id={`list${uuid.v4()}`}
                className={
                    `itemList ` +
                    (isOpen ? 'active' : null)
                }
            >
                {items.map((item, index) => {
                    return <div key={index}>
                        <a href={item.url}>item.text</a>
                    </div>
                })}
            </div>
        </div>
    )
}
export default Dropdown

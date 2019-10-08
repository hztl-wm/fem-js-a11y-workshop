import React, { useEffect, useState } from 'react'

const TabList = ({ items = [] }) => {
  const [isClient, setClient] = useState(false) // using react state
  /*
   * Think of this as componentDidMount
   * on the client, it will run once and update state
   */
  useEffect(() => { // using useEffect hook for sending focus to the first item in the drop down
    setClient(true)
  }, [])
  return (
    <ul role={ isClient ?  `tablist` : `list` }> {/* add an ARIA role, JavaScript on? role is 'tablist' JavaScript off? role is 'list', something to do with Safari (https://www.scottohara.me/blog/2019/01/12/lists-and-safari.html) */}
      {items.map(item => ( // map over item list
        <li key={item.id} {...isClient && { role: `tab` }}> {/* create li for each item, set unique key for each and set the ARIA role */}
          {item.label}
        </li>
      ))}
    </ul>
  )
}

export default TabList
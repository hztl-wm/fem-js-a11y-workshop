import React, {useState, useRef} from "react"

const LiveRegion = () => {

  const [message, setMessage] = useState('Nothing here.') // state array with react hook useState
  const inputRef = useRef(null) // useRef returns a mutable ref object whose .current property is initialized to the passed argument (initialValue). The returned object will persist for the full lifetime of the component.
  const submitHandler = (event) => {
    event.preventDefault() // prevents the default action of submitting the form
    setMessage(inputRef.current.value) // get the current dom node with .currrent, then its value with .value, set the message (from the state array on line 5) with setMessage
  }
  return (
    <div>  {/* wrapper div */}
      <div role="status"> {/* this is similar to the aria-live="polite" attribute */}
        <p>{message}</p> {/* grabbing the message from state, typically this would come from props, but not for this thing, not now */}
      </div>
      <form onSubmit={submitHandler}> {/* basic form component, the onSubmit (defined above) prevents the form from being automatically submitted */}
        <label> {/* label for input */}
          Enter text<br/>
          <input type="text" ref={inputRef}/> {/* input field with type specified, then grab that ref by the input */}
        </label>
        <button type="submit">Start</button> {/* this is a button. adding type="submit" allows the user to hit enter and have the form... submit */}
      </form>
    </div>
  )
}

export default LiveRegion
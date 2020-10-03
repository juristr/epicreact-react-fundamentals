// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import React from 'react'

function UsernameForm({onSubmitUsername}) {
  const [error, setError] = React.useState(null)
  const userNameRef = React.useRef('')

  const handleSubmit = ev => {
    ev.preventDefault()
    onSubmitUsername(userNameRef.current.value)
  }

  const handleChange = ev => {
    const isValid = ev.target.value === ev.target.value.toLowerCase()
    setError(isValid ? null : 'Username must be lower case')
  }

  //
  // 🐨 get the value from the username input (using whichever method
  // you prefer from the options mentioned in the instructions)
  // 💰 For example: event.target.elements[0]
  // 🐨 Call `onSubmitUsername` with the value of the input

  // 🐨 add the onSubmit handler to the <form> below

  // 🐨 make sure to associate the label to the input by specifying an `id` on
  // the input and a matching value as an `htmlFor` prop on the label.
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input ref={userNameRef} type="text" onChange={handleChange} />
        <div>{error}</div>
      </div>
      <button type="submit" disabled={Boolean(error)}>
        Submit
      </button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App

import React, { useState } from 'react'

const FormHandling = () => {
  // State to store input value
  const [name, setName] = useState("")

  // Runs every time user types in input
  const handleChange = (e) => {
    // e.target.value = current input value
    setName(e.target.value)
  }

  // Runs when form is submitted
  const handleSubmit = (e) => {
    // Prevents page reload on form submit
    e.preventDefault()

    // Shows the submitted value
    alert(`Your message is --> ${name}`)
  }

  return (
    <form onSubmit={handleSubmit}>
      
      <input
        type="text"
        value={name}              // Value comes from React state
        onChange={handleChange}   // Updates state on every keystroke
        placeholder="Enter your message"
        className="border-2 border-red-500 rounded-xl px-5 py-2"
      />

      <button
        type="submit"
        className="border-2 border-black mx-5 px-5 py-2 rounded-xl bg-green-500"
      >
        Submit
      </button>

    </form>
  )
}

export default FormHandling

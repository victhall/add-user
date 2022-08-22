import { useState } from "react"

export default function UserForm() {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');

  const nameChangeHandler = function (event) {
    setEnteredUsername(event.target.value)
  }

  const ageChangeHandler = function (event) {
    setEnteredAge(event.target.value)
  }

  const submitHandler = function (event) {
    ProgressEvent.preventDefault()

    const userData = {
      username: enteredUsername,
      age: enteredAge
    };

    setEnteredUsername('')
    setEnteredAge('')
  }


  return (
    <form >

      <div onSubmit={submitHandler}>

        <div>
          <label>Username</label>
          <input
            type='text'
            value={enteredUsername}
            onChange={nameChangeHandler} />
        </div>

        <div>
          <label>Age (Years)</label>
          <input
            type='number'
            value={enteredAge}
            onChange={ageChangeHandler} />
        </div>

      </div>
      <button type="submit">Add User</button>
    </form>
  )
}
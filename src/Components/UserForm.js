import { useState } from "react"
import Button from './Button'

export default function UserForm() {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');

  const usernameChangeHandler = function (event) {
    setEnteredUsername(event.target.value)
  }

  const ageChangeHandler = function (event) {
    setEnteredAge(event.target.value)
  }

  const submitHandler = function (event) {
    event.preventDefault()
    
    if (!enteredUsername.trim() || !enteredAge.trim()) {
      return;
    }

    //+ changes string to number
    if (+enteredAge < 1) {
      return;
    }

    console.log(enteredUsername, enteredAge)


    // const userData = {
    //   username: enteredUsername,
    //   age: enteredAge
    // };

    setEnteredUsername('')
    setEnteredAge('')
  }


  return (
    <form onSubmit={submitHandler}>

      <div>

        <div>
          <label>Username</label>
          <input
            type='text'
            value={enteredUsername}
            onChange={usernameChangeHandler} />
        </div>

        <div>
          <label>Age (Years)</label>
          <input
            type='number'
            value={enteredAge}
            onChange={ageChangeHandler} />
        </div>

      </div>
      <Button type="submit">Add User</Button>
    </form>
  )
}
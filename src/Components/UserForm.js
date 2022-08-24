import { useState } from "react"
import Button from './Button'
import ErrorModal from './ErrorModal'
import Wrapper from './Wrapper'

export default function UserForm(props) {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');
  const [error, setError] = useState();

  const usernameChangeHandler = function (event) {
    setEnteredUsername(event.target.value)
  }

  const ageChangeHandler = function (event) {
    setEnteredAge(event.target.value)
  }

  const submitHandler = function (event) {
    event.preventDefault()

    if (!enteredUsername.trim() || !enteredAge.trim() || +enteredAge < 1) { // <= + changes string to number
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age. (non-empty values)'
      })
      return;
    }
    props.onAddUser(enteredUsername, enteredAge)
    setEnteredUsername('')
    setEnteredAge('')
  }

  const errorHandler = function () {
    setError(null)
  }


  return (
   <Wrapper>
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
      <div>
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
      </div>
    </Wrapper>
  )
}
import { useState, useRef } from "react"
import Button from './Button'
import ErrorModal from './ErrorModal'
import Wrapper from './Wrapper'

export default function UserForm(props) {

  //Uncontrolled component - their internal state is not controlled by React
  const uNameInputRef = useRef();
  const ageInputRef = useRef();

  // const [enteredUsername, setEnteredUsername] = useState('');
  // const [enteredAge, setEnteredAge] = useState('');
  const [error, setError] = useState();

  // const usernameChangeHandler = function (event) {
  //   setEnteredUsername(event.target.value)
  // }

  // const ageChangeHandler = function (event) {
  //   setEnteredAge(event.target.value)
  // }

  const submitHandler = function (event) {
    event.preventDefault()

    const enteredUName = uNameInputRef.current.value;
    const enteredUAge = ageInputRef.current.value;

    if (!enteredUName.trim() || !enteredUAge.trim() || +enteredUAge < 1) { // <= + changes string to number
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age. (non-empty values)'
      })
      return;
    }
    props.onAddUser(enteredUName, enteredUAge)
    // setEnteredUsername('')
    // setEnteredAge('')

    //clears inputs after submission
    uNameInputRef.current.value = '';
    ageInputRef.current.value = '';
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
              id="username"
                type='text'
                // value={enteredUsername}
                // onChange={usernameChangeHandler}
                ref={uNameInputRef} />
            </div>

            <div>
              <label>Age (Years)</label>
              <input
              id="age"
                type='number'
                // value={enteredAge}
                // onChange={ageChangeHandler}
                ref={ageInputRef} />
            </div>

          </div>
          <Button type="submit">Add User</Button>
        </form>
      </div>
    </Wrapper>
  )
}
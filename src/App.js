import { useState } from "react";
import UserForm from './Components/UserForm'
import UserList from "./Components/UserList";

function App() {
  const [userList, setUserList] = useState([]);

  const addUserHandler = function (userName, userAge) {
    setUserList((prevUserList) => {
      return [...prevUserList,
      {
        username: userName,
        age: userAge,
        id: Math.random.toString()
      }]
    })
  }


  return (
    <>
      <UserForm onAddUser={addUserHandler} />
      <UserList users={userList} />
    </>
  );
}

export default App;

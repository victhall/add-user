import User from "./User"

export default function UserList(props) {
  return (
    props.users.map((user) => (
      <User
        username={user.username}
        age={user.age} />
    ))

  )
}
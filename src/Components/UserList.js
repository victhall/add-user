

export default function UserList(props) {
  return (
    <ul>
      {props.users.map((user) => (
          <li key={user.id}> {user.username} ({user.age} years old)</li>
      ))}
    </ul>
  )
}
import Button from "./Button"

export default function ErrorModal(props) {
  return <div>
  <header>
  <h2>{props.title}</h2>
  </header>
  <div>
    <p>{props.message}</p>
  </div>
  <footer>
    <Button onClick={props.onConfirm}>Okay</Button>
  </footer>
  </div>
}
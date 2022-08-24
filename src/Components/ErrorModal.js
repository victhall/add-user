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
//Modal portal

// import Button from "./Button"
// import ReactDOM from 'react-dom'

// const modalOverlay = function (props) {
//   return <>
//     <header>
//       <h2>{props.title}</h2>
//     </header>
//     <div>
//       <p>{props.message}</p>
//     </div>
//     <footer>
//       <Button onClick={props.onConfirm}>Okay</Button>
//     </footer>
//   </>
// }

// export default function ErrorModal(props) {
//   return <>
//     {ReactDOM.createPortal(<modalOverlay
//       title={props.title}
//       message={props.message}
//       onClick={props.onConfirm} />, document.getElementById('overlay-root'))}
//   </>
// }
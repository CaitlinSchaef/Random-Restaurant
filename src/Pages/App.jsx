import { Link } from "react-router-dom"

const Title = () => {
  return (
    <h1>
      Main Page
    </h1>
  )
}

function App() {
  return (
    <div className="p-5">
      <Link to='/menu'>Menu</Link>
      <Title />
    </div>
  )
}


export default App

import { Link } from "react-router-dom"
import axios from 'axios';



function Menu() {
  return (
    <div className="p-5">
      <Link to='/'>{'<- Back'}</Link>
      <h1>Menu Page</h1>
    </div>
  )
}


export default Menu

import { Link } from "react-router-dom"

function Contact() {
  return (
    <div className="p-5">
      <Link to='/'>{'<- Back'}</Link>
      <h1>Contact Page</h1>
    </div>
  )
}


export default Contact
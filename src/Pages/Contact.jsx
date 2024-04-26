import { Link } from "react-router-dom"

function Contact() {
  return (
    <div className="p-5">
      <Link to='/'>{'<- Back'}</Link>
      <h1>Contact Page</h1>
      <p>
      The restaurant's name (give it a good one!, we will crown a winner for the most creative)
The restaurant's address
The restaurant's hours of operation

      </p>
    </div>
  )
}


export default Contact
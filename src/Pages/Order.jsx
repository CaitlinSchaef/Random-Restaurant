import { Link } from "react-router-dom"
import axios from 'axios';
import ThemeProvider from 'react-bootstrap/ThemeProvider'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useEffect, useState } from "react";



// Main Order Function /////////////////////////////////////////////////////////////////////////////////////////////////////

function Order() {
  const [display, setDisplay] = useState ('')
  const [customerId, setCustomerId] = useState('')
  

  const firstChangeDisplay = () => {
    setDisplay('Customer')
  }

  const secondChangeDisplay = () => {
    setDisplay('Order')
  }

  const thirdChangeDisplay = () => {
    setDisplay('OrderItem')
  }
  
  const customerCreated = (id) => {
    setCustomerId(id)
    setDisplay()
  }
  
  
  // Checks for Customer and Creates a New One if Not ////////////////////////////////////////////////////////////////////////
  const NewCustomer = () => {
    const [name, setName] = useState('')
  
    const createCustomer = async () => {
      try {
        //First, check if the name entered already exists in the database
        const response = await axios.get(`http://127.0.0.1:8000/customer/?name=${name}`)
        //this is going to check and see if the response exists 
        if (response.data.length > 0) {
          const customerId = response.data[0].id 
          onCustomerCreated(customerId)
        } else {
          const newCustomerResponse = await axios.post('http://127.0.0.1:8000/customer/', { name })
          const newCustomerId = newCustomerResponse.data.id 
          onCustomerCreated(newCustomerId)
        }
      } catch(error) {
        console.log('ERROR: ', error)
      }
      }
      
      return (
        <div>
          <input
          onChange={e => setName(e.target.value)}
          placeholder="Enter Name For Order"
          value={name}
          />
          <br></br>
          <button onClick={() => {
            createCustomer()
            secondChangeDisplay()
          }}
          >
            Start Order
          </button>
        </div>
      )
    }

  // Creates a New Order ////////////////////////////////////////////////////////////////////////
  const NewOrder = ({ customerId }) => {
    //Passed it the customerId so that it can build the new order
    const [status, setStatus] = useState('')
    const [driver, setDriver] = useState('')
    const [driverTip, setDriverTip] = useState('')

    const createOrder = () => {
      axios.post('http://127.0.0.1:8000/order/')
    }
    // YOURE IN THE MIDDLE OF ALL OF THIS // 
    return (
      <div>
        <input
        onChange={e => setOrder(e.target.value)}
        placeholder="Enter Name For Order"
        value={name}
        />
        <br></br>
        <button onClick={() => {
          createOrder()
          thirdChangeDisplay()
        }}
        >
          Continue to Item Selection
        </button>
      </div>
    )
  }
  
  //a getter
  // async function getFood() {
  //   const foodList = await axios.get('http://127.0.0.1:8000/menuItem/')
  //   console.log("foodList:", foodList.data)
  //   setMenuItems(foodList.data)
  //   }




  

  return (
    <ThemeProvider
      breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs']}
      minBreakpoint="xs">
        <Container className>
          <Row className="justify-content-xs-center m-3 p-3 menuBody">
            <Col className="justify-content-center text-center p-1">
              <h1>ONLINE ORDER:</h1>
              {display !== 'Customer' && (
                <button onClick={firstChangeDisplay}>Begin Online Order:</button>
              )}
            </Col>
          </Row>
        </Container>
        {/* diplay order screens containers */}
        <Container className>
          <Row className="justify-content-xs-center m-3 p-3 menuBody">
            <Col className="justify-content-center text-center p-1">
              {/* The title=blank is what displays on the lower menu */}
              {display === "Customer" && <NewCustomer />}
              {display === "Order" && <NewOrder />}
            </Col>
          </Row>
        </Container>
      
    </ThemeProvider> 
  )
}



export default Order
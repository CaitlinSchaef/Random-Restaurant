import { Link } from "react-router-dom"
import ThemeProvider from 'react-bootstrap/ThemeProvider'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Logo from '../assets/_Logo4.png'
import Info from '../assets/_Logo4Contact.png'
import Image from 'react-bootstrap/Image';
import Sunset from '../assets/sardiniasunset.jpeg'

const Body = () => {
  return (
    <ThemeProvider
  breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs']}
  minBreakpoint="xs">
  <div>
    <Container className="mt-3 mb-3 specialContainer">
      <Row className="justify-content-md-center">
        <Col className="justify-content-center text-center mb-3" md="auto">
        <img
              alt="Contact Information"
              src={Info}
              width="auto"
              height="auto"
              className="d-inline-block align-top mt-2"
            />
        </Col>
      </Row>
    </Container>
  </div>
</ThemeProvider>
  )
}

function Contact() {
  return (
    <div className="p-5">
      <Body />
    </div>
  )
}



export default Contact
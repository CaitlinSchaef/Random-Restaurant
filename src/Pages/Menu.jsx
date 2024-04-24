import { Link } from "react-router-dom"
import axios from 'axios';
import ThemeProvider from 'react-bootstrap/ThemeProvider'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'




function Menu() {
  return (
    <ThemeProvider
  breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs']}
  minBreakpoint="xs">
  <div>
    <Container className="border mt-3 mb-3 ml-3 mr-3" id="AppBody">
      <Row className="justify-content-md-center">
        <Col className="justify-content-center text-center">
            <h2>Menu</h2>
        </Col>
      </Row>
    </Container>
  </div>
</ThemeProvider>
  )
}


export default Menu

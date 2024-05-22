import { Link } from "react-router-dom"
import ThemeProvider from 'react-bootstrap/ThemeProvider'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image';


const Body = () => {
  return (
    <ThemeProvider
    breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs']}
    minBreakpoint="xs">
        <div>
            <Container className="mt-3 mb-3">
            <Row className="justify-content-md-center menuBody">
                <Col className="justify-content-center text-center mb-3" md="auto">
                    <br></br>
                    <br></br>
                    <h3><strong>Customer Reviews</strong></h3>
                    <h5> We would love to hear about your experience with our food and staff!</h5>
                        <p>
                        This will be an input field to submit a review
                        </p>
                        <br></br>
                        <p>
                            This will be a display of reviews
                        </p>
                </Col>
            </Row>
            </Container>
        </div>
    </ThemeProvider>
  )
}

function Review() {
  return (
    <div className="p-5">
      <Body />
    </div>
  )
}



export default Review
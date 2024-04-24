import { Link } from "react-router-dom"
import ThemeProvider from 'react-bootstrap/ThemeProvider'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

// const Title = () => {
//   return (
//     <h1>
//       Main Page
//     </h1>
//   )
// }
// if you want this back in, add it above the Body tag in the App function       <Title />

const Body = () => {
  return (
    <ThemeProvider
  breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs']}
  minBreakpoint="xs">
  <div>
    <Container className="border mt-3" id="AppBody">
      <Row className="justify-content-md-center">
        <Col className="justify-content-center text-center" md="auto">
        <img
              alt=""
              src="./src/assets/_Logo4.png"
              width="200"
              height="auto"
              className="d-inline-block align-top mt-2 rounded-circle"
            />{' '}
            <br></br>
            <br></br>
            <h2>Veduta da Ortobene</h2>
        </Col>
      </Row>
    </Container>
  </div>
</ThemeProvider>
  )
}

function App() {
  return (
    <div className="p-5">
      <Body />
    </div>
  )
}


export default App

import { Link } from "react-router-dom"
import ThemeProvider from 'react-bootstrap/ThemeProvider'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Logo from '../assets/Logo4.png'
import Image from 'react-bootstrap/Image';
import Sunset from '../assets/sardiniasunset.jpeg'

const Body = () => {
  return (
    <ThemeProvider
  breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs']}
  minBreakpoint="xs">
  <div>
    <Container className="mt-3 mb-3">
      <Row className="justify-content-md-center menuBody">
        <Col className="justify-content-center text-center mb-3" md="auto">
        <img
              alt=""
              src={Logo}
              width="150"
              height="auto"
              className="d-inline-block align-top mt-2"
            />{' '}
            <br></br>
            <br></br>
              <h3><strong>Veduta da Ortobene</strong></h3>
                <p>
                <em>Veduta da Ortobene</em> is Italian for "view from Ortobene."
                Mount Ortobene is a mountain in the province of Nuoro, in central Sardinia, Italy, close to the town of Nuoro. There are two main parks: "Sedda Ortai" and "Il Redentore". <br></br>
                Sardinia is the second-largest island in the Mediterranean Sea, after Sicily, and one of the twenty regions of Italy. 
                Over the centuries, this stunning island has been shaped by diverse rulers, including the Phoenicians, Romans, Byzantines, and Spanish. While Sardinia has been influenced by various cultures throughout its history, including French (particularly through its proximity to Corsica), its identity is firmly rooted in Italian tradition. <br></br>
                It's said that from Mount Ortobene, France, Italy, Malta and Greece can be seen. We strive to bring you the perfect melding of the amazing blend that is Sardinia, our home, through our carefully cultivated menu. 
                </p>
                <Image src={Sunset} fluid />
        </Col>
      </Row>
    </Container>
  </div>
</ThemeProvider>
  )
}

function About() {
  return (
    <div className="p-5">
      <Body />
    </div>
  )
}


export default About

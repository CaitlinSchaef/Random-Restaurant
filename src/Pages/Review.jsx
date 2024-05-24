import { Link } from "react-router-dom"
import ThemeProvider from 'react-bootstrap/ThemeProvider'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image';



function Review() {
  const initialState = {
    name: '',
    stars: '',
    review: '',
  }

  const [form, setForm] = useState(initialState)
  const [name, setName] = useState('')
  const [stars, setStars] = useState('')
  const [reviewContent, setReviewContent] = useState('')
  const [reviews, setReviews] = useState(reviews)

  useEffect(() => {
    <DisplayReviews />
  }, [])


  const Form = () => {
    return (
      <form>
        <label>Your Name: 
          <input type="text" />
        </label>
        <textarea name="reviewContent" />
        <button>Submit Review</button>
      </form>
    )
  }

  // TO DISPLAY ALL REVIEWS ////////////////////////////////////////////////////////////////////
  const DisplayReviews = () => {
    const reviewList = axios.get('http://127.0.0.1:8000/customerReview/')
    console.log("reviewList:", reviewList.data)
    setReviews(reviewList.data)
  }

  // ACTUAL RETURNED INFORMATION //////////////////////////////////////////////////////////////
  return (
    <ThemeProvider
      breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs']}
      minBreakpoint="xs">
        <Container className>
          <Row className="justify-content-xs-center m-3 p-3 menuBody">
            <Col className="justify-content-center text-center p-1">
              <h1>Customer Reviews:</h1>
              <h5> We would love to hear about your experience with our food and staff!</h5>
            </Col>
          </Row>
        </Container>
        {/* display review form */}
        <Container className>
          <Row className="justify-content-xs-center m-3 p-3 menuBody">
            <Col className="justify-content-center text-center p-1">
              <Form />
              <br></br>
              <DisplayReviews />
            </Col>
          </Row>
        </Container>
      
    </ThemeProvider> 
  )
}



export default Review
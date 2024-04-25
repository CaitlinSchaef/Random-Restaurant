import { Link } from "react-router-dom"
import axios from 'axios';
import ThemeProvider from 'react-bootstrap/ThemeProvider'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';

// Should I first use the API to pull everything by cuisine_type French-Italian-Mediterranean : Appetizers (5), Lunch (4), Dinner (6)

// Set some Menu Consts?
const MenuTitle = ({title, onClick}) => {
  return (
    <div onClick={() => onClick(title)}>
      {title}
    </div>
  )
}


const FoodDisplay = ({food}) => {
  return (
    // <div>
    //   <Row className="justify-content-center">
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>{food.title}</Card.Title>
            <Card.Text>{food.description} <br></br>
            {food.price}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
    //   </Row>
    // </div>
  )
}

// displaying specific menus

const SpecificDisplay = ({ title, foodList }) => {
  return( 
    <div>
      <h1>{title}</h1>
      <Row className="justify-content-around g-4">
      {foodList.map(food => <FoodDisplay key={food.id} food={food} />)}
      </Row>
    </div>
  )
}



//a getter

async function getFood({ setMenuItems }) {
  const foodList = await axios.get(`https://raw.githubusercontent.com/bootcamp-students/random-restaurant-json/main/foodList.json`)
  console.log("foodList:", foodList) 
  setMenuItems(foodList.data.filter(food => food.cuisine_type === "Italian" || food.cuisine_type ===  "French" || food.cuisine_type === "Mediterranean"))
}

// function to insert info into the html divs  -setter

function fillMenu({ setAppetizers, setLunch, setDinner, menuItems }) {
  setAppetizers(menuItems.filter(food => food.category === "Appetizer"))
  setLunch(menuItems.filter(food => food.category === "Lunch"))
  setDinner(menuItems.filter(food => food.category === "Dinner")) 
}



function Menu() {
  const [menuItems, setMenuItems] = useState([])
  const [appetizers, setAppetizers] = useState([])
  const [lunch, setLunch] = useState([])
  const [dinner, setDinner] = useState([])
  const [display, setDisplay] = useState ('')
  console.log('MenuItems: ', menuItems)
  useEffect(() => {
    getFood({ setMenuItems })
  }, [])
  // empty brackets at the end of useEffect indicates it only happens on load, if a variable is in the brackets, it is watching that specific variable for change
  useEffect(() => {
    if (menuItems.length > 0) {
      fillMenu({ setAppetizers, setLunch, setDinner, menuItems })
    }
  }, [menuItems])

  useEffect(() => {
    <SpecificDisplay />
  }, [<MenuTitle />])
 

  return (
    <ThemeProvider
      breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs']}
      minBreakpoint="xs">
     
        <Container className>
          <Row className="justify-content-xs-center border m-3 p-3 menuBody">
            <Col className="justify-content-center text-center p-1">
              <h1>MENU</h1>
              <MenuTitle title="Appetizers" onClick={(() => setDisplay('Appetizers'))}/>
              <MenuTitle title="Lunch" onClick={(() => setDisplay('Lunch'))}/>
              <MenuTitle title="Dinner" onClick={(() => setDisplay('Dinner'))}/>
            </Col>
          </Row>
        </Container>
{/* diplay menu container */}
        <Container className>
          <Row className="justify-content-xs-center border m-3 p-3 menuBody">
            <Col className="justify-content-center text-center p-1">
              {display === "Appetizers" && <SpecificDisplay title="Appetizers" foodList={appetizers}/>}
              {display === "Lunch" &&  <SpecificDisplay title="Lunch" foodList={lunch}/>}
              {display === "Dinner" &&  <SpecificDisplay title="Dinner" foodList={dinner}/>}
            </Col>
          </Row>
        </Container>
      
    </ThemeProvider>
  )
}


export default Menu

// {display === 'Appetizers' ? (
//   <div>
//     <h1>Appetizers</h1>
//     {appetizers.map(food => <FoodDisplay key={food.id} food={food} />)}
//   </div>
// ) : null}
// <h1>Lunch</h1>
// {lunch.map(food => <FoodDisplay key={food.id} food={food} />)}
// <h1>Dinner</h1>
// {dinner.map(food => <FoodDisplay key={food.id} food={food} />)}
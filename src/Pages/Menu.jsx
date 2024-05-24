import { Link } from "react-router-dom"
import axios from 'axios';
import ThemeProvider from 'react-bootstrap/ThemeProvider'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';


const MenuTitle = ({title, onClick}) => {
  return (
    <div onClick={() => onClick(title)}>
      {title}
    </div>
  )
}


const FoodDisplay = ({food}) => {
  return (

        <Col md={6}>
          <Card className="cardBody">
            <Card.Body>
              <Card.Title className="cardTitle">{food.name}</Card.Title>
            <Card.Text>{food.description} <br></br>
            ${food.price}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
  )
}

// displaying specific menus

const SpecificDisplay = ({ title, menuItems }) => {
  return( 
    <div>
      <h1>{title}</h1>
      <Row className="justify-content-around g-4">
      {menuItems.map(food => <FoodDisplay key={food.id} food={food} />)}
      </Row>
    </div>
  )
}



// function to insert info into the html divs  -setter
// The issue is I'm filtering by this category and expecting it to be an integer, but it was an integer in an array, and because something can be in multiple categories it was an array, 
//so we didn't actually fix anything well, this will only work on things that have one category.
//We would need to change it to 'contains'/'includes' or something along those lines.
function fillMenu({ setAppetizers, setDessert, setDinner, setDrink, menuItems }) {
  setAppetizers(menuItems.filter(food => food.category[0] === 4))
  setDinner(menuItems.filter(food => food.category[0] === 1)) 
  setDessert(menuItems.filter(food => food.category[0] === 2))
  setDrink(menuItems.filter(food => food.category[0] === 3))
}



function Menu() {
  const [menuItems, setMenuItems] = useState([])
  const [appetizers, setAppetizers] = useState([])
  const [dessert, setDessert] = useState([])
  const [drink, setDrink] = useState([])
  const [dinner, setDinner] = useState([])
  const [display, setDisplay] = useState ('')
  console.log('MenuItems: ', appetizers, dinner, dessert, drink)

  //a getter
  async function getFood() {
    const foodList = await axios.get('http://127.0.0.1:8000/menuItem/')
    console.log("foodList:", foodList.data)
    setMenuItems(foodList.data)
    // awaits need try catches so add one dummy
    // .then(response => {
    //   setMenuItems(response.data)
    // })
    // .catch(error => console.log('ERROR: ', error))
  }
  useEffect(() => {
    getFood()
  }, [])
  // empty brackets at the end of useEffect indicates it only happens on load, if a variable is in the brackets, it is watching that specific variable for change
  useEffect(() => {
    console.log('Menu Items UseEffect')
    if (menuItems.length > 0) {
      fillMenu({ setAppetizers, setDessert, setDinner, setDrink, menuItems })
    }
  }, [menuItems])

  // useEffect(() => {
  //   <SpecificDisplay />
  // }, [<MenuTitle />])
 

  return (
    <ThemeProvider
      breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs']}
      minBreakpoint="xs">
     
        <Container className>
          <Row className="justify-content-xs-center m-3 p-3 menuBody">
            <Col className="justify-content-center text-center p-1">
              <h1>MENU</h1>
              <MenuTitle title="Appetizers" onClick={(() => setDisplay('Appetizers'))}/>
              <MenuTitle title="Dinner" onClick={(() => setDisplay('Dinner'))}/>
              <MenuTitle title="Dessert" onClick={(() => setDisplay('Dessert'))}/>
              <MenuTitle title="Drinks" onClick={(() => setDisplay('Drinks'))}/>
            </Col>
          </Row>
        </Container>
        {/* diplay menu container */}
        <Container className>
          <Row className="justify-content-xs-center m-3 p-3 menuBody">
            <Col className="justify-content-center text-center p-1">
              {display === "Appetizers" && <SpecificDisplay title="Appetizers" menuItems={appetizers}/>}
              {display === "Dinner" &&  <SpecificDisplay title="Dinner" menuItems={dinner}/>}
              {display === "Dessert" &&  <SpecificDisplay title="Dessert" menuItems={dessert}/>}
              {/* The title=blank is what displays on the lower menu */}
              {display === "Drinks" && <SpecificDisplay title="Drinks" menuItems={drink}/>}
            </Col>
          </Row>
        </Container>
      
    </ThemeProvider> 
  )
}


export default Menu


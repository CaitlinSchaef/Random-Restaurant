import { Link } from "react-router-dom"
import axios from 'axios';
import ThemeProvider from 'react-bootstrap/ThemeProvider'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useEffect, useState } from "react";

// Should I first use the API to pull everything by cuisine_type French-Italian-Mediterranean : Appetizers (5), Lunch (4), Dinner (6)

// Set some Menu Consts?
const Appetizer = ({/* component */}) => {
  return (
    <h3>
      Appetizers {/*component*/}
    </h3>
  )
}

const Lunch = ({/* component */}) => {
  return (
    <h3>
      Lunch {/*component*/}
    </h3>
  )
}

const Dinner = ({/* component */}) => {
  return (
    <h3>
      Dinner {/*component*/}
    </h3>
  )
}

const FoodDisplay = ({food}) => {
  return (
    <div>
      {food.title}
      {food.description}
      {food.price}
    </div>
  )
}

//a getter

async function getFood({ setMenuItems }) {
  const foodList = await axios.get(`https://www.jsonkeeper.com/b/MDXW`)
  console.log("foodList:", foodList) 
  setMenuItems(foodList.data.filter(food => food.cuisine_type === "Italian" || food.cuisine_type ===  "French" || food.cuisine_type === "Mediterranean"))
}

// function to insert info into the html divs  -setter

function fillMenu({ setAppetizers, setLunch, setDinner, menuItems }) {
  setAppetizers(menuItems.filter(food => food.category === "Appetizer"))

}


// OR something like:

// const handleClick = () => {
//   let newTitle = {foodlist.data.filter(food => food.title)};
//   let newDescription = {foodlist.data.filter(food => food.description)};
//   let newPrice = {foodlist.data.filter(food => food.price)};
//   setMenuItems(newMenuItem) //?
// }


// return (
//   <h3={{margin: '5px'}}
//     onClick={handleClick}
//     >
//       {`Click Me ${buttonCount}`} //? should this be where I build the div
//   </h3>
// )
// }




//Components to pull into menus by category
// Title 
// Description
// Price


function Menu() {
  const [menuItems, setMenuItems] = useState([])
  const [appetizers, setAppetizers] = useState([])
  const [lunch, setLunch] = useState([])
  const [dinner, setDinner] = useState([])
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
  console.log("Appetizers:", appetizers)

  return (
    <ThemeProvider
      breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs']}
      minBreakpoint="xs">
      <div>
        <Container className="border mt-3 mb-3 ml-3 mr-3 p-3" id="AppBody">
          <Row className="justify-content-xs-center">
            <Col className="justify-content-center text-center p-1">
                <h2>Menu</h2>
                <span>
                  <Appetizer />
                  <Lunch />
                  <Dinner />
                </span>
            </Col>
          </Row>
        </Container>
        {/* I want to set a component (maybe named Menu) here that will fill with a row with two columns over and over until  */}
            {/* all menu items have been called  */}
        <Container className="border mt-3 mb-3 ml-3 mr-3" id="AppBody">
          <Row className="justify-content-xs-center">
            <Col className="justify-content-center text-center p-1">
              {appetizers.map(food => <FoodDisplay food = {food} />)}
            </Col>
          </Row>
        </Container>
      </div>
    </ThemeProvider>
  )
}


export default Menu

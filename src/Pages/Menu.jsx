import { Link } from "react-router-dom"
import axios from 'axios';
import ThemeProvider from 'react-bootstrap/ThemeProvider'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useEffect, useState } from "react";

// Should I first use the API to pull everything by cuisine_type French-Italian-Mediterranean : Appetizers (5), Lunch (4), Dinner (6)

// async function grabWeather (zipCode, countryCode = 'US') {
//   try {
//       const weather = await 
//       axios.get(`https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},${countryCode}&appid=d5dec2820ad3221e7cd366cb8af99291`)
//       console.log(weather.data.name)
//       return weather
//   } catch (error) {
//   } 
// }

//a getter

async function getFood({ setCat1 }) {
  const foodList = await axios.get(`https://www.jsonkeeper.com/b/MDXW`)
  console.log(foodList)
  setCat1(foodList.data.filter(food => food.cuisine_type === "Italian" || food.cuisine_type ===  "French" || food.cuisine_type === "Mediterranean"))
}

// function to insert info into the html divs  -setter

// async function fillPage(zipCode){
//   if (errorMessage(zipCode)) {
//       console.log("error")
//   } else {

//   const weatherInfo = await grabWeather(zipCode)
//       console.log(weatherInfo)
//       cityBox.textContent = weatherInfo.data.name
//       kelvinBox.textContent = Math.floor(weatherInfo.data.main.temp) + ' K'
//       fahrenheitBox.textContent = Math.floor(((weatherInfo.data.main.temp)-273.15) * 1.8 + 32) + '°F'
//       celsiusBox.textContent = Math.floor(weatherInfo.data.main.temp-273.15) + '°C'
//       conditionBox.textContent = weatherInfo.data.weather[0].description + '!'
//       imageBox.src = `https://openweathermap.org/img/wn/${weatherInfo.data.weather[0].icon}@2x.png`
//       changeColor(weatherInfo.data.weather[0].id)
//   }
// }


// // get weather button function

// getWeatherButton.addEventListener('click', (()=>fillPage(zipCodeInput.value)))
// // getWeatherButton.className.setAttribute('disabled')
// // zipCodeInput.addEventListener("change",(getWeatherButton.classList.add(`${zipCodeInput.value.length !== 5 && 'disabled'}`)))


//Components to pull into menus by category
// Title 
// Description
// Price


function Menu() {
  const [cat1, setCat1] = useState([])
  console.log('CAT 1: ', cat1)
  useEffect(() => {
    getFood({ setCat1 })
  }, [])
  return (
    <ThemeProvider
  breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs']}
  minBreakpoint="xs">
  <div>
    <Container className="border mt-3 mb-3 ml-3 mr-3" id="AppBody">
      <Row className="justify-content-xs-center">
        <Col className="justify-content-center text-center p-1">
        <span><>Appetizers </><>Lunch </><>Dinner</></span>
            <h2>Menu</h2>
        </Col>
      </Row>
    </Container>
  </div>
</ThemeProvider>
  )
}


export default Menu

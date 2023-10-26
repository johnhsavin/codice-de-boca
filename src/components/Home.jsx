
import { useState } from "react"
import SingleMenuComponent from "./SingleMenuComponent"
export default function Home() {
  const [menuItems, setMenuItems] = useState(["hotdog", "burger"])  // =[stateVar, setter
  // 1. fetch data 
  // 2. get array of objects
  // 3. render each object.
  // 3.1 create a state variable
  // 3.2 put inside state variable the array of objects
  // 3.3 display each item in DOM
  // 3.3.1 map over the array of objects
  // 3.3.2 return each item so that it displays on the browser

  console.log(menuItems)

  const handleBtnClick = () => {
    console.log("hey class from a function")

    fetch("https://codice-boca.web.app/menu")
      .then(res => res.json())    // contacting the api
      .then(data => setMenuItems(data)) // get clean data 
      .catch(x => console.error(x))
  }

  return (
    <>
      <h2>I'm Home Component</h2>
      <button onClick={() => handleBtnClick()}>get data</button>
      {menuItems.map((singleItem) => {
        return (
          <>
          <SingleMenuComponent title={singleItem.title} />
            {/* <h2>{singleItem.title}</h2>
        <p>{singleItem.description}</p> {*/}
          </>
        )
      })}
    </>
  )
}
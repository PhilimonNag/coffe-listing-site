import React, { useEffect, useState } from 'react'
import "./app.css"
import Header from "./components/header/header" 
import Tab from "./components/tab/tab"
import CoffeeItem from './components/coffee-item/coffee-item'

function App() {
  const [coffelist,setCoffelist]=useState([{}])
  const [selectedTab,setSelectedTab]=useState("All Products")
  useEffect(()=>{
   fetch("https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json")
  .then(response => response.json())
  .then(data => {
    if(selectedTab==="Available Now"){
     const availableCoffee = data.filter(item => item.available);
     setCoffelist(availableCoffee);
     console.log(coffelist);
    }else{
      setCoffelist(data)
      console.log(coffelist)
    }
    
  })
  .catch(error => {
    console.log(error)
  })
  },[selectedTab])
  return (
       <div className='main-div'>
          <Header/>
          <Tab setSelectedTab={setSelectedTab} selectedTab={selectedTab} />
          <div className='coffe-items'>
            {coffelist.map(e => (
              // <h1 key={e.id}>{e.name}</h1>
              <CoffeeItem key={e.id} props={e}/>
            ))}
        </div>  
       </div>
  )
}

export default App
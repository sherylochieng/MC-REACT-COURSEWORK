

import './App.css'
import Testimonials from './components/Wednesday-props/mactaba-Assignments/Testimonials'
import StudentCard from './components/Wednesday-props/mactaba-Assignments/StudentCard'
import WatchGallery from './components/Wednesday-props/WatchCard'
import Result from './components/Thursday-Conditional-rendering/greet/greet'
import CasioWatch from './components/Thursday-Conditional-rendering/Stock'
import Notification from './components/Thursday-Conditional-rendering/Notification/Notification'
import Counter from './components/Friday-state&Events/State/Counter'
import Button from './components/Friday-state&Events/Events-click/button'
import LikeButton from './components/Friday-state&Events/LikeButton-State&Event/like'
import NameInput from './components/week9/Monday-state-forms/NameInput'
import Availability from './components/week9/Tuesday-rendering-lists/Filter'
import StudentTrack from './components/week9/Tuesday-rendering-lists/Map'
import Search from './components/week9/Tuesday-rendering-lists/Search'
import Student from './components/week9/Wednesday-filter and operators/filterTwo'
import ProductGrid from './components/week9/Wednesday-filter and operators/ProductLIst-search/Product'

function App(){
  return(
    <div>

      <h1>PROPS TUESDAY/WEDNESDAY 2ND/3RD MARCH</h1>
      <Testimonials/> 
      {/* <StudentCard/> */}

       <WatchGallery/><br />

      <h2>CONDITIONAL RENDERING THURSDAY 5TH MARCH</h2>
      <Result passed={true}/>
      <Result passed={false}/>

    <CasioWatch name="Casio" price={12} instock={true} isNew={true} />
    <Notification hasMessage={true}/>


      <br />
      
    {/* //STATES */}
        <h1> STATE H00KS FRIDAY 6TH MARCH</h1>
    <Counter/>

           <h1> EVENTS FRIDAY 6TH MARCH</h1>

    <Button/>

     <h1>LIKE BUTTON STATES & EVENTS</h1>   
    <LikeButton/>

      <h1>STATE IN FORMS MONDAY 9/03/26</h1>  
      <h1>week 9</h1>
      <NameInput/>

      
      <h1>MAPPING ,FILTER,SEARCH FIELD 9/03/26</h1> 

      <StudentTrack/>
       
      <Availability/>
      <Search/>

      
      <h1>DOUBLE FILTERING WITH && AND || 11TH/MARCH/26</h1> 
      <Student/>

      
      <h1>SEARCH AND FILTER PROJECT WEDNESDAY 11TH MARCH 2026</h1> 

      <ProductGrid/>


    </div>
  )
}

export default App



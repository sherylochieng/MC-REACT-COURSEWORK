

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
import SignIn from './components/week9/Thursday-controled -input/Signin/SignInput'
import Login from './components/week9/Thursday-controled -input/Signin/e-preventDefault()/submit'
import SignPrevious from './components/week9/Thursday-controled -input/SignInTwo/Sign'
// import Counterno from './components/Revision/states/countno'
import UserDashboard from './components/week9/Friday-USE-EFFECTS/USER-DASHBOARD/UserList'
import { Routes,Route } from 'react-router'
import About from './components/week10/TuesdayREACT-ROUTER/About'
import Home from './components/week10/TuesdayREACT-ROUTER/About'
import Products from './components/week10/TuesdayREACT-ROUTER/Products'
import Nav from './components/week10/TuesdayREACT-ROUTER/Nav'
import Userprofile from './components/week10/Wednesday-DynamicROUTING/UserParams/Userprofile'
import HomeButton from './components/week10/Wednesday-DynamicROUTING/UseNavigate/HomeButton'


import LikButtonTwo from './components/Revision/StatesTwo/LikButton'
import NameInputTwo from './components/Revision/InputEvents/NameInput'
import CounterTwo from './components/Revision/PROJCTA-STATES/CounterTwo'
import Password from './components/Revision/PROJCTA-STATES/PASSWORD/Password'
import OnlineStatus from './components/Revision/ONLINE/OnlineStatus'
import BioSection from './components/Revision/CONDITIONAL-RENDERING/BioSection'

function App(){
  return(
    
    <div>
      <h1>REVISION </h1>
      <LikButtonTwo/>

      <br />
      <NameInputTwo/>
      <br />
      <br />
      <CounterTwo/>
      <br />
      <br />
      <h1>PASSWORD</h1>
      <Password/>

      <br />
      <br />
      <h1>ONLINE/OFFLINE</h1>
      <OnlineStatus/>

      <br />
      <br />
      <h1>BIO-SECTION</h1>
      <BioSection/>


      <br />
      <br />
{/* 
      <CounterTwo/> */}
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
        <h1>CONTROLLED INPUTS THURSDAY 12TH MARCH 2026</h1>
      <SignIn/>

    <br />

    <Login/>
    <SignPrevious/>

      <h1>USE EFFECT,,FRIDAY 13TH MARCH 2026</h1>
      
      <UserDashboard/>

      
      <h1>WEEK 10 REACT ROUTER..LINKING PAGES TUESDAY 17TH MARCH</h1>

      <Nav/>
       <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/products" element={<Products />} />
    
    </Routes>

  <br />
  
      <h1>WEEK 10 DYNAMIC ROUTING-USERPARAMS WEDNESDAY 18TH MARCH</h1>
      <h2>navigate ur url on the browser and write:"http://localhost:5174/users/sheryl"</h2>
    <p></p>

      <Routes>
      <Route path="/users/:userName" element={<Userprofile/>} />
      </Routes>

      <h1>USENAVIGATE</h1>
      <HomeButton/>
    
      

    </div>
  )
}

export default App



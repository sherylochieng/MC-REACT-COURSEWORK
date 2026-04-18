

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
import Faq from './components/Revision/PROJECTS/FAQ-ACCORDION/Faq'
import FaqList from './components/Revision/PROJECTS/FAQ-ACCORDION/Faqlist'
import FaqId from './components/Revision/PROJECTS/FAQ-ACCORDION/FaqId'
import Theme from './components/Revision/PROJECTS/THEMETOGGLE/Theme'
import FormNew from './components/Revision/PROJECTS/FORM-NEW/FormNew'

import StudentDirectory from './components/Revision/RENDERING-UI-LISTS/MAP/StudentDirectory'
import StudentActive from './components/Revision/RENDERING-UI-LISTS/FILTER/StudentFilter'
import StudentEmpty from './components/Revision/RENDERING-UI-LISTS/EMPTY -LOADING STATE/Empty'
import Loading from './components/Revision/RENDERING-UI-LISTS/LOADING -STATE/Loading'
import { movies } from './components/Revision/RENDERING-UI-LISTS/LOADING -STATE/data'
import SearchTwo from './components/Revision/RENDERING-UI-LISTS/SEARCH/SearchTwo'
import SearchTwoTernary from './components/Revision/RENDERING-UI-LISTS/SEARCH/SearchTwoTenary'
import StudentList from './components/Revision/EXTRACTING-LIST-ITEMS-INTO-COMPONENTS/StudentList'
import FormPreventDefault from './components/Revision/week08/Form-epreventdefault/form/FormPreventDefault'
import SignupFormHandlingFields from './components/Revision/week08/HANDLING-MULTIPLE-FIELDS/Signu-up-form/SignupRevision'

function App(){
//     const movies=[
//  {id:1, name:"Sheryl", admNumber:2345, year:4, duration:"6 Months", attendance:"online",active: true},
//   {id:2, name:'Joy', admNumber:4567, year:6, duration:'7 Months', attendance:'physical',active: false},
//   {id:3, name:'Shila', admNumber:7890, year:7, duration:'8 Months', attendance:'online', active: true},
// ]

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
      <h1>FAQ-PROJECT</h1>
      <Faq/>

      <br />
      <br />
      <h1>FAQ-LIST</h1>
      <FaqList/>

      <br />
      <br />
      <h1>FAQ-LIST ID</h1>
      <FaqId/>

      <br />
      <br />
      <h1>DARK/LIGHT THEME TOGGLE</h1>
      <Theme/>

      <br />
      <br />
      <h1>FORM NEW</h1>
      <FormNew/>

      
      <br />
      <br />
      <h1>RENDERING UI WEEK7 DAY4</h1>
       <h1>MAP METHOD</h1>
      <StudentDirectory/>

      <br />
      <br />
      <h1>RENDERING UI WEEK7 DAY4</h1>
       <h1>FILTER METHOD</h1>
      <StudentActive/>

      <br />
      <br />
      <h1>EMPTY STATE</h1>
      <StudentEmpty/>

      <br />
      <br />
      <h1>LOADING STATE</h1>
    
      <Loading isLoading={true} movies={movies}/>

      <br />
      <br />
      <h1>SEARCH STATE</h1>
      <SearchTwo/>

      <br />
      <br />
      <h1>SEARCH TWO TENARY</h1>
      <SearchTwoTernary/>

      <br />
      <br />
      <h1>SEPERATING COMPONENTS</h1>
      <StudentList/>

      <br />
      <br />
      <h1>WEEKK 08 REVISION day1 A</h1>
      <h1>FormPreventDefault(e.prevent default and onsubmit and form)</h1>
      <FormPreventDefault/>

       <br />
      <br />
      <h1>WEEK 08 REVISION day1 B</h1>
      <h1>Handling multiple Fields</h1>
      <SignupFormHandlingFields/>










      <br />
      
      <br />
      <br />

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



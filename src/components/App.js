import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';


import Home from './Home';
import About from './About';
import ContactUs from './ContactUs';
import StudentLogin from './Authentication/StudentLogin';
import AdminLogin from './Authentication/AdminLogin';
import Admission from './Admission';
import StudentSignup from './Authentication/StudentSignUp'


import Navigation from './navigation';

const App =()=>{
  return (
     <div>
       <BrowserRouter>
         <div>
          <Navigation/>
           <Switch>
             <Route path ='/' exact component= {Home} />
             <Route path ="/aboutus" exact component= {About} />
             <Route path ="/contactus" exact component= {ContactUs} />
             <Route path ="/login" exact component= {StudentLogin} />
             <Route path ="/signup" exact component= {StudentSignup} />
             <Route path ="/hsam-admin" exact component= {AdminLogin} />
             <Route path ="/admission" exact component= {Admission} />
             
           </Switch>
         </div>
       </BrowserRouter>
     </div>
    
  );
}

export default App;

import React, { useContext, useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { adminOptionRoutes, adminRoute, courseRoute, navRoutes, loginRoute, signupRoute } from './Common/routes';
import About from "./Pages/About";
import Capabilities from "./Pages/Capabilities";
import Carriers from "./Pages/Carriers";
import Home from "./Pages/Home";
import Industries from "./Pages/Industries";
import { contactRoute } from './Common/routes';
import RequireAdmin from './Components/utils/RequireAdmin';
import Main from './Pages/wrapper/Main';
import AboutState from './context/admin/AboutState';
import IndustryState from './context/admin/IndustryState';
import ContactState from './context/admin/ContactState';
import SocialMediaState from './context/admin/SocialMediaState';
import navContext from './context/admin/navContext';

function App() {

  const { getAllShowNav } = useContext(navContext)

  const loadPage = (name) => {
    if(name === 'home') return Home;
    else if(name === 'industries') return Industries;
    else if(name === 'capabilities') return Capabilities;
    else if(name === 'about') return About;
    else if(name === 'careers') return Carriers;
  }

  useEffect(() => {
    getAllShowNav();
  }, [])

  return (

    // Context api components
    <>
    <IndustryState>
    <AboutState>
    <ContactState>
    <SocialMediaState>

    {/* Main Router */}
    <BrowserRouter>
    
      <Routes>
        <Route element={<Main />} >
          {
            navRoutes?.map(el => {
              const Element = loadPage(el.name);
              return <Route key={el.name} path={el.path} element={<Element />} />
            }
          )
        }

          {/* Other Routes */}
          <Route path={contactRoute.path} element={<contactRoute.element />} />
          <Route path={`${courseRoute.path}/:course`} element={<courseRoute.element />} />
          
        </Route>

        {/* Admin Pannel Routes */}
        <Route path={loginRoute.path} element={<loginRoute.element />} />
        <Route path={signupRoute.path} element={<signupRoute.element />} />

        <Route element={<RequireAdmin />} >
          <Route path={adminRoute.path} element={<adminRoute.element />}>
            {
              adminOptionRoutes?.map(option => 
                <Route key={option.name} path={option.path} element={<option.element />} />
              )
            }
          </Route>
        </Route>

      </Routes>
    </BrowserRouter>
    </SocialMediaState>
    </ContactState>
    </AboutState>
    </IndustryState>
    </>
  );
}

export default App;

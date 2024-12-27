import React, { useContext, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { 
  adminOptionRoutes, 
  adminRoute, 
  courseRoute, 
  navRoutes, 
  loginRoute, 
  signupRoute, 
  contactRoute 
} from './Common/routes';
import About from "./Pages/About";
import Capabilities from "./Pages/Capabilities";
import Carriers from "./Pages/Carriers";
import Home from "./Pages/Home";
import Industries from "./Pages/Industries";
import RequireAdmin from './Components/utils/RequireAdmin';
import Main from './Pages/wrapper/Main';
import AboutState from './context/admin/AboutState';
import IndustryState from './context/admin/IndustryState';
import ContactState from './context/admin/ContactState';
import SocialMediaState from './context/admin/SocialMediaState';
import navContext from './context/admin/navContext';

function App() {
  const { getAllShowNav } = useContext(navContext);

  // Map of page components for dynamic loading
  const pages = {
    home: Home,
    ourinitiative: Industries,
    capabilities: Capabilities,
    about: About,
    careers: Carriers,
  };

  // Function to load pages dynamically
  const loadPage = (name) => pages[name] || Home;

  useEffect(() => {
    getAllShowNav();
  }, [getAllShowNav]);

  return (
    <IndustryState>
      <AboutState>
        <ContactState>
          <SocialMediaState>
            <BrowserRouter>
              <Routes>
                {/* Main Routes */}
                <Route element={<Main />}>
                  {navRoutes.map((el) => {
                    const Element = loadPage(el.name);
                    return <Route key={el.name} path={el.path} element={<Element />} />;
                  })}

                  {/* Static Routes */}
                  <Route path={contactRoute.path} element={<contactRoute.element />} />
                  <Route path={`${courseRoute.path}/:course`} element={<courseRoute.element />} />
                </Route>

                {/* Auth Routes */}
                <Route path={loginRoute.path} element={<loginRoute.element />} />
                <Route path={signupRoute.path} element={<signupRoute.element />} />

                {/* Admin Panel Routes */}
                <Route element={<RequireAdmin />}>
                  <Route path={adminRoute.path} element={<adminRoute.element />}>
                    {adminOptionRoutes.map((option) => (
                      <Route key={option.name} path={option.path} element={<option.element />} />
                    ))}
                  </Route>
                </Route>
              </Routes>
            </BrowserRouter>
          </SocialMediaState>
        </ContactState>
      </AboutState>
    </IndustryState>
  );
}

export default App;

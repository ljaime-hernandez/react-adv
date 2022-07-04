<<<<<<< HEAD
import { BrowserRouter, Routes, Route, NavLink, Navigate } from 'react-router-dom';
import { Suspense } from 'react';
import { routes } from './routes';
import logo from '../logo.svg';

export const Navigation = () => {

  return (
    // the Suspense Fallback will render a component or HTML element which will be displayed while the user requests for additional
    // chunks of the webpage
    <Suspense fallback={<span>Loading...</span>}>
      <BrowserRouter>
        <div className="main-layout">
          <nav>

            <img src={ logo } alt="React Logo" />

            <ul>
              {
                routes.map(route => (
                  <li key={ route.to }>
                    <NavLink 
                      to={route.to} 
                      className={({isActive}) => isActive ? 'nav-active' : ''}>
                      {route.name}
                    </NavLink>
                  </li>
                ))
              }
            </ul>

          </nav>

          <Routes>
            {
              routes.map(route => (
                <Route
                  key={route.to} 
                  path={route.path} 
                  element={<route.Component/>} />
              ))
            }
            
            {/* 
                the routes[0].to will redirect to the first index of the routes array and
                the replace attribute will not allow the user to come back to whatever link he was
                trying to access
            */}
            <Route path='/*' element={ <Navigate to={routes[0].to} replace/>}/>
          </Routes>

        </div>
      </BrowserRouter>
    </Suspense>
  );
}
=======
import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';
import { routes } from './routes';

import logo from '../logo.svg'



export const Navigation = () => {
    return (
        <Suspense fallback={ <span>Loading...</span> }>

            <BrowserRouter>
                <div className="main-layout">
                    <nav>
                        <img src={ logo } alt="React Logo" />
                        <ul>
                            
                            {
                                routes.map(({ to, name }) => (
                                    <li key={ to }>
                                        <NavLink 
                                            to={ to } 
                                            className={ ({ isActive }) => isActive ? 'nav-active' : '' }>
                                            { name }
                                        </NavLink>
                                    </li>
                                ))
                                    
                            }
                            
                            
                        </ul>
                    </nav>


                    <Routes>
                        
                        {
                            routes.map( ({ path, Component  }) => (
                                <Route 
                                    key={ path }
                                    path={ path }
                                    element={ <Component /> } 
                                />
                            ))
                        }

                        
                        <Route path="/*" element={ <Navigate to={ routes[0].to } replace /> } />
                    </Routes>

                </div>
            </BrowserRouter>
        </Suspense>
    )
}
>>>>>>> 5275af36577841944541c291875a9e2db0a84f52

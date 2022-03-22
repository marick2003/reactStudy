import React from 'react';
import { Outlet, Link } from "react-router-dom";

const Menu=()=>{

    return (
        <>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/Weather">WeatherApp</Link>
              </li>
              <li>
                <Link to="/test">Test</Link>
              </li>
            </ul>
          </nav>
          <Outlet />
        </>
      )
}
export default Menu;
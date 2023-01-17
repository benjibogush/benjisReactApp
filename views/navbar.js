import React from 'react';
import { Link } from "react-router-dom";
// import Link  from 'react-router'

export default function navbar() {
  return (
    <>
  
        <div>
          <li>
            <Link to="/">'Home'</Link>
          </li>
          <li>
            <Link to="/MeetBenji">'Meet Benji'</Link>
          </li>
          <li>
            <Link to="/Email">'Connect with me!'</Link>
          </li>
      
        </div>
      
    </>
  );
}
// export default navbar;
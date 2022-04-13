import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

function CustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
  
    return (
      <div className='menu'>
        <Link
          style={{color: match ? 'red' : 'black', borderBottom:  match ? '2px solid red ' : '2px solid #14141448'}}
          to={to}
          {...props}
        >
          {children}
        </Link>
        {/* {match && " (active)"} */}
      </div>
    );
}


export default CustomLink;
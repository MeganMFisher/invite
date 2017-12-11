import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

export default function Header() {
  return (
    <div>
      
      <Link to="/">
          <p>Our Story</p>
        </Link>

        <Link to="/weddingDetails">
          <p>Wedding Details</p>
        </Link>

        {/* <Link to="/3">
          <p>SlideShow</p>
        </Link> */}
    </div>
  )
}
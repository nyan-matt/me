import * as React from "react";
import { Link } from 'gatsby';

const NotFoundPage = () => (
  <div style={{
    background: 'url(/img/giphy.gif) no-repeat center center fixed',
    backgroundSize: 'cover',
    height: '100vh'
  }}>
    <div className="div-center">
      <div className="message-center">
        <h1 className="title has-text-white">404 PAGE NOT FOUND</h1>
        <p className="subtitle has-text-white">
          Sorry about that, I've been moving some things around, and it looks like the requested page no longer exists.
        </p> 
        <p className="has-text-white">
          Maybe try to go <Link to="/">Home</Link> and start from there?</p>
      </div>
    </div>
  </div>
);

export default NotFoundPage;

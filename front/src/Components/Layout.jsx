import React from 'react';
import '../App.css'

const Layout = ({
  title = "Title",
  description = "Description",
  className,
  children
}) => (
  <div>
    <div className="p-4 bg-body-secondary jumbotron">
      <div className='container'>
      <h2>{title}</h2>
      <p className="lead">{description}</p>

      </div>
    </div>
    <div className={className}>{children}</div>
  </div>
);

export default Layout;
